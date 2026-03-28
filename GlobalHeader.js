  {
    "filename": "GlobalHeader.js",
    "component_name": "GlobalHeader",
    "description": "A persistent header that appears on all sub-pages to maintain brand identity.",
    "code": "import React from 'react';\nimport { Link, useLocation } from 'react-router-dom';\nimport Logo from './Logo';\n\nconst GlobalHeader = () => {\n  const location = useLocation();\n  \n  // We hide the global header on the Home page because Home has its own big logo\n  if (location.pathname === '/') return null;\n\n  return (\n    <header className=\"fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent\">\n      <Link to=\"/\" className=\"hover:scale-105 transition-transform\">\n        <Logo className=\"w-16 md:w-20\" />\n      </Link>\n      <div className=\"flex flex-col items-end\">\n        <span className=\"text-[10px] font-mono text-emerald-500 uppercase tracking-[0.3em]\">System: Online</span>\n        <span className=\"text-[8px] font-mono text-slate-500 uppercase tracking-[0.3em]\">OTD_ARCHITECT_v5.0</span>\n      </div>\n    </header>\n  );\n};\n\nexport default GlobalHeader;"
  },
