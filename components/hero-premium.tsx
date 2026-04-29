"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowRight, Check, Instagram, Sparkles, FileText, Award } from "lucide-react"

// Carregamento dinamico das moleculas 3D para melhor performance
const FloatingMolecules = dynamic(
  () => import("./3d/floating-molecules").then((mod) => mod.FloatingMolecules),
  { ssr: false }
)

export function HeroPremium() {
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
        {/* Fallback enquanto video carrega */}
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
            "linear-gradient(180deg, rgba(12,35,64,0.92) 0%, rgba(12,35,64,0.85) 40%, rgba(12,35,64,0.95) 100%)",
        }}
      />

      {/* Moleculas 3D flutuantes */}
      <Suspense fallback={null}>
        <FloatingMolecules />
      </Suspense>

      {/* Glow radial cobre */}
      <div
        aria-hidden
        className="absolute top-[-10%] right-[10%] w-[900px] h-[900px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.18), transparent 55%)",
          filter: "blur(100px)",
        }}
      />

      {/* Glow radial teal */}
      <div
        aria-hidden
        className="absolute bottom-[-5%] left-[5%] w-[700px] h-[700px] rounded-full pointer-events-none z-[6]"
        style={{
          background: "radial-gradient(circle at center, rgba(13,181,200,0.12), transparent 55%)",
          filter: "blur(80px)",
        }}
      />

      {/* Glow atras da foto */}
      <div
        aria-hidden
        className="absolute top-[20%] right-[5%] w-[500px] h-[600px] rounded-full pointer-events-none z-[5]"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.25), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Grid pattern sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-[6]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Conteudo principal */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna esquerda - Conteudo */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge de autoridade */}
            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {[
                { icon: Award, text: "In-Cosmetics Paris 2025" },
                { icon: FileText, text: "Paper Peer-Reviewed" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-[#B8783D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-white/80">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Frase de impacto principal */}
            <h1
              className={`font-serif font-normal text-[clamp(36px,5.5vw,72px)] leading-[1.02] tracking-[-2px] text-white mb-6 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Formulas que prescritores{" "}
              <span className="relative inline-block">
                <em className="italic text-[#B8783D]">pedem pelo nome</em>
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
            </h1>

            {/* Subheadline persuasiva */}
            <p
              className={`text-[17px] md:text-[20px] text-white/85 leading-[1.65] max-w-[600px] mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Desenvolvo <strong className="text-white font-semibold">formulacoes exclusivas</strong> e{" "}
              <strong className="text-white font-semibold">protocolos validados</strong> que transformam farmacias
              magistrais em referencias tecnicas do mercado.
            </p>

            {/* CTAs principais */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#B8783D] to-[#d4a574] text-white px-10 py-5 rounded-xl font-bold text-[16px] tracking-wide hover:from-[#a66a32] hover:to-[#c9976a] transition-all shadow-[0_8px_30px_rgba(184,120,61,0.4)] hover:shadow-[0_12px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-2px]"
              >
                <Sparkles className="w-5 h-5" />
                Diagnostico Tecnico Personalizado
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://instagram.com/st.farma"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#E1306C] text-white px-8 py-5 rounded-xl font-bold text-[16px] tracking-wide hover:opacity-90 transition-all shadow-[0_8px_25px_rgba(193,53,132,0.35)]"
              >
                <Instagram className="w-6 h-6" />
                Siga @st.farma
              </Link>
            </div>

            {/* Trust bullets */}
            <div
              className={`flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-[14px] text-white/80 font-medium transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                "+500 farmacias atendidas",
                "+1.000 profissionais formados",
                "6 anos liderando P&D",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Foto grande do Samir */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto max-w-[380px] lg:max-w-[450px]">
              {/* Moldura decorativa */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#B8783D]/30 animate-border-glow" />
              
              {/* Foto principal */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4128-pAVchu8AAaVoA2fHFbF3NfNqx04xGp.jpeg"
                  alt="Samir Tannuri — Consultor em Tecnologia Magistral"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  priority
                />
                {/* Overlay gradiente sutil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/40 via-transparent to-transparent" />
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-4 -left-4 bg-[#0C2340]/90 backdrop-blur-md border border-[#B8783D]/40 rounded-xl px-5 py-3 shadow-xl">
                <div className="text-[11px] uppercase tracking-[2px] text-[#B8783D] font-bold mb-1">
                  Delegado Tecnico
                </div>
                <div className="text-white text-[14px] font-semibold">
                  In-Cosmetics Paris 2025
                </div>
              </div>

              {/* Decoracoes de canto */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-[#0db5c8]/60 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-4 border-l-4 border-[#B8783D]/60 rounded-bl-2xl" />
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
