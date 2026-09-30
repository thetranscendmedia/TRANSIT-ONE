import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar({ onTrackClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <span className="logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#bolt-grad)" stroke="url(#bolt-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="bolt-grad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00f2fe" />
                  <stop offset="1" stopColor="#4facfe" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">TRANSIT<span className="logo-accent">ONE</span></span>
        </div>

        <nav className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#fleet" onClick={() => setMobileMenuOpen(false)}>Fleet Showcase</a>
          <a href="#rates" onClick={() => setMobileMenuOpen(false)}>Rates & Calculator</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Enterprise</a>
        </nav>

        <div className="navbar-actions">
          <button className="nav-track-btn" onClick={onTrackClick}>
            <span>Track Shipment</span>
          </button>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}