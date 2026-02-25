import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Fullstack Website',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Fitness Tracker App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'AI Chatbot Dashboard',
    category: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Travel Booking System',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    color: 'from-green-500 to-emerald-500',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-primary relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Work</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent projects. We deliver quality and innovation in every line of code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video cursor-pointer border border-white/5 hover:border-accent-purple/50 transition-all"
            >
              {/* Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-2`}>
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex gap-4">
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accent-violet hover:text-white transition-all">
                    <FaExternalLinkAlt />
                  </button>
                  <button className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-accent-violet hover:text-white transition-all">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-accent-violet/50 text-accent-violet rounded-full hover:bg-accent-violet hover:text-white transition-all font-bold shadow-[0_0_15px_rgba(191,90,242,0.2)]">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
