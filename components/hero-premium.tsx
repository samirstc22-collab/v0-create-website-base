"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowRight, Check, Instagram, FileText, Award, FlaskConical, Star } from "lucide-react"

// Carregamento dinamico das moleculas 3D para melhor performance
const FloatingMolecules = dynamic(
  () => import("./3d/floating-molecules").then((mod) => mod.FloatingMolecules),
  { ssr: false },
)

// Fundo cinematografico premium em canvas (substitui video pesado)
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
    <section className="relative min-h-screen overflow-hidden bg-[#050a14]">
      {/* Aurora cinematografica - cobre, teal, navy fluindo */}
      <div className="absolute inset-0 z-0">
        <ElegantAuroraBg />
      </div>

      {/* Overlay escurecedor sutil - mantem cores vibrantes mas garante contraste */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,10,20,0.35) 0%, rgba(5,10,20,0.15) 40%, rgba(5,10,20,0.55) 100%)",
        }}
      />

      {/* Moleculas 3D flutuantes */}
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

      {/* Glow radial teal */}
      <div
        aria-hidden
        className="absolute bottom-[-5%] left-[5%] w-[700px] h-[700px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(13,181,200,0.15), transparent 55%)",
          filter: "blur(80px)",
        }}
      />

      {/* Glow atras da foto - mais forte */}
      <div
        aria-hidden
        className="absolute top-[20%] right-[5%] w-[500px] h-[600px] rounded-full pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.32), transparent 60%)",
          filter: "blur(60px)",
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
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna esquerda - Conteudo */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badges de autoridade premium */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-7 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { icon: Award, text: "Delegado · In-Cosmetics Paris 2025" },
                { icon: FileText, text: "Paper Peer-Reviewed" },
                { icon: Star, text: "+500 Farmacias Atendidas" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.07] border border-white/[0.15] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <item.icon className="w-3.5 h-3.5 text-[#d4a574]" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[1.5px] text-white/95">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Frase de impacto principal - mais nitida */}
            <h1
              className={`font-serif font-normal text-[clamp(38px,5.8vw,76px)] leading-[1.0] tracking-[-2.5px] text-white mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow: "0 2px 30px rgba(0,0,0,0.5)",
              }}
            >
              A ciencia por tras das{" "}
              <span className="relative inline-block">
                <em className="italic bg-gradient-to-r from-[#d4a574] via-[#B8783D] to-[#d4a574] bg-clip-text text-transparent">
                  formulas que prescritores
                </em>
              </span>{" "}
              <span className="relative inline-block">
                pedem pelo nome
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q50,2 100,4 T198,3"
                    stroke="#B8783D"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.85"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline persuasiva com mais contraste */}
            <p
              className={`text-[18px] md:text-[22px] text-white leading-[1.55] max-w-[620px] mx-auto lg:mx-0 mb-9 font-light transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow: "0 2px 20px rgba(0,0,0,0.6)",
              }}
            >
              Desenvolvo{" "}
              <strong className="text-[#d4a574] font-bold">formulacoes autorais</strong> e{" "}
              <strong className="text-[#d4a574] font-bold">protocolos validados</strong> que transformam
              farmacias magistrais em referencias tecnicas — saindo da disputa por preco e construindo um portfolio que prescritores reconhecem e indicam.
            </p>

            {/* CTAs principais - mais destacados */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/contato"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#B8783D] via-[#d4a574] to-[#B8783D] text-white px-9 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_50px_rgba(184,120,61,0.7)] transition-all shadow-[0_10px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-3px] overflow-hidden"
                style={{ backgroundSize: "200% 100%" }}
              >
                <FlaskConical className="w-5 h-5" />
                <span className="relative z-[2]">Diagnostico Tecnico Personalizado</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-[2]" />
              </Link>
              <Link
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white px-8 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:opacity-95 hover:translate-y-[-3px] transition-all shadow-[0_10px_30px_rgba(193,53,132,0.45)]"
              >
                <Instagram className="w-7 h-7" />
                <span>@samir_farma</span>
              </Link>
            </div>

            {/* Trust bullets nitidos */}
            <div
              className={`flex flex-wrap gap-x-7 gap-y-3 justify-center lg:justify-start text-[14px] font-semibold transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                "+1.000 profissionais formados",
                "6 anos liderando P&D",
                "Publicacoes peer-reviewed",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
                  </div>
                  <span style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Foto grande e impactante */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto max-w-[420px] lg:max-w-[480px]">
              {/* Moldura decorativa dupla */}
              <div className="absolute -inset-5 rounded-3xl border-2 border-[#B8783D]/40 animate-border-glow" />
              <div className="absolute -inset-2 rounded-3xl border border-[#d4a574]/20" />
              
              {/* Foto principal - bem grande */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2400-56iB6ioacXe4fVxwFVoNMDro6w3zSZ.jpeg"
                  alt="Samir Tannuri — Consultor em Tecnologia Magistral e P&D Cosmetico"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                  priority
                />
                {/* Overlay gradiente sutil para legibilidade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/50 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante premium */}
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-[#0C2340]/95 to-[#050a14]/95 backdrop-blur-xl border-2 border-[#B8783D]/50 rounded-2xl px-6 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
                <div className="text-[10px] uppercase tracking-[2px] text-[#d4a574] font-bold mb-1">
                  Samir Tannuri
                </div>
                <div className="text-white text-[15px] font-bold mb-0.5">
                  Farmaceutico · Pesquisador
                </div>
                <div className="text-white/60 text-[11px] font-medium">
                  Consultor Tecnico Cientifico
                </div>
              </div>

              {/* Decoracoes de canto premium */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-[3px] border-r-[3px] border-[#0db5c8]/70 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-[3px] border-l-[3px] border-[#B8783D]/70 rounded-bl-2xl" />
            </div>
          </div>
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
