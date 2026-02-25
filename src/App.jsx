import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent-blue/30 selection:text-white pb-24 md:pb-0">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
