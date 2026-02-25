import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent-blue/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/20 blur-[100px] rounded-full mix-blend-screen animate-pulse delay-1000" />
        <div className="absolute -bottom-1/2 left-1/2 w-full h-full bg-accent-blue/10 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-accent-blue font-semibold tracking-widest text-sm uppercase mb-4">
            Future of Digital Innovation
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Powerful</span> <br />
            Digital Experiences
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Fullstack Websites | Mobile Apps | AI Automation
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-violet text-white font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(191,90,242,0.3)] hover:shadow-[0_0_30px_rgba(191,90,242,0.5)] transition-all"
            >
              Book a Free Call <FaArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <FaPlay className="text-xs" /> View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-blue to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
