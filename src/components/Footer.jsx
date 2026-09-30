import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="about" className="footer-section">
      <div className="footer-container">
        
        {/* Enterprise Stats Banner */}
        <div className="enterprise-banner glass-panel">
          <div className="stat-box">
            <h3>99.99%</h3>
            <p>On-Time Delivery SLA</p>
          </div>
          <div className="stat-box">
            <h3>1.2M+</h3>
            <p>Global Shipments Logged</p>
          </div>
          <div className="stat-box">
            <h3>24/7</h3>
            <p>Real-Time Telemetry Tracking</p>
          </div>
          <div className="stat-box">
            <h3>150+</h3>
            <p>International Logistics Hubs</p>
          </div>
        </div>

        {/* Main Footer Links & Branding */}
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">TRANSIT<span className="logo-accent">ONE</span></span>
            </div>
            <p className="footer-bio">
              Next-generation logistics architecture engineered with autonomous dispatch, real-time API integrations, and zero-emission delivery fleets.
            </p>
          </div>

          <div className="footer-links-col">
            <h4>Navigation</h4>
            <a href="#services">Core Services</a>
            <a href="#fleet">Fleet Showcase</a>
            <a href="#rates">Rates Calculator</a>
            <a href="#about">Enterprise Portal</a>
          </div>

          <div className="footer-links-col">
            <h4>Compliance & Security</h4>
            <a href="#rates">ISO 27001 Verified</a>
            <a href="#rates">Zero-Emission ESG</a>
            <a href="#rates">Customs Integration</a>
            <a href="#rates">SLA Guarantees</a>
          </div>

          <div className="footer-links-col">
            <h4>Global Headquarters</h4>
            <p className="footer-address">
              Transit One Logistics Tower<br />
              Global Tech Corridor, Suite 400<br />
              dispatch@transitone.io
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TRANSIT ONE GLOBAL. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Protocol</a>
            <a href="#terms">Terms of Dispatch</a>
          </div>
        </div>

      </div>
    </footer>
  );
}