import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCogs, FaProjectDiagram, FaBriefcase, FaEnvelope, FaLightbulb } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', id: 'hero', icon: <FaHome /> },
  { name: 'Services', id: 'services', icon: <FaCogs /> },
  { name: 'Process', id: 'process', icon: <FaProjectDiagram /> },
  { name: 'Portfolio', id: 'portfolio', icon: <FaBriefcase /> },
  { name: 'Why Us', id: 'why-us', icon: <FaLightbulb /> },
  { name: 'Contact', id: 'contact', icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="text-2xl font-bold font-sans tracking-tighter text-white">
          Punch<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Ai</span>
        </div>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-accent-blue ${
                activeSection === link.id ? 'text-accent-blue' : 'text-gray-400'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full bg-accent-violet text-white hover:bg-white hover:text-accent-violet transition-all font-medium shadow-[0_0_15px_rgba(191,90,242,0.3)]"
          >
            Get Started
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl px-4 py-3 shadow-2xl shadow-accent-purple/20"
      >
        <ul className="flex justify-between items-center">
          {navLinks.filter(link => !['services', 'process'].includes(link.id)).map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all ${
                  activeSection === link.id ? 'text-accent-blue' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-[10px] font-medium">{link.name}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-1 h-1 bg-accent-blue rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;
