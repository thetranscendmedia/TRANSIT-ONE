import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import RatesCalculator from './components/RatesCalculator';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToTracker = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar onTrackClick={handleScrollToTracker} />
      <main>
        <Hero />
        <Services />
        <Fleet />
        <RatesCalculator />
        <Footer />
      </main>
    </div>
  );
}