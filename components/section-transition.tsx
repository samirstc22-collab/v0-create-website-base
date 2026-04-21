type TransitionProps = {
  /** cor que vem de cima */
  from: string
  /** cor que vem de baixo */
  to: string
  /** variante visual */
  variant?: "wave" | "diagonal" | "fade"
  /** altura em px */
  height?: number
}

/**
 * Divisor visual entre seções com cores diferentes.
 * Sempre renderiza um gradiente suave + opcional SVG decorativo.
 */
export function SectionTransition({
  from,
  to,
  variant = "wave",
  height = 100,
}: TransitionProps) {
  if (variant === "fade") {
    return (
      <div
        aria-hidden
        style={{
          height: `${height}px`,
          background: `linear-gradient(to bottom, ${from}, ${to})`,
        }}
      />
    )
  }

  if (variant === "diagonal") {
    return (
      <div
        aria-hidden
        className="relative"
        style={{ height: `${height}px`, backgroundColor: from }}
      >
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ height: `${height}px` }}
        >
          <polygon points="0,100 1440,0 1440,100" fill={to} />
        </svg>
      </div>
    )
  }

  return (
    <div
      aria-hidden
      className="relative"
      style={{ height: `${height}px`, backgroundColor: from }}
    >
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: `${height}px` }}
      >
        <path
          d="M0,64 C240,100 480,20 720,50 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.15"
        />
        <path
          d="M0,80 C240,110 480,40 720,70 C960,100 1200,50 1440,85 L1440,120 L0,120 Z"
          fill={to}
          opacity="0.35"
        />
        <path
          d="M0,95 C240,120 480,70 720,90 C960,110 1200,75 1440,100 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
