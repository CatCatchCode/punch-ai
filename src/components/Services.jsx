import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaAndroid, FaApple, FaRobot, FaPalette } from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode />,
    title: 'Fullstack Development',
    description: 'We build responsive, mobile-first websites and web applications using React, Next.js, and Node.js.',
    color: 'from-accent-blue/20 to-accent-blue/5',
  },
  {
    icon: <FaAndroid />,
    title: 'Android Apps',
    description: 'Native and cross-platform Android applications designed for performance and scalability.',
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    icon: <FaApple />,
    title: 'iOS Apps',
    description: 'Premium iOS applications built with Swift or React Native for a seamless Apple ecosystem experience.',
    color: 'from-gray-500/20 to-gray-500/5',
  },
  {
    icon: <FaRobot />,
    title: 'AI Automation',
    description: 'Automate your workflows and business processes using n8n, Zapier, and custom AI integrations.',
    color: 'from-accent-purple/20 to-accent-purple/5',
  },
  {
    icon: <FaPalette />,
    title: 'UI/UX Design',
    description: 'User-centric design that focuses on intuitive interfaces and engaging user experiences.',
    color: 'from-pink-500/20 to-pink-500/5',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end digital solutions tailored to your business needs. From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl bg-secondary/30 backdrop-blur-lg border border-white/10 hover:border-accent-purple/50 transition-all group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
