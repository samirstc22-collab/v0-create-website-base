"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight, Check, Play, Beaker, Atom, FlaskConical } from "lucide-react"

// Carregamento dinamico das moleculas 3D para melhor performance
const FloatingMolecules = dynamic(
  () => import("./3d/floating-molecules").then((mod) => mod.FloatingMolecules),
  { ssr: false }
)

export function HeroVideo() {
  const [mounted, setMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0C2340]">
      {/* Video de fundo em loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Fallback image enquanto video carrega */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C2340] via-[#1a3358] to-[#0a1a33]" />
        )}
      </div>

      {/* Overlay escuro para contraste */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,35,64,0.85) 0%, rgba(12,35,64,0.75) 40%, rgba(12,35,64,0.9) 100%)",
        }}
      />

      {/* Moleculas 3D flutuantes */}
      <Suspense fallback={null}>
        <FloatingMolecules />
      </Suspense>

      {/* Glow radial cobre */}
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.15), transparent 60%)",
          filter: "blur(100px)",
        }}
      />

      {/* Glow radial teal */}
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(13,181,200,0.12), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Grid pattern sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[6]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Conteudo principal */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Badge de autoridade */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { icon: Beaker, text: "In-Cosmetics Paris 2025" },
            { icon: Atom, text: "Missoes Internacionais" },
            { icon: FlaskConical, text: "Paper Peer-Reviewed" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4 text-[#B8783D]" />
              <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-white/80">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center max-w-[920px] mx-auto">
          {/* Eyebrow */}
          <div
            className={`mb-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#B8783D]/15 border border-[#B8783D]/30 text-[12px] md:text-[13px] font-bold uppercase tracking-[2.5px] text-[#d4a574]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Consultoria tecnica em formulacao dermatologica
            </span>
          </div>

          {/* Headline principal - otimizado para conversao */}
          <h1
            className={`font-serif font-normal text-[clamp(38px,6vw,76px)] leading-[1.05] tracking-[-2px] text-white mb-6 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Transforme ciencia em{" "}
            <span className="relative inline-block">
              <em className="italic text-[#B8783D]">resultado</em>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="10"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2,5 Q50,2 100,4 T198,3"
                  stroke="#B8783D"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>
            <br />
            <span className="text-white/90">para sua farmacia ou marca</span>
          </h1>

          {/* Subheadline - focado em beneficios */}
          <p
            className={`text-[18px] md:text-[21px] text-white/85 leading-[1.65] max-w-[680px] mx-auto mb-10 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Formulas exclusivas, protocolos validados e estrategias que{" "}
            <strong className="text-white font-semibold">aumentam margem</strong>,{" "}
            <strong className="text-white font-semibold">diferenciam seu portfolio</strong> e{" "}
            <strong className="text-white font-semibold">conquistam prescritores</strong>.
          </p>

          {/* CTAs principais */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="/consultoria"
              className="group inline-flex items-center justify-center gap-3 bg-[#B8783D] text-white px-10 py-5 rounded-xl font-bold text-[17px] tracking-wide hover:bg-[#a66a32] transition-all shadow-[0_8px_30px_rgba(184,120,61,0.4)] hover:shadow-[0_12px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-2px]"
            >
              Quero uma consultoria gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cursos"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/20 text-white px-8 py-5 rounded-xl font-semibold text-[17px] tracking-wide hover:border-[#0db5c8]/60 hover:bg-[#0db5c8]/10 transition-all"
            >
              <Play className="w-5 h-5" />
              Ver meus cursos
            </Link>
          </div>

          {/* Trust bullets */}
          <div
            className={`flex flex-wrap gap-x-8 gap-y-3 justify-center text-[15px] text-white/80 font-medium transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {[
              "Racional cientifico documentado",
              "+500 farmacias atendidas",
              "+1.000 profissionais formados",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats cards flutuantes */}
        <div
          className={`mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] mx-auto transition-all duration-700 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { num: "6", suffix: " anos", label: "Coordenando P&D" },
            { num: "500", suffix: "+", label: "Farmacias atendidas" },
            { num: "1.000", suffix: "+", label: "Profissionais formados" },
            { num: "3", suffix: "", label: "Missoes internacionais" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 text-center hover:bg-white/10 hover:border-[#B8783D]/30 transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-[32px] md:text-[40px] text-white leading-none mb-1">
                {stat.num}
                <span className="text-[#B8783D]">{stat.suffix}</span>
              </div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-white/60 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradiente de transicao na base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[8] pointer-events-none bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Linha decorativa cobre → teal */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-[9]">
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(90deg, #B8783D 0%, #0db5c8 50%, #B8783D 100%)",
          }}
        />
      </div>
    </section>
  )
}
