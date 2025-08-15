import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click (for mobile)
  };

  return (
    <div className="flex justify-center items-center">
      <nav className="w-full md:max-w-2xl mx-5 mt-10 flex flex-col md:flex-row justify-between p-4 shadow-md rounded-lg text-white bg-[#27272A]">
        {/* Brand + Mobile Toggle */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="font-bold text-lg">Ziaur.dev</h1>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`flex-col md:flex md:flex-row md:gap-6 mt-4 md:mt-0 ${
            isOpen ? 'flex' : 'hidden'
          }`}
        >
          <a href="#home" onClick={handleLinkClick} className="py-1 md:py-0 hover:text-orange-400">
            About
          </a>
          <a href="#projects" onClick={handleLinkClick} className="py-1 md:py-0 hover:text-orange-400">
            Projects
          </a>
          <a href="#experience" onClick={handleLinkClick} className="py-1 md:py-0 hover:text-orange-400">
            Experience
          </a>
          <a href="#contact" onClick={handleLinkClick} className="py-1 md:py-0 hover:text-orange-400">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
