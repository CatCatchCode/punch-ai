import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-6 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold font-sans tracking-tighter text-white">
          Punch<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Ai</span>
        </div>
        
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PunchAi Agency. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xl">
            <FaLinkedin />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="#" className="text-gray-400 hover:text-accent-purple transition-colors text-xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
