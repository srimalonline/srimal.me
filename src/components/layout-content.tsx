"use client";
import { usePresentationModal } from "@/context/presentation-context";
import { Navbar } from "./nav";
import Footer from "./footer";
import BackgroundEffects from "./background-effects";
import { FloatingActionButton } from "./interactive-elements";
import { PresentationModal } from "./presentation-modal";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPresentationModalOpen, closePresentationModal } = usePresentationModal();

  return (
    <>
      <BackgroundEffects />

      {/* Global Backdrop Blur */}
      <div
        className={`fixed inset-0 z-90 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isPresentationModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closePresentationModal}
      />

      <div className="relative z-10 min-h-screen">
        <Navbar />
        <main className="flex-auto min-w-0 pt-24 pb-12 flex flex-col px-6 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </div>

      <FloatingActionButton />

      {/* Global Presentation Modal */}
      <PresentationModal
        isOpen={isPresentationModalOpen}
        onClose={closePresentationModal}
      />
    </>
  );
}
