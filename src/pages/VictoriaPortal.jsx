import React from 'react';
import { Link } from 'react-router-dom';

const VictoriaPortal = () => {
  return (
    <div style={{ padding: '40px', color: 'white', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ color: '#00f2ff' }}>VICTORIA PORTAL</h1>
      <p style={{ fontSize: '1.2rem', borderLeft: '4px solid #00f2ff', paddingLeft: '15px' }}>
        System Status: <span style={{ color: '#39ff14' }}>ONLINE</span>
      </p>
      <div style={{ marginTop: '30px', backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '8px' }}>
        <h3>Encrypted Data Stream</h3>
        <p>Awaiting surfer authentication...</p>
      </div>
      <Link to="/" style={{ color: '#00f2ff', marginTop: '20px', display: 'block' }}>
        ← Return to Main Terminal
      </Link>
    </div>
  );
};

export default VictoriaPortal;
