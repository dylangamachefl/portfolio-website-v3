
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROJECTS, INTERESTS, SKILLS, USER_NAME, USER_ROLE, USER_BIO, EXPERIENCE, EDUCATION } from '../constants';
import { retryWithBackoff, RetryableError } from '../utils/retryWithBackoff';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Format context data for the prompt
const projectContext = PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n');
const interestContext = INTERESTS.map(i => i.label).join(', ');
const skillsContext = SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n');
const experienceContext = EXPERIENCE.map(exp =>
  `**${exp.role}** at ${exp.company} (${exp.period}):\n${exp.description.map(d => `  - ${d}`).join('\n')}`
).join('\n\n');
const educationContext = EDUCATION.map(edu =>
  `- ${edu.degree} from ${edu.institution} (${edu.period})`
).join('\n');

const SYSTEM_CONTEXT = `
You are an AI assistant embedded in ${USER_NAME}'s portfolio website. 
${USER_NAME} is a ${USER_ROLE}.
About ${USER_NAME}: ${USER_BIO}

Here is ${USER_NAME}'s work experience:
${experienceContext}

Here is ${USER_NAME}'s education:
${educationContext}

Here is a list of ${USER_NAME}'s projects that you can discuss:
${projectContext}

Here are ${USER_NAME}'s technical skills:
${skillsContext}

Here are ${USER_NAME}'s personal interests:
${interestContext}

Your primary goals are:
1. Represent ${USER_NAME} professionally and answer questions about their work, skills, projects, interests, experience, and education based STRICTLY on the information provided above.
2. If asked about something not in the provided information, politely state that you don't have that information.
3. Keep responses concise, friendly, and helpful. 
4. Do not make up facts about projects, experience, or education that are not listed.
5. **Format your responses using Markdown.** Use bold text for emphasis (e.g., project titles, key skills), bullet points for lists, and code blocks if sharing code snippets. This makes the text easier to read in a chat interface.
`;

let chatSession: Chat | null = null;
let isFirstMessage = true;

export const initializeChat = () => {
  // Gemma models don't support systemInstruction, so we create without it
  chatSession = ai.chats.create({
    model: 'gemma-3-27b-it',
  });
  isFirstMessage = true;
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<{ text: string }> => {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) throw new Error("Failed to initialize chat");

  try {
    return await retryWithBackoff(async () => {
      // Prepend system context to first message only
      const messageToSend = isFirstMessage
        ? `${SYSTEM_CONTEXT}\n\nUser question: ${message}`
        : message;

      isFirstMessage = false;

      const response = await chatSession!.sendMessage({ message: messageToSend });
      return { text: response.text || "" };
    }, {
      maxRetries: 3,
      initialDelayMs: 1000,
      maxDelayMs: 8000,
      backoffMultiplier: 2
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    // Provide user-friendly error messages
    if (error instanceof RetryableError) {
      return {
        text: `I'm experiencing high demand right now. I tried ${error.retryAttempt + 1} times but couldn't connect. Please try again in a moment.`
      };
    }

    return { text: "I'm having trouble connecting right now. Please try again later." };
  }
};

export const streamMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) throw new Error("Failed to initialize chat");

  // Prepend system context to first message only
  const messageToSend = isFirstMessage
    ? `${SYSTEM_CONTEXT}\n\nUser question: ${message}`
    : message;

  isFirstMessage = false;

  try {
    // Wrap the streaming call with retry logic
    const result = await retryWithBackoff(
      async () => chatSession!.sendMessageStream({ message: messageToSend }),
      {
        maxRetries: 3,
        initialDelayMs: 1000,
        maxDelayMs: 8000,
        backoffMultiplier: 2
      }
    );

    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      const text = c.text;
      if (text) {
        yield text;
      }
    }
  } catch (error) {
    console.error("Gemini Streaming Error:", error);

    // Provide detailed error messages based on error type
    if (error instanceof RetryableError) {
      const originalError = error.originalError;

      // Check if it's a 503 overload error
      if (originalError?.error?.code === 503) {
        yield `⚠️ **Service Temporarily Unavailable**\n\nThe AI service is experiencing high demand right now. I attempted to connect ${error.retryAttempt + 1} times over ${calculateTotalRetryTime(error.retryAttempt)}.\n\n**Please try again in a few moments.**`;
      }
      // Check if it's a rate limit error
      else if (originalError?.error?.code === 429) {
        yield `⚠️ **Rate Limit Reached**\n\nToo many requests have been made. Please wait a moment before trying again.`;
      }
      // Generic retry exhausted message
      else {
        yield `⚠️ **Connection Failed**\n\nI tried ${error.retryAttempt + 1} times but couldn't establish a connection. Please try again later.`;
      }
    } else {
      yield "⚠️ **Error**\n\nI encountered an unexpected error. Please try again.";
    }
  }
};

/**
 * Calculate approximate total retry time for user feedback
 */
function calculateTotalRetryTime(attempts: number): string {
  // 1s, 2s, 4s pattern
  let total = 0;
  for (let i = 0; i < attempts; i++) {
    total += Math.min(1000 * Math.pow(2, i), 8000);
  }

  if (total < 1000) return `${total}ms`;
  if (total < 60000) return `${Math.round(total / 1000)}s`;
  return `${Math.round(total / 60000)}m`;
}

