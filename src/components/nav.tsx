"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { metaData } from '../lib/config'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = {
  "/blog": {name: "Blog", icon: "📝"},
  "/projects": {name: "Projects", icon: "🚀"},
  "/photos": {name: "Photos", icon: "📸"},
  "/presentations": {name: "Presentations", icon: "🎯"},
}

export function Navbar() {
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

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-6'
    }`}>
      <div className={`glass px-6 py-4 transition-all duration-300 ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      } rounded-3xl md:rounded-full`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold text-gradient">
              SRIMAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                className="group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-purple-500/20"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-medium group-hover:text-purple-400 transition-colors duration-300">
                  {name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5 text-gray-300" />
              ) : (
                <FaBars className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-2">
            {Object.entries(navItems).map(([path, { name, icon }]) => (
              <Link
                key={path}
                href={path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-2xl hover:bg-purple-500/20 transition-all duration-300 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-medium group-hover:text-purple-400 transition-colors duration-300">
                  {name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
