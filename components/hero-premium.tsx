"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowRight, Check, Instagram, Award, FlaskConical, GraduationCap, Microscope } from "lucide-react"

const FloatingMolecules = dynamic(
  () => import("./3d/floating-molecules").then((mod) => mod.FloatingMolecules),
  { ssr: false },
)

const ElegantAuroraBg = dynamic(
  () => import("./elegant-aurora-bg").then((mod) => mod.ElegantAuroraBg),
  { ssr: false },
)

export function HeroPremium() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#02060f]">
      {/* Aurora cinematografica de fundo */}
      <div className="absolute inset-0 z-0">
        <ElegantAuroraBg />
      </div>

      {/* Overlay vertical de contraste */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,2,8,0.6) 0%, rgba(0,2,8,0.35) 45%, rgba(0,2,8,0.75) 100%)",
        }}
      />

      {/* Spotlight escuro lateral esquerda - garante leitura nitida do texto */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[65%] z-[2] pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,2,8,0.85) 0%, rgba(0,2,8,0.5) 50%, rgba(0,2,8,0) 100%)",
        }}
      />

      {/* Moleculas 3D flutuantes (decorativas) */}
      <Suspense fallback={null}>
        <FloatingMolecules />
      </Suspense>

      {/* Glow radial cobre intenso */}
      <div
        aria-hidden
        className="absolute top-[-10%] right-[10%] w-[900px] h-[900px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.22), transparent 55%)",
          filter: "blur(100px)",
        }}
      />

      {/* Glow atras da foto */}
      <div
        aria-hidden
        className="absolute top-[18%] right-[3%] w-[560px] h-[680px] rounded-full pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.36), transparent 60%)",
          filter: "blur(70px)",
        }}
      />

      {/* Grid pattern sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[6]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Conteudo principal */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Coluna esquerda - Conteudo */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow elegante */}
            <div
              className={`inline-flex items-center gap-3 mb-7 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#d4a574] to-[#d4a574]" />
              <span className="text-[11px] font-bold uppercase tracking-[3.5px] text-[#f0c896]">
                Samir Tannuri · Pesquisador & Consultor
              </span>
            </div>

            {/* Titulo principal - Cursos & Consultoria de Alto Nivel */}
            <h1
              className={`font-serif font-normal text-[clamp(40px,6vw,80px)] leading-[0.98] tracking-[-3px] text-white mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow:
                  "0 2px 4px rgba(0,0,0,0.95), 0 4px 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.7)",
              }}
            >
              Cursos & Consultoria de{" "}
              <span className="relative inline-block">
                <em className="italic bg-gradient-to-r from-[#f0c896] via-[#d4a574] to-[#B8783D] bg-clip-text text-transparent">
                  alto nivel
                </em>
              </span>
              <br />
              para pesquisadores e{" "}
              <span className="relative inline-block">
                consultores
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q50,2 100,4 T198,3"
                    stroke="#d4a574"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.9"
                  />
                </svg>
              </span>{" "}
              de formulas
            </h1>

            {/* Subheadline - foco em ciencia e prescritores */}
            <p
              className={`text-[18px] md:text-[21px] text-white leading-[1.55] max-w-[640px] mx-auto lg:mx-0 mb-9 font-normal transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.92), 0 4px 20px rgba(0,0,0,0.7)",
              }}
            >
              Formacao avancada e mentoria estrategica para quem desenvolve{" "}
              <strong className="text-[#f0c896] font-bold">formulas autorais com base cientifica</strong>{" "}
              — as mesmas que prescritores reconhecem, indicam e pedem pelo nome.
            </p>

            {/* Stat row destacada - 500 Farmacias */}
            <div
              className={`grid grid-cols-3 gap-4 max-w-[640px] mx-auto lg:mx-0 mb-10 transition-all duration-700 delay-250 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "500+", label: "Farmacias atendidas", icon: FlaskConical },
                { value: "1.000+", label: "Profissionais formados", icon: GraduationCap },
                { value: "Peer", label: "Reviewed em ciencia", icon: Microscope },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="relative bg-black/55 border border-[#d4a574]/35 rounded-2xl px-4 py-4 backdrop-blur-md text-center lg:text-left shadow-[0_8px_28px_rgba(0,0,0,0.5)]"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574]/60 to-transparent" />
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1.5">
                    <stat.icon className="w-3.5 h-3.5 text-[#f0c896]" />
                    <div className="font-serif text-[26px] md:text-[30px] leading-none text-white font-bold tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-[11px] text-white/85 uppercase tracking-[1.5px] font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs principais - Cursos e Diagnostico */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/cursos"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#B8783D] via-[#d4a574] to-[#B8783D] text-white px-9 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_50px_rgba(184,120,61,0.7)] transition-all shadow-[0_10px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-3px] overflow-hidden"
                style={{ backgroundSize: "200% 100%" }}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Ver Cursos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-5 rounded-2xl font-bold text-[16px] tracking-wide border-2 border-white/30 hover:border-white/70 hover:bg-white/10 hover:translate-y-[-3px] transition-all backdrop-blur-md"
              >
                <span>Diagnostico Tecnico</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Instagram discreto - apenas icone redondo */}
              <Link
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @samir_farma"
                className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/8 border border-white/20 hover:bg-white/15 hover:border-white/40 hover:scale-110 transition-all"
              >
                <Instagram className="w-4 h-4 text-white/85 group-hover:text-white" />
              </Link>
            </div>

            {/* Trust bullets nitidos */}
            <div
              className={`flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-[13px] font-semibold transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { icon: Award, text: "Delegado · In-Cosmetics Paris 2025" },
                { icon: Microscope, text: "Paper Peer-Reviewed" },
                { icon: GraduationCap, text: "Mestre em P&D Cosmetico" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white">
                  <item.icon className="w-4 h-4 text-[#f0c896]" />
                  <span style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Foto de terno (pesquisador/consultor) */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto max-w-[420px] lg:max-w-[500px]">
              {/* Moldura decorativa dupla */}
              <div className="absolute -inset-5 rounded-3xl border-2 border-[#B8783D]/40 animate-border-glow" />
              <div className="absolute -inset-2 rounded-3xl border border-[#d4a574]/25" />

              {/* Foto principal de terno */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/samir-suit-portrait.jpg"
                  alt="Samir Tannuri — Pesquisador e Consultor em Tecnologia de Formulas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                  priority
                />
                {/* Overlay sutil de cor para integrar na paleta */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02060f]/60 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-25"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(184,120,61,0.4) 0%, transparent 50%, rgba(13,181,200,0.25) 100%)",
                  }}
                />
              </div>

              {/* Badge flutuante premium */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0C2340]/95 to-[#02060f]/95 backdrop-blur-xl border-2 border-[#B8783D]/55 rounded-2xl px-6 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="text-[10px] uppercase tracking-[2.5px] text-[#f0c896] font-bold mb-1">
                  Samir Tannuri
                </div>
                <div className="text-white text-[15px] font-bold mb-0.5">
                  Pesquisador · Consultor
                </div>
                <div className="text-white/65 text-[11px] font-medium">
                  Cursos & Mentoria de Alto Nivel
                </div>
              </div>

              {/* Selo "500 farmacias" sobre a foto */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#B8783D] to-[#8b5520] rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(184,120,61,0.5)] border border-[#f0c896]/40">
                <div className="text-[10px] uppercase tracking-[2px] text-white/80 font-bold leading-tight">
                  Atendi
                </div>
                <div className="font-serif text-white text-[24px] font-bold leading-none">
                  500+
                </div>
                <div className="text-[10px] uppercase tracking-[1.5px] text-white font-bold leading-tight">
                  farmacias
                </div>
              </div>

              {/* Decoracoes de canto */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-[#0db5c8]/70 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-[#B8783D]/70 rounded-tl-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de transicao na base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[8] pointer-events-none bg-gradient-to-t from-white via-white/50 to-transparent" />

      {/* Linha decorativa cobre <-> teal */}
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
