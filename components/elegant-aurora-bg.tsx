"use client"

import { useEffect, useRef } from "react"

/**
 * Fundo cinematografico premium:
 * - Aurora fluida com cores cobre, teal e navy (sem perder elegancia)
 * - Sistema de particulas moleculares conectadas
 * - Animacao suave em canvas, performatico
 * - Sem video externo - 100% controlado
 */
export function ElegantAuroraBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number | null>(null)
  const rafParticlesRef = useRef<number | null>(null)

  // Aurora flow animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    // Aurora blobs - cada um e uma "mancha" de cor que flutua
    type Blob = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      color: string
      pulse: number
    }

    const blobs: Blob[] = [
      // Copper warm tones
      { x: width * 0.2, y: height * 0.3, vx: 0.15, vy: 0.08, r: 480, color: "184,120,61", pulse: 0 },
      { x: width * 0.75, y: height * 0.25, vx: -0.12, vy: 0.1, r: 560, color: "212,165,116", pulse: 1.2 },
      // Teal accent
      { x: width * 0.6, y: height * 0.7, vx: 0.1, vy: -0.07, r: 520, color: "13,181,200", pulse: 2.4 },
      // Deep blue
      { x: width * 0.1, y: height * 0.8, vx: 0.08, vy: -0.12, r: 600, color: "30,80,140", pulse: 3.6 },
      // Subtle warm highlight
      { x: width * 0.85, y: height * 0.85, vx: -0.09, vy: -0.06, r: 420, color: "244,194,148", pulse: 4.8 },
    ]

    let time = 0

    const draw = () => {
      time += 0.005

      // Limpa e desenha base escura cinematografica
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height)
      baseGrad.addColorStop(0, "#050a14")
      baseGrad.addColorStop(0.5, "#0a1a30")
      baseGrad.addColorStop(1, "#050a14")
      ctx.fillStyle = baseGrad
      ctx.fillRect(0, 0, width, height)

      // Modo de blend para aurora luminosa
      ctx.globalCompositeOperation = "screen"

      blobs.forEach((b) => {
        // Move blob
        b.x += b.vx
        b.y += b.vy

        // Bounce nas bordas com folga
        if (b.x < -200 || b.x > width + 200) b.vx *= -1
        if (b.y < -200 || b.y > height + 200) b.vy *= -1

        // Pulsacao suave do raio
        const pulseR = b.r + Math.sin(time + b.pulse) * 80

        // Gradiente radial elegante
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, pulseR)
        grad.addColorStop(0, `rgba(${b.color}, 0.55)`)
        grad.addColorStop(0.4, `rgba(${b.color}, 0.22)`)
        grad.addColorStop(1, `rgba(${b.color}, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(b.x, b.y, pulseR, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalCompositeOperation = "source-over"

      // Vinheta cinematografica para concentrar foco no centro
      const vignette = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.3,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.85,
      )
      vignette.addColorStop(0, "rgba(0,0,0,0)")
      vignette.addColorStop(1, "rgba(5,10,20,0.7)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, width, height)

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Particulas moleculares conectadas
  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener("resize", resize)

    type Particle = {
      x: number
      y: number
      vx: number
      vy: number
      r: number
      glow: number
    }

    const count = window.innerWidth < 768 ? 30 : 60
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2 + 1,
      glow: Math.random() * Math.PI * 2,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      t += 0.01

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const glowAmount = 0.6 + Math.sin(t + p.glow) * 0.4

        // Glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        glow.addColorStop(0, `rgba(212, 165, 116, ${0.5 * glowAmount})`)
        glow.addColorStop(1, "rgba(212, 165, 116, 0)")
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()

        // Nucleo brilhante
        ctx.fillStyle = `rgba(255, 220, 180, ${0.9 * glowAmount})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()

        // Conexoes moleculares com particulas proximas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.25
            ctx.strokeStyle = `rgba(212, 165, 116, ${opacity})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      rafParticlesRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      if (rafParticlesRef.current) cancelAnimationFrame(rafParticlesRef.current)
    }
  }, [])

  return (
    <>
      {/* Aurora cinematografica de fundo */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      />
      {/* Camada de particulas moleculares */}
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      />
    </>
  )
}
