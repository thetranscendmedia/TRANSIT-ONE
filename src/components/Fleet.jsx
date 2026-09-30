import React, { useState } from 'react';
import './Fleet.css';

const fleetData = [
  {
    id: 1,
    category: 'ground',
    name: 'Apex-V9 Electric Van',
    role: 'Urban Last-Mile Distribution',
    range: '450 km per charge',
    capacity: '1,800 kg payload',
    tech: 'AI Route Sync & LiDAR',
    image: 'https://images.unsplash.com/photo-1614976523626-d598aafd4fda?auto=format&fit=crop&w=800&q=80',
    description: 'Designed for zero-emission metropolitan deliveries with smart loading bays and real-time battery telemetry.'
  },
  {
    id: 2,
    category: 'ground',
    name: 'Titan Freight Semi X1',
    role: 'Long-Haul Highway Corridor',
    range: '1,200 km range',
    capacity: '24,000 kg payload',
    tech: 'Autonomous Pilot Assist',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy-duty transport vehicle built for interstate freight lines, featuring aerodynamic styling and automated braking grids.'
  },
  {
    id: 3,
    category: 'air',
    name: 'Zephyr Cargo Drone Mk.V',
    role: 'High-Priority Express Transport',
    range: '120 km radius',
    capacity: '15 kg payload',
    tech: 'Vertical Takeoff & Landing (VTOL)',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
    description: 'Lightning-fast aerial drone engineered for urgent medical kits, secure documents, and time-critical micro-freight.'
  },
  {
    id: 4,
    category: 'autonomous',
    name: 'Nexus Rover Bot-04',
    role: 'Corporate Campus & Hub Logistics',
    range: '80 km continuous',
    capacity: '150 kg payload',
    tech: 'Computer Vision & GPS Mesh',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    description: 'Fully autonomous ground rover optimized for secure intra-facility transfer and automated warehouse transit loops.'
  }
];

export default function Fleet() {
  const [filter, setFilter] = useState('all');

  const filteredFleet = filter === 'all' 
    ? fleetData 
    : fleetData.filter(item => item.category === filter);

  return (
    <section id="fleet" className="fleet-section">
      <div className="fleet-container">
        
        <div className="fleet-header">
          <span className="section-badge">Transport Infrastructure</span>
          <h2 className="section-title">Next-Gen <span className="gradient-text">Fleet Showcase</span></h2>
          <p className="section-subtitle">
            Explore our state-of-the-art vehicle array, equipped with autonomous navigation, high-capacity payload zoning, and green energy systems.
          </p>

          {/* Category Filter Tabs */}
          <div className="fleet-filters">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Assets
            </button>
            <button 
              className={`filter-btn ${filter === 'ground' ? 'active' : ''}`}
              onClick={() => setFilter('ground')}
            >
              Ground Freight
            </button>
            <button 
              className={`filter-btn ${filter === 'air' ? 'active' : ''}`}
              onClick={() => setFilter('air')}
            >
              Air Cargo
            </button>
            <button 
              className={`filter-btn ${filter === 'autonomous' ? 'active' : ''}`}
              onClick={() => setFilter('autonomous')}
            >
              Autonomous
            </button>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="fleet-grid">
          {filteredFleet.map((vehicle) => (
            <div key={vehicle.id} className="fleet-card glass-panel glow-effect">
              <div className="fleet-image-wrapper">
                <img src={vehicle.image} alt={vehicle.name} loading="lazy" />
                <span className="fleet-role-badge">{vehicle.role}</span>
              </div>
              <div className="fleet-card-body">
                <h3>{vehicle.name}</h3>
                <p>{vehicle.description}</p>
                
                <div className="fleet-specs">
                  <div className="spec-item">
                    <small>Range / Radius</small>
                    <span>{vehicle.range}</span>
                  </div>
                  <div className="spec-item">
                    <small>Payload</small>
                    <span>{vehicle.capacity}</span>
                  </div>
                </div>

                <div className="fleet-tech-tag">
                  <span>⚡ Tech: {vehicle.tech}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}