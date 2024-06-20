'use client'

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 bg-white flex items-center w-full h-16 px-4">
      <div className="flex-shrink-0">
        <img src="/mnlogo.png" alt="Logo" className="h-12" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
        <nav className="hidden md:flex space-x-10">
          <Link href="#about" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
            About
          </Link>
          <Link href="#roadmap" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
            Roadmap
          </Link>
          <Link href="#team" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
            Team
          </Link>
          <Link href="/mine" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
            Our Mine
          </Link>
          <Link href="/contact" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
            Contact Us
          </Link>
        </nav>
      </div>
      <div className="flex md:hidden ml-auto">
        <button onClick={toggleMenu} className="text-purple-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white flex flex-col items-center space-y-2 md:hidden">
          <Link href="/about" className="px-2 py-1 text-purple-800 font-semibold rounded hover:bg-gray-100">
            About
          </Link>
          <Link href="/contact" className="px-2 py-1 text-purple-800 font-semibold rounded hover:bg-gray-100">
            Contact Us
          </Link>
          <Link href="/mine" className="px-2 py-1 text-purple-800 font-semibold rounded hover:bg-gray-100">
            Our Mine
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;