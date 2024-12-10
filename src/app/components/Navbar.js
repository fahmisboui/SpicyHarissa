"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setScrolled(false); // Transparent when at the top
        } else {
          setScrolled(true); // Add background color when scrolling
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#390505]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 font-khand">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-bold text-xl">
              <img src="/Svgs/Logo.svg" alt="Logo" width={140} height={40} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#services" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Services
            </a>
            <a href="#Games" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Games
            </a>
            <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
              About Us
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="bg-[#800A07] text-white focus:outline-none p-2 rounded-md"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#230202] text-white p-4 space-y-4">
          <a href="#services" className="block px-3 py-2 rounded-md">
            Services
          </a>
          <a href="#Games" className="block px-3 py-2 rounded-md">
            Games
          </a>
          <a href="#about" className="block px-3 py-2 rounded-md">
            About Us
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
