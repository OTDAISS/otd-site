import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // This pulls in your main logic
import './index.css';      // This pulls in your Tailwind/Neon styles
import { mountVercelToolbar } from '@vercel/toolbar';

// 1. Initialize Developer Tools (Optional, only shows for you)
mountVercelToolbar();

// 2. Launch the Ocean Tide Drop UI
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
