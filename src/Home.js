```javascript
import React from 'react';
import Logo from './Logo'; // Ensure Logo.js exists
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-cyan-500/30">
    <div className="max-w-6xl mx-auto">
      <header className="mb-20 mt-12 flex flex-col items-center text-center">
        {/* LARGE LOGO FOR HOME PAGE  */}
        <Logo className="w-64 md:w-96 mb-8" withTagline={true} />
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8 opacity-50" />
        
        <p className="text-xl md:text-2xl text-cyan-400 font-light tracking-[0.2em] uppercase italic">
          Digital Ecosystem Architect
        </p>
      </header>

      {/* Navigation Grid would continue here */}
    </div>
  </div>
);

export default Home;
``` [8]
