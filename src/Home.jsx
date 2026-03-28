  {
    "filename": "Home.js",
    "description": "Updated Home page header utilizing the new logo graphic.",
    "code": "import React from 'react';\nimport Logo from './Logo';\nimport { Link } from 'react-router-dom';\n\nconst Home = () => (\n  <div className=\"min-h-screen bg-black text-white p-8 font-sans selection:bg-cyan-500/30\">\n    <div className=\"max-w-6xl mx-auto\">\n      <header className=\"mb-20 mt-12 flex flex-col items-center text-center\">\n        {/* LARGE LOGO FOR HOME PAGE */}\n        <Logo className=\"w-64 md:w-96 mb-8\" withTagline={true} />\n        \n        <div className=\"h-px w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8 opacity-50\" />\n        \n        <p className=\"text-xl md:text-2xl text-cyan-400 font-light tracking-[0.2em] uppercase italic\">\n          Digital Ecosystem Architect\n        </p>\n      </header>\n\n      {/* ... rest of the navigation grid */}\n    </div>\n  </div>\n);\n\nexport default Home;"
  }
