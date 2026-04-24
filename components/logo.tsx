"use client"

import Link from "next/link"

interface LogoProps {
  variant?: "dark" | "light"
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ 
  variant = "dark", 
  showText = true, 
  size = "md",
  className = "" 
}: LogoProps) {
  const sizes = {
    sm: { icon: "w-9 h-9", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-11 h-11", text: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-xl", sub: "text-[11px]" },
  }

  const colors = {
    dark: {
      iconBg: "bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0C2340]",
      iconBorder: "border-[#B8783D]/50",
      iconText: "text-white",
      accent: "bg-[#B8783D]",
      title: "text-[#0C2340]",
      subtitle: "text-[#64748b]",
    },
    light: {
      iconBg: "bg-gradient-to-br from-white/15 via-white/10 to-white/5",
      iconBorder: "border-white/25",
      iconText: "text-white",
      accent: "bg-[#e8a87c]",
      title: "text-white",
      subtitle: "text-white/55",
    },
  }

  const s = sizes[size]
  const c = colors[variant]

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Modern Logo Icon */}
      <div className={`relative ${s.icon}`}>
        {/* Main shape */}
        <div
          className={`absolute inset-0 rounded-xl ${c.iconBg} border ${c.iconBorder} shadow-lg transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(184,120,61,0.25)]`}
        />
        
        {/* Inner elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Stylized "Cf" monogram */}
          <div className="relative">
            <span 
              className={`font-serif font-medium ${s.text} ${c.iconText} tracking-tight`}
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}
            >
              Cf
            </span>
            {/* Accent dot */}
            <div className={`absolute -top-0.5 -right-1.5 w-1.5 h-1.5 rounded-full ${c.accent} shadow-[0_0_8px_rgba(184,120,61,0.6)]`} />
          </div>
        </div>
        
        {/* Corner accent */}
        <div className={`absolute bottom-1 right-1 w-2 h-2 ${c.accent} rounded-sm opacity-60`} />
      </div>

      {/* Text */}
      {showText && (
        <div className="hidden sm:block">
          <div className={`font-serif ${s.text} leading-tight tracking-wide ${c.title} transition-colors duration-300`}>
            <span className="font-medium">Clube</span>
            <span className="font-normal opacity-90"> de </span>
            <span className="font-medium">Formulas</span>
          </div>
          <div className={`${s.sub} tracking-[2.5px] uppercase font-semibold mt-0.5 ${c.subtitle} transition-colors duration-300`}>
            Samir Tannuri
          </div>
        </div>
      )}
    </Link>
  )
}

// Standalone icon for favicon/small contexts
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="10"
        fill="url(#logo-gradient)"
        stroke="#B8783D"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      
      {/* Cf monogram */}
      <text
        x="24"
        y="30"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="500"
        fill="white"
      >
        Cf
      </text>
      
      {/* Accent dot */}
      <circle cx="36" cy="12" r="3" fill="#B8783D" />
      
      {/* Corner accent */}
      <rect x="38" y="38" width="5" height="5" rx="1" fill="#B8783D" fillOpacity="0.6" />
      
      <defs>
        <linearGradient id="logo-gradient" x1="2" y1="2" x2="46" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0C2340" />
          <stop offset="0.5" stopColor="#1a3a5c" />
          <stop offset="1" stopColor="#0C2340" />
        </linearGradient>
      </defs>
    </svg>
  )
}
