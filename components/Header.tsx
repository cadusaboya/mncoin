'use client'

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 bg-black flex items-center w-screen h-16 px-4 opacity-85">
      <div className="">
        <Image
          src="/orebitside-nobg.png"
          alt="Orebit Logo"
          width={120}
          height={120}
        />
      </div>
      <div className="flex w-full justify-center items-center pr-24">
        <nav className="hidden md:flex space-x-10 items-center">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            About
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="operations"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            Operations
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="eagle"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            Mine
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="location"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            Location
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="roadmap"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
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
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            Team
          </ScrollLink>
        </nav>
      </div>

      {/* Contact Us Button on the Far Right */}
      <div className="hidden md:flex ml-auto">
        <Button variant="outline" className="shadow-md mr-5 px-3 py-6" asChild>
          <Link href="https://tx4o9.share.hsforms.com/2guHvYugEQRCbrbASBheHLA" target="_blank" rel="noopener noreferrer">Contact Us</Link>
        </Button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden ml-auto">
        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 left-0 bg-black opacity-85 flex flex-col items-center space-y-2 md:hidden py-4">
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
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
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
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
            className="cursor-pointer px-2 py-1 text-gray-100 font-semibold rounded hover:bg-gray-900"
          >
            Team
          </ScrollLink>

          <Button variant="outline" className="shadow-md px-2" asChild>
           <Link href="https://tx4o9.share.hsforms.com/2guHvYugEQRCbrbASBheHLA" target="_blank" rel="noopener noreferrer">Contact Us</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
