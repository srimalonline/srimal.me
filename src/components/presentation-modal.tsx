"use client";
import { useState, useEffect } from 'react';
import { FaTimes, FaPlay } from 'react-icons/fa';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [presentationCode, setPresentationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!presentationCode.trim()) return;

    setIsLoading(true);
    
    // TODO: Add presentation loading logic here
    console.log('Loading presentation with code:', presentationCode);
    
    // Simulate loading for now
    setTimeout(() => {
      setIsLoading(false);
      // Close modal after successful load (or handle error)
      handleClose();
      setPresentationCode('');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className={`nav-neon relative z-10 w-full max-w-md rounded-3xl p-8 m-auto ${isClosing ? 'animate-fadeOutDown' : 'fade-in-delay'}`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gradient">
              Presentation Engine
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Enter your presentation code to load
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5 text-gray-300 hover:text-purple-300 transition-colors duration-300" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="presentation-code" 
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Presentation Code
            </label>
            <input
              id="presentation-code"
              type="text"
              value={presentationCode}
              onChange={(e) => setPresentationCode(e.target.value)}
              placeholder="Enter presentation code..."
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white placeholder-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-colors duration-300"
              disabled={isLoading}
              autoFocus
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={!presentationCode.trim() || isLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
              className="px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-600/20 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
