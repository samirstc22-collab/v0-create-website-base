"use client"

import Link from "next/link"

interface LogoProps {
  variant?: "dark" | "light"
  showText?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

/**
 * MolecularMark
 * Icon-only mark inspired by an organic chemistry skeleton: a hexagon
 * (benzene-like ring) with bonded atoms at the vertices, plus a champagne
 * accent atom that doubles as the brand "spark".
 */
function MolecularMark({
  className = "",
  ringStroke = "#FFFFFF",
  bondStroke = "#FFFFFF",
  atomFill = "#FFFFFF",
  accent = "#B8783D",
  bg,
  ringFillOpacity = 0,
}: {
  className?: string
  ringStroke?: string
  bondStroke?: string
  atomFill?: string
  accent?: string
  bg?: string
  ringFillOpacity?: number
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Optional rounded background plate (used only inside the colored tile variant) */}
      {bg && (
        <rect
          x="1.25"
          y="1.25"
          width="45.5"
          height="45.5"
          rx="11"
          fill={bg}
          stroke={accent}
          strokeOpacity="0.45"
          strokeWidth="1"
        />
      )}

      {/* External bonds */}
      <line x1="24" y1="4" x2="24" y2="9.5" stroke={bondStroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="41.4" y1="14" x2="36.6" y2="16.75" stroke={bondStroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6.6" y1="14" x2="11.4" y2="16.75" stroke={bondStroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="6.6" y1="34" x2="11.4" y2="31.25" stroke={bondStroke} strokeWidth="1.6" strokeLinecap="round" />
      <line x1="41.4" y1="34" x2="36.6" y2="31.25" stroke={bondStroke} strokeWidth="1.6" strokeLinecap="round" />

      {/* Hexagonal ring (single benzene) */}
      <polygon
        points="24,9.5 36.6,16.75 36.6,31.25 24,38.5 11.4,31.25 11.4,16.75"
        stroke={ringStroke}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={ringStroke}
        fillOpacity={ringFillOpacity}
      />

      {/* Inner double bond hint (3 short lines) — classic chemistry motif */}
      <line x1="22.2" y1="14.6" x2="33.8" y2="21.3" stroke={ringStroke} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="33.8" y1="26.7" x2="22.2" y2="33.4" stroke={ringStroke} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />
      <line x1="13.8" y1="22.2" x2="13.8" y2="25.8" stroke={ringStroke} strokeWidth="1.2" strokeLinecap="round" opacity="0.55" />

      {/* Atoms at each vertex */}
      <circle cx="24" cy="9.5" r="2.2" fill={atomFill} />
      <circle cx="36.6" cy="16.75" r="2.2" fill={atomFill} />
      <circle cx="36.6" cy="31.25" r="2.2" fill={atomFill} />
      <circle cx="24" cy="38.5" r="2.2" fill={atomFill} />
      <circle cx="11.4" cy="31.25" r="2.2" fill={atomFill} />
      <circle cx="11.4" cy="16.75" r="2.2" fill={atomFill} />

      {/* Champagne accent atom — brand spark */}
      <circle cx="24" cy="9.5" r="3.2" fill={accent}>
        <animate attributeName="opacity" values="1;0.55;1" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function Logo({
  variant = "dark",
  showText = true,
  size = "md",
  className = "",
}: LogoProps) {
  const sizes = {
    sm: { icon: "w-9 h-9", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-11 h-11", text: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-xl", sub: "text-[11px]" },
  }

  const palette = {
    dark: {
      ring: "#0C2340",
      bond: "#0C2340",
      atom: "#0C2340",
      accent: "#B8783D",
      title: "text-[#0C2340]",
      subtitle: "text-[#64748b]",
    },
    light: {
      ring: "#FFFFFF",
      bond: "#FFFFFF",
      atom: "#FFFFFF",
      accent: "#e8a87c",
      title: "text-white",
      subtitle: "text-white/55",
    },
  }

  const s = sizes[size]
  const c = palette[variant]

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Molecular mark — sized to the same tile as before but no opaque background */}
      <div className={`relative ${s.icon} flex items-center justify-center`}>
        <MolecularMark
          className="w-full h-full transition-transform duration-300 group-hover:rotate-[12deg]"
          ringStroke={c.ring}
          bondStroke={c.bond}
          atomFill={c.atom}
          accent={c.accent}
        />
      </div>

      {/* Text — preserved exactly */}
      {showText && (
        <div className="hidden sm:block">
          <div
            className={`font-serif ${s.text} leading-tight tracking-wide ${c.title} transition-colors duration-300`}
          >
            <span className="font-medium">ST</span>
            <span className="font-normal opacity-90"> </span>
            <span className="font-medium">Farma</span>
          </div>
          <div
            className={`${s.sub} tracking-[2.5px] uppercase font-semibold mt-0.5 ${c.subtitle} transition-colors duration-300`}
          >
            Samir Tannuri
          </div>
        </div>
      )}
    </Link>
  )
}

// Standalone icon for favicon/small contexts — same molecular motif on a tinted tile
export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <MolecularMark
      className={className}
      ringStroke="#FFFFFF"
      bondStroke="#FFFFFF"
      atomFill="#FFFFFF"
      accent="#B8783D"
      bg="url(#logo-gradient)"
    />
  )
}
