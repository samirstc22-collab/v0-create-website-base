export function MoleculeIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main molecule structure */}
      <circle cx="100" cy="100" r="20" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="12" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
      <circle cx="140" cy="60" r="14" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="130" r="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="140" r="16" fill="currentColor" fillOpacity="0.14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="170" r="8" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
      
      {/* Connecting bonds */}
      <line x1="80" y1="88" x2="68" y2="72" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="116" y1="86" x2="130" y2="72" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="84" y1="112" x2="58" y2="124" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="118" y1="114" x2="138" y2="128" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="100" y1="120" x2="100" y2="162" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      
      {/* Small decorative dots */}
      <circle cx="30" cy="90" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="170" cy="100" r="4" fill="currentColor" fillOpacity="0.2" />
      <circle cx="80" cy="30" r="3" fill="currentColor" fillOpacity="0.15" />
      <circle cx="120" cy="180" r="2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

export function DNAHelix({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* DNA double helix */}
      <path d="M20 20 Q50 50 80 20 Q50 -10 20 20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 60 Q50 90 80 60 Q50 30 20 60" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 100 Q50 130 80 100 Q50 70 20 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 140 Q50 170 80 140 Q50 110 20 140" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 180 Q50 210 80 180 Q50 150 20 180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 220 Q50 250 80 220 Q50 190 20 220" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      <path d="M20 260 Q50 290 80 260 Q50 230 20 260" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      
      {/* Base pairs */}
      <line x1="35" y1="20" x2="65" y2="20" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="60" x2="65" y2="60" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="100" x2="65" y2="100" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="140" x2="65" y2="140" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="180" x2="65" y2="180" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="220" x2="65" y2="220" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      <line x1="35" y1="260" x2="65" y2="260" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2" />
      
      {/* Nodes */}
      <circle cx="20" cy="20" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="20" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="20" cy="100" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="100" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="20" cy="180" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="180" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="20" cy="260" r="4" fill="currentColor" fillOpacity="0.4" />
      <circle cx="80" cy="260" r="4" fill="currentColor" fillOpacity="0.4" />
    </svg>
  )
}

export function FlaskIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flask body */}
      <path 
        d="M35 10 L35 45 L15 95 Q10 105 20 110 L80 110 Q90 105 85 95 L65 45 L65 10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeOpacity="0.4"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Flask neck */}
      <rect x="35" y="5" width="30" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
      {/* Liquid */}
      <path 
        d="M22 90 Q20 95 25 98 L75 98 Q80 95 78 90 L68 65 Q50 75 32 65 L22 90" 
        fill="currentColor" 
        fillOpacity="0.15"
      />
      {/* Bubbles */}
      <circle cx="40" cy="85" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="55" cy="80" r="2" fill="currentColor" fillOpacity="0.25" />
      <circle cx="60" cy="90" r="4" fill="currentColor" fillOpacity="0.15" />
      <circle cx="35" cy="92" r="2" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

export function BeakerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Beaker body */}
      <path 
        d="M10 15 L10 85 Q10 95 20 95 L60 95 Q70 95 70 85 L70 15" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeOpacity="0.4"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Spout */}
      <path d="M10 15 L5 10 L15 10 L10 15" fill="currentColor" fillOpacity="0.3" />
      {/* Measurement lines */}
      <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="15" y1="45" x2="22" y2="45" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <line x1="15" y1="60" x2="25" y2="60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="15" y1="75" x2="22" y2="75" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      {/* Liquid */}
      <rect x="12" y="50" width="56" height="43" rx="3" fill="currentColor" fillOpacity="0.12" />
    </svg>
  )
}

export function AtomIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Electron orbits */}
      <ellipse cx="60" cy="60" rx="50" ry="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" />
      <ellipse cx="60" cy="60" rx="50" ry="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" transform="rotate(60 60 60)" />
      <ellipse cx="60" cy="60" rx="50" ry="20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.25" fill="none" transform="rotate(120 60 60)" />
      {/* Nucleus */}
      <circle cx="60" cy="60" r="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Electrons */}
      <circle cx="110" cy="60" r="5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="35" cy="103" r="5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="35" cy="17" r="5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

export function PetriDishIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dish bottom */}
      <ellipse cx="50" cy="45" rx="45" ry="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.05" />
      {/* Dish lid */}
      <ellipse cx="50" cy="35" rx="42" ry="10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
      <ellipse cx="50" cy="30" rx="40" ry="8" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" fill="currentColor" fillOpacity="0.08" />
      {/* Culture spots */}
      <circle cx="35" cy="42" r="6" fill="currentColor" fillOpacity="0.15" />
      <circle cx="55" cy="40" r="8" fill="currentColor" fillOpacity="0.12" />
      <circle cx="70" cy="44" r="5" fill="currentColor" fillOpacity="0.18" />
      <circle cx="45" cy="48" r="4" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

export function WavePattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path 
        d="M0 50 Q25 20 50 50 T100 50 T150 50 T200 50 T250 50 T300 50 T350 50 T400 50" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeOpacity="0.2" 
        fill="none"
      />
      <path 
        d="M0 60 Q25 30 50 60 T100 60 T150 60 T200 60 T250 60 T300 60 T350 60 T400 60" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeOpacity="0.15" 
        fill="none"
      />
      <path 
        d="M0 40 Q25 10 50 40 T100 40 T150 40 T200 40 T250 40 T300 40 T350 40 T400 40" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeOpacity="0.1" 
        fill="none"
      />
    </svg>
  )
}

export function GridPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>
  )
}

export function HexagonPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon grid pattern */}
      <path d="M50 20 L80 20 L95 50 L80 80 L50 80 L35 50 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />
      <path d="M110 20 L140 20 L155 50 L140 80 L110 80 L95 50 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />
      <path d="M80 80 L110 80 L125 110 L110 140 L80 140 L65 110 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.03" />
      <path d="M140 80 L170 80 L185 110 L170 140 L140 140 L125 110 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />
      <path d="M20 80 L50 80 L65 110 L50 140 L20 140 L5 110 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" fill="none" />
      <path d="M50 140 L80 140 L95 170 L80 200 L50 200 L35 170 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" fill="none" />
      <path d="M110 140 L140 140 L155 170 L140 200 L110 200 L95 170 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.12" fill="none" />
    </svg>
  )
}

export function CircuitPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Circuit-like pattern */}
      <path d="M10 75 L40 75 L40 30 L80 30" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M80 30 L80 60 L120 60 L120 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M120 100 L80 100 L80 130 L40 130" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      <path d="M40 130 L40 100 L10 100" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" fill="none" />
      
      {/* Nodes */}
      <circle cx="40" cy="75" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="30" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="120" cy="60" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="120" cy="100" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="80" cy="100" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="40" cy="130" r="4" fill="currentColor" fillOpacity="0.3" />
      <circle cx="40" cy="100" r="4" fill="currentColor" fillOpacity="0.3" />
      
      {/* Center element */}
      <rect x="65" y="60" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" fill="currentColor" fillOpacity="0.08" />
    </svg>
  )
}
