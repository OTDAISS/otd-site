import React, { useState, useEffect } from 'react';

const SurferConsole = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "Charleston Realty", status: "Success", type: "Lead Captured" },
    { id: 2, name: "Coastal HVAC", status: "Success", type: "Review Replied" },
    { id: 3, name: "Palmetto Law", status: "Pending", type: "Workflow Sync" }
  ]);

  return (
    <div style={{ background: '#0a0a0a', padding: '2rem', borderRadius: '15px', border: '1px solid #00e5ff' }}>
      <h2 style={{ fontFamily: 'Orbitron', color: '#00e5ff', marginBottom: '1.5rem' }}>
        Live Tide Monitor <span className="pulse">📡</span>
      </h2>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333', textAlign: 'left' }}>
            <th style={{ padding: '1rem' }}>Client</th>
            <th style={{ padding: '1rem' }}>Action Type</th>
            <th style={{ padding: '1rem' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {leads.map(lead => (
            <tr key={lead.id} style={{ borderBottom: '1px solid #222' }}>
              <td style={{ padding: '1rem' }}>{lead.name}</td>
              <td style={{ padding: '1rem', color: '#888' }}>{lead.type}</td>
              <td style={{ padding: '1rem' }}>
                {lead.status === "Success" ? (
                  <span style={{ color: '#00e5ff', fontWeight: '900' }}>
                    CHECKED ✅ <small style={{ fontSize: '0.6rem', color: '#fff' }}>[Live]</small>
                  </span>
                ) : (
                  <span className="pulse" style={{ color: '#ff8c00' }}>Riding Wave... 🌊</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurferConsole;
