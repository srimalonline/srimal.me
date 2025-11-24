"use client";
import { useState, useEffect } from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { PresentationDisplayModal } from './presentation-display-modal';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [presentationCode, setPresentationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [presentationUrl, setPresentationUrl] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleModalDismiss = () => {
    handleClose();
  };

  useEffect(() => {
    if (isClosing && presentationUrl === null) {
      const timer = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    } else if (isClosing && presentationUrl !== null) {
      // If presentation is loaded, just reset closing state
      setIsClosing(false);
    }
  }, [isClosing, onClose, presentationUrl]);

  // Reset presentation state when input modal closes
  useEffect(() => {
    if (!isOpen && !isClosing) {
      setPresentationUrl(null);
      setIsLoading(false);
      setValidationError(null);
    }
  }, [isOpen, isClosing]);

  // Close modal on Escape key and manage body scroll
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen && !isClosing) {
      document.addEventListener('keydown', handleEscape);

      // Prevent body scrolling and layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);

      // Restore body scrolling
      document.body.style.paddingRight = '';
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isClosing, onClose]);

  const validatePresentation = async (code: string): Promise<string | null> => {
    const url = `https://srimalonline.github.io/${code}/`;

    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok) {
        return url;
      } else {
        return null;
      }
    } catch {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!presentationCode.trim()) return;

    setIsLoading(true);
    setValidationError(null);

    const validatedUrl = await validatePresentation(presentationCode.trim());

    if (validatedUrl) {
      setPresentationUrl(validatedUrl);
      handleClose();
      setPresentationCode('');
    } else {
      setValidationError('Presentation not found. Please check the code and try again.');
      setIsLoading(false);
    }
  };

  const handlePresentationClose = () => {
    setPresentationUrl(null);
    setIsLoading(false);
    handleModalDismiss();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none">
      {/* Modal - no backdrop here, backdrop handled globally */}
      <div className={`nav-neon relative z-10 w-full max-w-md rounded-3xl p-8 m-auto pointer-events-auto ${isClosing ? 'animate-fadeOutDown' : 'fade-in-delay'}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-black">
              Presentation Engine
            </h2>
            <p className="text-gray-700 text-sm mt-1">
              Enter your presentation code to load
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-black/10 transition-colors duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5 text-black/70 hover:text-black transition-colors duration-300" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="presentation-code"
              className="block text-sm font-medium text-black mb-2"
            >
              Presentation Code
            </label>
            <input
              id="presentation-code"
              type="text"
              value={presentationCode}
              onChange={(e) => setPresentationCode(e.target.value)}
              placeholder="Enter presentation code..."
              className="w-full px-4 py-3 rounded-xl bg-white border border-black/10 text-black placeholder-gray-500 focus:border-black/30 focus:ring-2 focus:ring-black/10 focus:outline-none transition-colors duration-300"
              disabled={isLoading}
              autoFocus
            />
          </div>

          {validationError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {validationError}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={!presentationCode.trim() || isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black font-semibold rounded-xl hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              style={{ color: 'white' }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <FaPlay className="w-4 h-4" />
              )}
              {isLoading ? 'Loading...' : 'Load Presentation'}
            </button>

            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-3 border border-black/20 font-semibold rounded-xl hover:bg-black/5 transition-colors duration-300"
              style={{ color: 'black' }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <PresentationDisplayModal
        isOpen={presentationUrl !== null}
        url={presentationUrl || ''}
        onClose={handlePresentationClose}
      />
    </div>
  );
}
