
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // This pulls in your 27-file ecosystem
import './index.css';      // This pulls in your Neon colors
import { mountVercelToolbar } from '@vercel/toolbar';

// 1. Initialize Developer Tools (Optional)
mountVercelToolbar();

// 2. Launch the Ocean Tide Drop UI
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
