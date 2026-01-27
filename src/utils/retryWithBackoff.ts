
export interface RetryOptions {
    maxRetries?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    backoffMultiplier?: number;
    shouldRetry?: (error: any) => boolean;
}

export class RetryableError extends Error {
    constructor(
        message: string,
        public readonly originalError: any,
        public readonly retryAttempt: number,
        public readonly maxRetries: number
    ) {
        super(message);
        this.name = 'RetryableError';
    }
}

/**
 * Executes a function with exponential backoff retry logic
 * @param fn The async function to execute
 * @param options Retry configuration options
 * @returns The result of the function if successful
 * @throws RetryableError if all retries are exhausted
 */
export async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    options: RetryOptions = {}
): Promise<T> {
    const {
        maxRetries = 3,
        initialDelayMs = 1000,
        maxDelayMs = 10000,
        backoffMultiplier = 2,
        shouldRetry = defaultShouldRetry
    } = options;

    let lastError: any;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;

            // Don't retry if we've exhausted attempts or error is not retryable
            if (attempt === maxRetries || !shouldRetry(error)) {
                throw new RetryableError(
                    `Failed after ${attempt + 1} attempt(s): ${getErrorMessage(error)}`,
                    error,
                    attempt,
                    maxRetries
                );
            }

            // Calculate delay with exponential backoff
            const delay = Math.min(
                initialDelayMs * Math.pow(backoffMultiplier, attempt),
                maxDelayMs
            );

            console.warn(
                `Attempt ${attempt + 1}/${maxRetries + 1} failed: ${getErrorMessage(error)}. Retrying in ${delay}ms...`
            );

            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    // This should never be reached, but TypeScript needs it
    throw new RetryableError(
        `Failed after ${maxRetries + 1} attempts`,
        lastError,
        maxRetries,
        maxRetries
    );
}

/**
 * Default retry logic - retries on 503, 429, and network errors
 */
function defaultShouldRetry(error: any): boolean {
    // Check for API error status codes
    if (error?.error?.code) {
        const code = error.error.code;
        // Retry on 503 (Service Unavailable), 429 (Too Many Requests), 500 (Internal Server Error)
        return code === 503 || code === 429 || code === 500;
    }

    // Check for status in error object
    if (error?.status) {
        return error.status === 'UNAVAILABLE' || error.status === 'RESOURCE_EXHAUSTED';
    }

    // Check for network errors
    if (error?.message) {
        const msg = error.message.toLowerCase();
        return msg.includes('network') ||
            msg.includes('timeout') ||
            msg.includes('unavailable') ||
            msg.includes('overloaded');
    }

    // Don't retry by default
    return false;
}

/**
 * Extracts a readable error message from various error formats
 */
function getErrorMessage(error: any): string {
    if (error?.error?.message) return error.error.message;
    if (error?.message) return error.message;
    if (typeof error === 'string') return error;
    return 'Unknown error';
}
