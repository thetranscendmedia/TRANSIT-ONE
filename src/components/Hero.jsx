import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [trackingId, setTrackingId] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError('Please enter a valid tracking code.');
      return;
    }
    setError('');
    setLoading(true);
    setTrackingResult(null);

    // Simulate backend network delay for tracking search
    setTimeout(() => {
      setLoading(false);
      // Generate a mock result for demo effect
      setTrackingResult({
        code: trackingId.toUpperCase(),
        status: 'In Transit',
        origin: 'Lagos Hub, NG',
        destination: 'Akure Tech Hub, NG',
        estimatedDelivery: 'Tomorrow, 2:00 PM',
        steps: [
          { title: 'Order Processed', time: 'Sep 28, 08:00 AM', completed: true },
          { title: 'Dispatched from Central Hub', time: 'Sep 28, 02:30 PM', completed: true },
          { title: 'In Transit - Express Route', time: 'Sep 29, 09:15 AM', completed: true, current: true },
          { title: 'Out for Delivery', time: 'Pending', completed: false },
          { title: 'Delivered', time: 'Pending', completed: false }
        ]
      });
    }, 1200);
  };

  return (
    <section className="hero-section">
      <div className="hero-glow-bg"></div>
      <div className="hero-container">
        
        {/* Hero Copy */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span> Next-Gen Global Logistics
          </div>
          <h1 className="hero-title">
            Intelligence in <span className="gradient-text">Motion & Delivery</span>
          </h1>
          <p className="hero-subtitle">
            Engineered for high-scale enterprise supply chains, secure freight transport, and lightning-fast express distribution worldwide.
          </p>

          {/* Interactive Tracking Widget */}
          <div className="tracking-card glass-panel">
            <h3>Instant Shipment Tracking</h3>
            <form onSubmit={handleTrackSubmit} className="tracking-form">
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Enter Tracking ID (e.g., VLX-8921)" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button type="submit" className="track-submit-btn" disabled={loading}>
                {loading ? <span className="spinner"></span> : 'Track Status'}
              </button>
            </form>
            {error && <p className="error-msg">{error}</p>}
          </div>
        </div>

        {/* Dynamic Tracking Result Panel (Conditional Render) */}
        {trackingResult && (
          <div className="tracking-result-modal glass-panel">
            <div className="result-header">
              <div>
                <span className="result-code">{trackingResult.code}</span>
                <span className="result-status-badge">{trackingResult.status}</span>
              </div>
              <button className="close-result" onClick={() => setTrackingResult(null)}>×</button>
            </div>
            
            <div className="result-meta">
              <div>
                <small>Route</small>
                <p>{trackingResult.origin} → {trackingResult.destination}</p>
              </div>
              <div>
                <small>Est. Delivery</small>
                <p>{trackingResult.estimatedDelivery}</p>
              </div>
            </div>

            <div className="timeline">
              {trackingResult.steps.map((step, idx) => (
                <div key={idx} className={`timeline-item ${step.completed ? 'completed' : ''} ${step.current ? 'current' : ''}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <span>{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}