import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    // bg-slate-900 and text-slate-200 denote a dark theme with light text. The font-sans and antialiased classes ensure smooth, modern typography across the site.
    <div className="font-sans antialiased text-slate-200 bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;