import React, { useState } from 'react';
import './RatesCalculator.css';

export default function RatesCalculator() {
  const [weight, setWeight] = useState(5);
  const [zone, setZone] = useState('domestic');
  const [mode, setMode] = useState('ground');
  const [speed, setSpeed] = useState('standard');

  // Dynamic pricing calculation logic
  const calculateRate = () => {
    let baseRate = 15;
    if (zone === 'regional') baseRate = 35;
    if (zone === 'global') baseRate = 120;

    let modeMultiplier = 1;
    if (mode === 'air') modeMultiplier = 2.5;
    if (mode === 'autonomous') modeMultiplier = 1.8;

    let speedMultiplier = 1;
    if (speed === 'express') speedMultiplier = 1.6;

    const total = (baseRate + (weight * 2.5)) * modeMultiplier * speedMultiplier;
    return total.toFixed(2);
  };

  return (
    <section id="rates" className="rates-section">
      <div className="rates-container">
        
        <div className="rates-header">
          <span className="section-badge">Transparent Pricing</span>
          <h2 className="section-title">Rates & Instant <span className="gradient-text">Cost Estimator</span></h2>
          <p className="section-subtitle">
            Configure your shipment parameters below to calculate real-time estimates across our ground, air, and autonomous transit corridors.
          </p>
        </div>

        <div className="calculator-grid">
          
          {/* Calculator Form Panel */}
          <div className="calculator-form-card glass-panel">
            <h3>Configure Shipment</h3>

            {/* Zone Selection */}
            <div className="form-group">
              <label>Transit Scope / Zone</label>
              <div className="option-grid">
                <button 
                  type="button" 
                  className={`opt-btn ${zone === 'domestic' ? 'active' : ''}`}
                  onClick={() => setZone('domestic')}
                >
                  Domestic (City-to-City)
                </button>
                <button 
                  type="button" 
                  className={`opt-btn ${zone === 'regional' ? 'active' : ''}`}
                  onClick={() => setZone('regional')}
                >
                  Regional Corridor
                </button>
                <button 
                  type="button" 
                  className={`opt-btn ${zone === 'global' ? 'active' : ''}`}
                  onClick={() => setZone('global')}
                >
                  Global Air / Bulk
                </button>
              </div>
            </div>

            {/* Transport Mode */}
            <div className="form-group">
              <label>Transport Mode</label>
              <div className="option-grid">
                <button 
                  type="button" 
                  className={`opt-btn ${mode === 'ground' ? 'active' : ''}`}
                  onClick={() => setMode('ground')}
                >
                  Ground Freight
                </button>
                <button 
                  type="button" 
                  className={`opt-btn ${mode === 'air' ? 'active' : ''}`}
                  onClick={() => setMode('air')}
                >
                  Air Cargo
                </button>
                <button 
                  type="button" 
                  className={`opt-btn ${mode === 'autonomous' ? 'active' : ''}`}
                  onClick={() => setMode('autonomous')}
                >
                  Autonomous / Drone
                </button>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="form-group">
              <div className="slider-header">
                <label>Package Weight (kg)</label>
                <span className="slider-value">{weight} kg</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                className="weight-slider"
              />
            </div>

            {/* Speed Priority */}
            <div className="form-group">
              <label>Delivery Speed</label>
              <div className="option-grid">
                <button 
                  type="button" 
                  className={`opt-btn ${speed === 'standard' ? 'active' : ''}`}
                  onClick={() => setSpeed('standard')}
                >
                  Standard Delivery
                </button>
                <button 
                  type="button" 
                  className={`opt-btn ${speed === 'express' ? 'active' : ''}`}
                  onClick={() => setSpeed('express')}
                >
                  Express Priority ⚡
                </button>
              </div>
            </div>

          </div>

          {/* Estimate Summary Panel */}
          <div className="estimate-summary-card glass-panel">
            <div className="summary-header">
              <h3>Estimate Summary</h3>
              <span className="live-badge">Live Quote</span>
            </div>

            <div className="summary-breakdown">
              <div className="breakdown-row">
                <span>Selected Scope:</span>
                <span className="highlight-text">{zone.toUpperCase()}</span>
              </div>
              <div className="breakdown-row">
                <span>Transport Mode:</span>
                <span className="highlight-text">{mode.toUpperCase()}</span>
              </div>
              <div className="breakdown-row">
                <span>Package Weight:</span>
                <span className="highlight-text">{weight} KG</span>
              </div>
              <div className="breakdown-row">
                <span>Priority Level:</span>
                <span className="highlight-text">{speed.toUpperCase()}</span>
              </div>
            </div>

            <div className="total-price-box">
              <small>Estimated Total</small>
              <div className="price-display">
                <span className="currency">$</span>
                <span className="amount">{calculateRate()}</span>
              </div>
            </div>

            <button className="book-shipment-btn" onClick={() => alert('Quote locked! Proceeding to enterprise dispatch portal...')}>
              Secure Booking & Dispatch
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}