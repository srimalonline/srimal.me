"use client";
import React, { createContext, useContext, useState } from 'react';

interface PresentationContextType {
  isPresentationModalOpen: boolean;
  openPresentationModal: () => void;
  closePresentationModal: () => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export function PresentationProvider({ children }: { children: React.ReactNode }) {
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false);

  const openPresentationModal = () => setIsPresentationModalOpen(true);
  const closePresentationModal = () => setIsPresentationModalOpen(false);

  return (
    <PresentationContext.Provider
      value={{
        isPresentationModalOpen,
        openPresentationModal,
        closePresentationModal,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
}

export function usePresentationModal() {
  const context = useContext(PresentationContext);
  if (context === undefined) {
    throw new Error('usePresentationModal must be used within PresentationProvider');
  }
  return context;
}
