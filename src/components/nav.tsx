"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaCode, FaRocket, FaMicroscope, FaChartLine } from 'react-icons/fa'
import { usePresentationModal } from '@/context/presentation-context'

const navItems = {
  "/blog": {name: "Blog", icon: <FaCode className="w-4 h-4" />, type: "link"},
  "/projects": {name: "Projects", icon: <FaRocket className="w-4 h-4" />, type: "link"},
  "/research": {name: "Research", icon: <FaMicroscope className="w-4 h-4" />, type: "link"},
  "presentations": {name: "Presentations", icon: <FaChartLine className="w-4 h-4" />, type: "modal"},
}

export function Navbar() {
  const pathname = usePathname();
  const { openPresentationModal } = usePresentationModal();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string, type: string) => {
    if (type === 'modal') {
      openPresentationModal();
      setIsOpen(false); // Close mobile menu if open
    }
    // For regular links, Next.js Link component handles navigation
  };

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-6'
    }`}>
      <div className={`nav-neon px-6 py-4 transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      } rounded-3xl md:rounded-full`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold text-black">
              SRIMAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 relative z-10">
            {Object.entries(navItems).map(([path, { name, icon, type }]) => {
              const isActive = pathname === path;

              if (type === 'modal') {
                return (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path, type)}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${
                      isActive
                        ? 'bg-black/15 hover:bg-black/20'
                        : 'hover:bg-black/10'
                    }`}
                  >
                    <span className={`group-hover:scale-110 transition-transform duration-300 ${
                      isActive ? 'text-black' : 'text-black/60 group-hover:text-black'
                    }`}>
                      {icon}
                    </span>
                    <span className={`font-medium transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-black/70 group-hover:text-black'
                    }`}>
                      {name}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={path}
                  href={path}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isActive
                      ? 'bg-black/15 hover:bg-black/20'
                      : 'hover:bg-black/10'
                  }`}
                >
                  <span className={`group-hover:scale-110 transition-transform duration-300 ${
                    isActive ? 'text-black' : 'text-black/60 group-hover:text-black'
                  }`}>
                    {icon}
                  </span>
                  <span className={`font-medium transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-black/70 group-hover:text-black'
                  }`}>
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-black/10 transition-colors duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5 text-black/70 hover:text-black transition-colors duration-300" />
              ) : (
                <FaBars className="w-5 h-5 text-black/70 hover:text-black transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden relative z-10 ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2">
            {Object.entries(navItems).map(([path, { name, icon, type }]) => {
              const isActive = pathname === path;

              if (type === 'modal') {
                return (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path, type)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 group cursor-pointer w-full text-left ${
                      isActive
                        ? 'bg-black/15 hover:bg-black/20'
                        : 'hover:bg-black/10'
                    }`}
                  >
                    <span className={`group-hover:scale-110 transition-transform duration-300 ${
                      isActive ? 'text-black' : 'text-black/60 group-hover:text-black'
                    }`}>
                      {icon}
                    </span>
                    <span className={`font-medium transition-colors duration-300 ${
                      isActive ? 'text-black' : 'text-black/70 group-hover:text-black'
                    }`}>
                      {name}
                    </span>
                  </button>
                );
              }

              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 group cursor-pointer ${
                    isActive
                      ? 'bg-black/15 hover:bg-black/20'
                      : 'hover:bg-black/10'
                  }`}
                >
                  <span className={`group-hover:scale-110 transition-transform duration-300 ${
                    isActive ? 'text-black' : 'text-black/60 group-hover:text-black'
                  }`}>
                    {icon}
                  </span>
                  <span className={`font-medium transition-colors duration-300 ${
                    isActive ? 'text-black' : 'text-black/70 group-hover:text-black'
                  }`}>
                    {name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
