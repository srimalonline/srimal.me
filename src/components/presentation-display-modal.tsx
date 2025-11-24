"use client";
import { useState, useEffect } from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

interface PresentationDisplayModalProps {
  isOpen: boolean;
  url: string;
  onClose: () => void;
}

export function PresentationDisplayModal({ isOpen, url, onClose }: PresentationDisplayModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen && !isClosing) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, isClosing]);

  const handleOpenInNewTab = () => {
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 pointer-events-auto ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-4xl rounded-2xl bg-white shadow-2xl pointer-events-auto transition-transform duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{ width: '60vw', maxHeight: '90vh' }}
      >
        {/* Header with buttons */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-black">Presentation</h3>
          <div className="flex gap-2">
            <button
              onClick={handleOpenInNewTab}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              aria-label="Open in new tab"
              title="Open in new tab"
            >
              <FaExternalLinkAlt className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-300" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Iframe container */}
        <div className="w-full" style={{ height: 'calc(90vh - 60px)' }}>
          <iframe
            src={url}
            title="Presentation"
            className="w-full h-full border-0 rounded-b-2xl"
            allow="fullscreen"
          />
        </div>
      </div>
    </div>
  );
}
