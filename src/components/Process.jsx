import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaDraftingCompass, FaCode, FaRocket, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSearch />,
    title: 'Discover',
    description: 'We dive deep into your business goals, target audience, and market landscape to build a solid strategy.',
  },
  {
    icon: <FaDraftingCompass />,
    title: 'Design',
    description: 'Our designers craft intuitive, high-fidelity prototypes that align with your brand identity and user needs.',
  },
  {
    icon: <FaCode />,
    title: 'Develop',
    description: 'We bring designs to life with clean, scalable code using the latest technologies and best practices.',
  },
  {
    icon: <FaRocket />,
    title: 'Deploy',
    description: 'Rigorous testing ensures a bug-free launch. We handle server setup, domain configuration, and go-live.',
  },
  {
    icon: <FaChartLine />,
    title: 'Scale',
    description: 'Post-launch, we help you optimize performance, add features, and scale your digital product as you grow.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-accent-purple">Process</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A streamlined approach to turning your vision into reality. We follow a proven methodology for success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-accent-purple text-accent-purple flex items-center justify-center text-2xl mb-6 shadow-[0_0_20px_rgba(108,99,255,0.3)] group-hover:scale-110 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300 relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
