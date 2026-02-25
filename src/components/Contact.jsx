import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mykdlwpq");

  return (
    <section id="contact" className="py-24 px-6 bg-primary relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Connect</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
            
            <a href="tel:7986262778" className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-purple/50 transition-all group">
              <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-xl text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all">
                <FaPhone />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="text-xl font-bold text-white">7986262778</p>
              </div>
            </a>

            <a 
              href="https://wa.me/917986262778?text=Hello%20PunchAi,%20I%20would%20like%20to%20discuss%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="text-xl font-bold text-white">Chat Now</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/monarch_ashu?igsh=b3N3ZnFhNmZhZHZw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-xl text-pink-500 group-hover:bg-pink-500 group-hover:text-black transition-all">
                <FaInstagram />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Instagram</p>
                <p className="text-xl font-bold text-white">@monarch_ashu</p>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl"
          >
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="text-accent-blue text-5xl mb-4">
                  <FaPaperPlane className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="email">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors"
                    placeholder="your@email.com"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email" 
                    errors={state.errors} 
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message" 
                    errors={state.errors} 
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-accent-violet text-white font-bold rounded-xl hover:bg-white hover:text-accent-violet transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(191,90,242,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
