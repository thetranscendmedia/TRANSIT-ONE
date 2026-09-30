import React from 'react';
import './Services.css';

const servicesData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z" />
        <path d="M7 18h.01M18 18h.01" />
        <circle cx="7.5" cy="18" r="1.5" />
        <circle cx="18.5" cy="18" r="1.5" />
      </svg>
    ),
    title: 'Enterprise Fleet Management',
    description: 'Scalable transport infrastructure optimized with real-time telematics and automated dispatch logic for seamless high-volume distribution.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 4H5a2 2 0 0 0-2 2v3M16 4h3a2 2 0 0 1 2 2v3M8 20H5a2 2 0 0 1-2-2v-3M16 20h3a2 2 0 0 0 2-2v-3" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'API & Logistics Integration',
    description: 'Seamlessly connect your e-commerce platform or ERP systems with our robust shipping endpoints for automated label generation and status sync.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21 3-7.5 18-3.5-7-7-3.5L21 3Z" />
        <path d="M10 14 21 3" />
      </svg>
    ),
    title: 'Express Freight & Air Cargo',
    description: 'Time-critical global routing engineered to move high-priority assets across international and domestic hubs with maximum security.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="m7 14 4-4 3 3 6-7" />
        <path d="M16 6h4v4" />
      </svg>
    ),
    title: 'Supply Chain Consulting',
    description: 'Data-driven strategy and structural analytics designed to reduce overhead, eliminate transit bottlenecks, and future-proof distribution.'
  }
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        <div className="services-header">
          <span className="section-badge">Core Capabilities</span>
          <h2 className="section-title">Tech & <span className="gradient-text">Professional Services</span></h2>
          <p className="section-subtitle">
            Enterprise-grade logistics architecture built for modern businesses that demand precision, speed, and real-time visibility.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card glass-panel glow-effect">
              <div className="service-icon-wrapper">
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-footer">
                <span className="learn-more">Explore Architecture →</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}