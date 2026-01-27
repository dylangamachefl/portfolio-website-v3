import React, { useState, useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    formActionUrl: string;
    entryIds: {
        name: string;
        email: string;
        message: string;
    };
}

export const ContactModal: React.FC<ContactModalProps> = ({
    isOpen,
    onClose,
    formActionUrl,
    entryIds
}) => {
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [honeypot, setHoneypot] = useState('');

    useEffect(() => {
        if (!isOpen) {
            // Reset state when modal closes
            setSubmitted(false);
            setShowSuccess(false);
            setHoneypot('');
        }
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleIframeLoad = () => {
        if (submitted) {
            setShowSuccess(true);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent submission if honeypot is filled (bot detection)
        if (honeypot) {
            e.preventDefault();
            return;
        }
        setSubmitted(true);
    };

    const handleClose = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleClose}
        >
            <div
                className="relative w-full max-w-lg bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors z-10 group"
                    aria-label="Close modal"
                >
                    <span className="material-icons-outlined text-text-light-secondary dark:text-text-dark-secondary group-hover:text-text-light-primary dark:group-hover:text-text-dark-primary transition-colors">
                        close
                    </span>
                </button>

                {/* Hidden iframe for headless submission */}
                <iframe
                    name="hidden_confirm"
                    id="hidden_confirm"
                    title="Form submission confirmation"
                    style={{ display: 'none' }}
                    onLoad={handleIframeLoad}
                />

                <div className="p-8">
                    {!showSuccess ? (
                        // Form View
                        <div>
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-full bg-primary/10">
                                        <span className="material-icons-outlined text-primary text-2xl">
                                            mail
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary">
                                        Send a Message
                                    </h2>
                                </div>
                                <p className="text-text-light-secondary dark:text-text-dark-secondary text-sm">
                                    I'll get back to you as soon as possible!
                                </p>
                            </div>

                            <form
                                id="contact-form"
                                action={formActionUrl}
                                method="POST"
                                target="hidden_confirm"
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2"
                                    >
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name={entryIds.name}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-800 text-text-light-primary dark:text-text-dark-primary placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2"
                                    >
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name={entryIds.email}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-800 text-text-light-primary dark:text-text-dark-primary placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-text-light-primary dark:text-text-dark-primary mb-2"
                                    >
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name={entryIds.message}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-800 text-text-light-primary dark:text-text-dark-primary placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                {/* Honeypot Field (hidden from users, catches bots) */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={honeypot}
                                    onChange={(e) => setHoneypot(e.target.value)}
                                    style={{
                                        position: 'absolute',
                                        left: '-9999px',
                                        width: '1px',
                                        height: '1px'
                                    }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 rounded-xl bg-primary text-white font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
                                >
                                    <span>Send Message</span>
                                    <span className="material-icons-outlined text-lg group-hover:translate-x-1 transition-transform">
                                        send
                                    </span>
                                </button>
                            </form>
                        </div>
                    ) : (
                        // Success View
                        <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                            <div className="mb-6 flex justify-center">
                                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30">
                                    <span className="material-icons-outlined text-green-600 dark:text-green-400 text-5xl">
                                        check_circle
                                    </span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
                                Message Sent!
                            </h3>
                            <p className="text-text-light-secondary dark:text-text-dark-secondary mb-6 max-w-sm mx-auto">
                                Thanks for reaching out! I'll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={handleClose}
                                className="px-6 py-3 rounded-xl bg-text-light-primary dark:bg-white text-white dark:text-text-light-primary font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
