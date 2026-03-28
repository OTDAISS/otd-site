import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// The line below was causing the crash because the file was missing or renamed.
// I have commented it out so your site can build successfully.
// import VictoriaPortal from "./pages/VictoriaPortal"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <h1>Ocean Tide Drop AI</h1>
              <p>Site is now successfully building!</p>
            </div>
          } />
          {/* Once you create the VictoriaPortal.jsx file in your pages folder, 
              you can uncomment the route below */}
          {/* <Route path="/victoria" element={<VictoriaPortal />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
