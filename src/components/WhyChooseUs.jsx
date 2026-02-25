import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaMobileAlt, FaBolt, FaLayerGroup, FaBrain } from 'react-icons/fa';

const features = [
  {
    icon: <FaMobileAlt />,
    title: 'Mobile-First',
    description: 'We prioritize mobile experiences, ensuring your product looks perfect on any device.',
  },
  {
    icon: <FaBolt />,
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency. We ensure lightning-fast load times and smooth interactions.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business. Our solutions are modular and easily expandable.',
  },
  {
    icon: <FaBrain />,
    title: 'AI-Integrated Systems',
    description: 'Leverage the power of AI to automate tasks and gain intelligent insights.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Choose Us</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are more than just a development agency. We are your technology partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-purple/50 transition-all group text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent-purple/10 flex items-center justify-center text-3xl text-accent-purple mb-6 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
