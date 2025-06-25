import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Methodology from './components/Methodology';
import Achievements from './components/Achievements';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Courses />
        <Methodology />
        <Achievements />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;