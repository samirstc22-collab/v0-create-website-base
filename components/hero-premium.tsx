"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, FlaskConical, GraduationCap, Microscope, BookOpen } from "lucide-react"

export function HeroPremium() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A1628]">
      {/* Imagem de fundo - palestra em palco internacional (cenario que comprova autoridade) */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4727-NTuBtxqrkNVd7sX59ZDNZ4ga2AjT6S.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Camadas de escurecimento e cor para legibilidade premium */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(15,31,56,0.78) 35%, rgba(21,37,68,0.72) 65%, rgba(10,22,40,0.88) 100%),
            radial-gradient(ellipse 80% 60% at 80% 20%, rgba(212, 185, 140, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 70% 50% at 20% 80%, rgba(157, 190, 177, 0.10) 0%, transparent 55%)
          `,
        }}
      />

      {/* Textura grain sutil para sensacao premium editorial */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-[0.08] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern fino - laboratorio/ciencia */}
      <div
        aria-hidden
        className="absolute inset-0 z-[2] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 185, 140, 0.6) 1px, transparent 0)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Glow champagne suave - apenas decorativo, sem animacao pesada */}
      <div
        aria-hidden
        className="absolute top-[10%] right-[8%] w-[700px] h-[700px] rounded-full pointer-events-none z-[3] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(212, 185, 140, 0.20) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Spotlight escuro lateral esquerda - garante leitura sobre o palco */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-[65%] z-[4] pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0) 100%)",
        }}
      />

      {/* Vignette inferior — base e mistura com a proxima secao */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[50%] z-[4] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.55) 60%, rgba(10,22,40,0.95) 100%)",
        }}
      />

      {/* Conteudo principal */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Coluna esquerda - Conteudo */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow elegante — apresentação pessoal como focal point */}
            <div
              className={`mb-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* Linha decorativa superior */}
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <span className="h-px w-8 bg-[#D4B98C]/50" />
                <span className="text-[10px] font-bold uppercase tracking-[4px] text-[#D4B98C]/70">
                  Apresentação
                </span>
              </div>

              {/* Frase focal principal */}
              <div className="inline-block relative">
                <p
                  className="font-serif text-[clamp(22px,3vw,38px)] leading-[1.15] tracking-[-0.5px] text-[#FCF5ED]"
                  style={{
                    textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  <span className="text-[#D4B98C]/80 font-normal italic text-[clamp(18px,2.2vw,28px)]">
                    Prazer,{" "}
                  </span>
                  <strong
                    className="font-serif font-semibold bg-gradient-to-r from-[#FCF5ED] via-[#F5E6D3] to-[#E0C89E] bg-clip-text text-transparent"
                    style={{ WebkitTextStroke: "0px" }}
                  >
                    Prof. Samir Tannuri
                  </strong>
                </p>
                {/* Sublinha accent dourada */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 300 6"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="pitchLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D4B98C" stopOpacity="0" />
                      <stop offset="20%" stopColor="#D4B98C" stopOpacity="0.7" />
                      <stop offset="80%" stopColor="#D4B98C" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#D4B98C" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,3 Q75,1 150,2.5 T300,2"
                    stroke="url(#pitchLine)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Role tag */}
              <div className="flex items-center gap-2 mt-4 justify-center lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4B98C]" />
                <span className="text-[11px] font-semibold uppercase tracking-[3px] text-[#D4B98C]">
                  Pesquisador & Consultor em Tecnologia Magistral
                </span>
              </div>
            </div>

            {/* Titulo principal - consultoria, cursos e desenvolvimento */}
            <h1
              className={`font-serif font-normal text-[clamp(40px,6vw,82px)] leading-[1.05] tracking-[-3px] text-[#FCF5ED] mb-8 transition-all duration-700 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow:
                  "0 1px 2px rgba(0,0,0,0.4), 0 6px 18px rgba(0,0,0,0.6), 0 12px 40px rgba(0,0,0,0.5)",
                letterSpacing: "-0.02em",
              }}
            >
              Consultoria, cursos e desenvolvimento técnico para farmácias e indústrias que querem sair da
              <br />
              <span className="relative inline-block mt-2">
                <em className="italic bg-gradient-to-r from-[#F5E6D3] via-[#E0C89E] to-[#D4B98C] bg-clip-text text-transparent drop-shadow-lg">
                  fórmula comum e construir diferenciação real
                </em>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E0C89E" stopOpacity="0.3" />
                      <stop offset="40%" stopColor="#D4B98C" stopOpacity="0.8" />
                      <stop offset="60%" stopColor="#D4B98C" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#E0C89E" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2,4 Q50,1.5 100,3 T198,2"
                    stroke="url(#underlineGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline - foco em publico */}
            <p
              className={`text-[18px] md:text-[21px] text-[#F4EDE0]/95 leading-[1.55] max-w-[640px] mx-auto lg:mx-0 mb-9 font-normal transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                textShadow: "0 2px 4px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
              }}
            >
              Cursos, mentoria e consultoria de{" "}
              <strong className="text-[#D4B98C] font-bold">alto nivel</strong>{" "}
              para pesquisadores e consultores que desenvolvem formulas autorais com base cientifica — as mesmas que prescritores reconhecem, indicam e pedem pelo nome.
            </p>

            {/* Stat row destacada - 500 Farmacias em destaque */}
            <div
              className={`grid grid-cols-3 gap-3 md:gap-4 max-w-[640px] mx-auto lg:mx-0 mb-10 transition-all duration-700 delay-250 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                { value: "500+", label: "Farmacias atendidas", icon: FlaskConical, highlight: true },
                { value: "1.000+", label: "Profissionais formados", icon: GraduationCap },
                { value: "Peer", label: "Reviewed em ciencia", icon: Microscope },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl px-3 md:px-4 py-4 backdrop-blur-md text-center lg:text-left transition-all hover:translate-y-[-2px] ${
                    stat.highlight
                      ? "bg-gradient-to-br from-[#D4B98C]/20 to-[#a68449]/10 border-2 border-[#D4B98C]/55 shadow-[0_10px_30px_rgba(212,185,140,0.18)]"
                      : "bg-[#0A1628]/60 border border-[#D4B98C]/25 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4B98C]/60 to-transparent" />
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1.5">
                    <stat.icon className={`w-3.5 h-3.5 ${stat.highlight ? "text-[#D4B98C]" : "text-[#9DBEB1]"}`} />
                    <div className="font-serif text-[22px] md:text-[28px] leading-none text-[#F4EDE0] font-bold tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-[10px] md:text-[11px] text-[#F4EDE0]/85 uppercase tracking-[1.5px] font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs principais - sem Instagram (movido pro footer) */}
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/cursos"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#a68449] via-[#D4B98C] to-[#a68449] text-[#0A1628] px-9 py-5 rounded-2xl font-bold text-[16px] tracking-wide hover:shadow-[0_0_50px_rgba(212,185,140,0.7)] transition-all shadow-[0_10px_40px_rgba(212,185,140,0.45)] hover:translate-y-[-3px] overflow-hidden"
                style={{ backgroundSize: "200% 100%" }}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Ver Cursos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/loja"
                className="group inline-flex items-center justify-center gap-3 bg-[#9DBEB1]/15 text-[#F4EDE0] px-8 py-5 rounded-2xl font-bold text-[16px] tracking-wide border-2 border-[#9DBEB1]/45 hover:bg-[#9DBEB1]/25 hover:border-[#9DBEB1]/70 hover:translate-y-[-3px] transition-all backdrop-blur-md"
              >
                <BookOpen className="w-5 h-5 text-[#9DBEB1]" />
                <span>Ir para a Loja</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <div key={item.text} className="flex items-center gap-2 text-[#F4EDE0]">
                  <item.icon className="w-4 h-4 text-[#D4B98C]" />
                  <span style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita - Foto de terno */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative mx-auto max-w-[420px] lg:max-w-[500px]">
              {/* Glow champagne atras da foto */}
              <div
                aria-hidden
                className="absolute -inset-12 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,185,140,0.35) 0%, rgba(157,190,177,0.15) 40%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Moldura decorativa elegante */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#D4B98C]/35" />
              <div className="absolute -inset-1.5 rounded-3xl border border-[#D4B98C]/20" />

              {/* Foto principal de terno */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9888%20copiar-K73UeCChbW1Z8EQ1xXtTRg3yFGHX8E.jpg"
                  alt="Samir Tannuri — Pesquisador e Consultor de Formulas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                  priority
                />
                {/* Vinheta sutil para integrar na paleta */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/65 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,185,140,0.4) 0%, transparent 50%, rgba(157,190,177,0.25) 100%)",
                  }}
                />
              </div>

              {/* Badge flutuante premium */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0F1F38]/98 to-[#0A1628]/98 backdrop-blur-xl border-2 border-[#D4B98C]/70 rounded-2xl px-6 py-4 shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_0_1px_rgba(212,185,140,0.15)]">
                <div className="text-[10px] uppercase tracking-[3px] text-[#D4B98C] font-bold mb-1 opacity-90">
                  Prazer,
                </div>
                <div className="font-serif text-[#FCF5ED] text-[17px] font-semibold mb-0.5 tracking-[-0.3px]">
                  Prof. Samir Tannuri
                </div>
                <div className="text-[#D4B98C]/80 text-[11px] font-medium tracking-[1px]">
                  Pesquisador · Consultor Magistral
                </div>
              </div>

              {/* Selo "500 farmacias" sobreposto */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#D4B98C] to-[#a68449] rounded-2xl px-4 py-3 shadow-[0_10px_30px_rgba(212,185,140,0.45)] border border-[#F4EDE0]/40">
                <div className="text-[10px] uppercase tracking-[2px] text-[#0A1628]/80 font-bold leading-tight">
                  Atendi
                </div>
                <div className="font-serif text-[#0A1628] text-[24px] font-bold leading-none">
                  500+
                </div>
                <div className="text-[10px] uppercase tracking-[1.5px] text-[#0A1628] font-bold leading-tight">
                  farmacias
                </div>
              </div>

              {/* Decoracoes de canto sutis */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-[#9DBEB1]/55 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-[#D4B98C]/55 rounded-tl-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de transicao na base */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[8] pointer-events-none bg-gradient-to-t from-white via-white/60 to-transparent" />

      {/* Linha decorativa champagne */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-[9]">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #D4B98C 30%, #9DBEB1 50%, #D4B98C 70%, transparent 100%)",
          }}
        />
      </div>
    </section>
  )
}
