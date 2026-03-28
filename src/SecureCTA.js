{
  "component_name": "SecureCTA",
  "filename": "SecureCTA.js",
  "description": "A high-conversion, reusable call-to-action button designed for the OTD AI SURFER ecosystem. Features hover-glow effects and a 'security' aesthetic to drive implementation bookings.",
  "code": "import React from 'react';\nimport { ShieldCheck, ChevronRight } from 'lucide-react';\n\nconst SecureCTA = ({ text = \"Secure Implementation\", onClick, className = \"\" }) => {\n  return (\n    <button \n      onClick={onClick}\n      className={`\n        group relative flex items-center justify-center gap-3 \n        bg-emerald-600 hover:bg-emerald-400 \n        text-black font-black uppercase italic tracking-[0.2em] \n        py-5 px-10 rounded-2xl transition-all duration-300 \n        shadow-[0_0_30px_rgba(16,185,129,0.2)] \n        hover:shadow-[0_0_50px_rgba(52,211,153,0.4)] \n        hover:-translate-y-1 active:scale-95\n        ${className}\n      `}\n    >\n      {/* Static Icon */}\n      <ShieldCheck size={20} className=\"opacity-80\" />\n      \n      {/* Main Text */}\n      <span className=\"text-sm md:text-base\">{text}</span>\n\n      {/* Hover Arrow Animation */}\n      <ChevronRight \n        size={18} \n        className=\"transition-transform duration-300 group-hover:translate-x-2\"\n      />\n\n      {/* Subtle Glow Overlay */}\n      <div className=\"absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-white transition-opacity\" />\n    </button>\n  );\n};\n\nexport default SecureCTA;",
  "usage_example": "import SecureCTA from './SecureCTA';\n\n// Use inside any page or component:\n<SecureCTA \n  text=\"Initialize My Build\" \n  onClick={() => window.location.href = '/book'}\n/>",
  "visual_specs": {
    "background_color": "Emerald-600 (#10b981)",
    "hover_color": "Emerald-400 (#34d399)",
    "text_style": "Bold, Italic, All-Caps",
    "shadow_effect": "Green neon glow (Spread 30px-50px)",
    "icons": "ShieldCheck (Trust) + ChevronRight (Momentum)"
  },
  "conversion_triggers": [
    "Security-focused language ('Secure')",
    "Tactical action verb ('Implementation')",
    "High-contrast color (Black text on Emerald background)",
    "Micro-interactions (Scale-up and Glow on hover)"
  ]
}