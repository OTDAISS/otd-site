{
    "filename": "Logo.js",
    "component_name": "Logo",
    "code": "import React from 'react';\n\nconst Logo = ({ className = \"w-24\", withTagline = false }) => {\n  return (\n    <div className={`flex flex-col items-center transition-all duration-500 ${className}`}>\n      {/* THE PRIMARY GRAPHIC */}\n      <img \n        src=\"/logo.png\" \n        alt=\"Ocean Tide Drop AI SURFER\" \n        className=\"w-full h-auto drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]\"\n      />\n      \n      {/* OPTIONAL TAGLINE FROM IMAGE */}\n      {withTagline && (\n        <div className=\"mt-4 text-center\">\n          <p className=\"text-cyan-400 font-black italic uppercase tracking-widest text-[10px]\">Choose Your Tools</p>\n          <p className=\"text-orange-500 font-black italic uppercase tracking-widest text-[14px]\">As You Do.</p>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default Logo;"
  },
