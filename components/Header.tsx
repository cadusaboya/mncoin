'use client'

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 bg-white flex items-center w-screen h-16 px-4">
      <div className="flex-shrink-0">
        <Image
          src="/mnlogo.png"
          alt="MnCoin Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="flex w-full justify-center items-center pr-24">
        <nav className="hidden md:flex space-x-10">
          <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          Roadmap
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          Team
        </ScrollLink>
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
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          About
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="roadmap"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          Roadmap
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="team"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100"
        >
          Team
        </ScrollLink>
        <Link href="/mine" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
          Our Mine
        </Link>
        <Link href="/contact" className="px-2 py-1 text-purple-900 font-semibold rounded hover:bg-gray-100">
          Contact Us
        </Link>
        </div>
      )}
    </header>
  );
};

export default Header;