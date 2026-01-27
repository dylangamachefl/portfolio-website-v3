
import React, { useEffect } from 'react';

interface ResumeModalProps {
  onClose: () => void;
  pdfUrl?: string; // Optional prop to pass the PDF URL
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose, pdfUrl = "/Dylan_Gamache_Resume.pdf" }) => {
    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
             
             <div className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                
                {/* Header Actions */}
                <div className="flex justify-between items-center p-4 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark z-10">
                    <h2 className="text-lg font-semibold text-text-light-primary dark:text-text-dark-primary flex items-center gap-2">
                        <span className="material-icons-outlined text-primary">description</span>
                        Resume
                    </h2>
                    <div className="flex gap-2">
                        <a 
                            href={pdfUrl}
                            download="Dylan_Gamache_Resume.pdf"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
                        >
                            <span className="material-icons-outlined text-sm">download</span>
                            <span className="hidden sm:inline">Download PDF</span>
                        </a>
                        <button 
                            onClick={onClose}
                            className="p-2 text-text-light-secondary hover:text-text-light-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Close"
                        >
                            <span className="material-icons-outlined">close</span>
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="flex-1 bg-slate-100 dark:bg-slate-900 relative">
                    <iframe 
                        src={`${pdfUrl}#toolbar=0`} 
                        className="w-full h-full"
                        title="Resume PDF"
                    />
                    
                    {/* Fallback for browsers that don't support iframe PDF rendering well on mobile */}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-text-light-secondary dark:text-text-dark-secondary p-8 text-center">
                        <p className="mb-4">Unable to display PDF directly.</p>
                        <a 
                            href={pdfUrl}
                            download
                            className="text-primary hover:underline"
                        >
                            Click here to download
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
