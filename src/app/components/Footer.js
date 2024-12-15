import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-full h-px bg-white" aria-hidden="true"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Link
              href="#Hero"
              className="text-white font-bold text-xl"
            >
              <img src="/Svgs/Logo.svg" alt="Logo" width={140} height={40} />
            </Link>
          </div>
          </div>
          
          <nav className="flex flex-wrap justify-center md:justify-start space-x-6">
            <Link href="/games" className="hover:text-gray-300 transition-colors">
              Games
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">
              Services
            </Link>
          </nav>
          
          <div className="flex space-x-4">
            <a href="#">
            <img
            src="/Svgs/Twitter.svg"
            alt="Twitter Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Instagram.svg"
            alt="Instagram Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Discord.svg"
            alt="Discord Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Linkedin.svg"
            alt="Linkedin Icon"
            />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; Spicy Harissa Studio 2024. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

