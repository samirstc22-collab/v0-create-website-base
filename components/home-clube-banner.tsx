"use client"

import Link from "next/link"
import Image from "next/image"
import {
  GraduationCap,
  FileText,
  Video,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Sparkles,
  Crown,
  CheckCircle2,
  TrendingUp,
  Lock,
  Zap,
} from "lucide-react"
import { MoleculeIllustration, HexagonPattern, FlaskIllustration } from "./illustrations"

export function HomeClubeBanner() {
  const features = [
    {
      icon: FileText,
      title: "60+ Formularios Tecnicos",
      desc: "Bases, ativos, protocolos e fichas tecnicas prontas para uso.",
      accent: "#B8783D",
    },
    {
      icon: Video,
      title: "Aulas em Video",
      desc: "Conteudo gravado com explicacoes detalhadas formula por formula.",
      accent: "#0a8f9e",
    },
    {
      icon: GraduationCap,
      title: "Cursos Completos",
      desc: "Formacao estruturada em manipulacao, cosmetologia e gestao.",
      accent: "#10b981",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      desc: "Grupo exclusivo para troca tecnica, duvidas e networking real.",
      accent: "#d4a574",
    },
  ]

  const testimonials = [
    { initial: "LS", name: "Lucia S.", role: "Farmacia Manipulacao · SP" },
    { initial: "RT", name: "Rafael T.", role: "Industria Cosmetica · MG" },
    { initial: "AC", name: "Ana C.", role: "Dermatofuncional · RJ" },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#0C2340] via-[#0a1f3a] to-[#07172d] py-16 lg:py-20 px-6 lg:px-10 overflow-hidden">
      {/* Animated decorative vectors */}
      <MoleculeIllustration className="absolute top-12 right-[5%] w-32 h-32 text-[#B8783D] opacity-[0.18] motion-safe:animate-[spin_50s_linear_infinite]" />
      <HexagonPattern className="absolute bottom-12 left-[3%] w-40 h-40 text-[#0a8f9e] opacity-[0.15] motion-safe:animate-[spin_70s_linear_infinite_reverse]" />
      <FlaskIllustration className="absolute top-1/2 left-[8%] w-20 h-24 text-white opacity-[0.10]" />

      {/* Brand glows */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 90% 20%, rgba(184,120,61,0.20) 0%, transparent 60%), radial-gradient(ellipse 700px 400px at 5% 90%, rgba(10,143,158,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* HEADER STRIP — premium positioning */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-12 bg-[#B8783D]" />
          <Crown className="w-5 h-5 text-[#d4a574]" />
          <span className="text-[12px] font-bold uppercase tracking-[3.5px] text-[#d4a574]">
            Clube de Formulas
          </span>
          <Crown className="w-5 h-5 text-[#d4a574]" />
          <div className="h-px w-12 bg-[#B8783D]" />
        </div>

        <h2 className="text-center font-serif text-[clamp(36px,5.6vw,72px)] text-white leading-[0.98] tracking-[-0.03em] mb-5 max-w-[1000px] mx-auto">
          A biblioteca tecnica que{" "}
          <em className="italic text-[#d4a574]">vende sozinha</em>{" "}
          na sua farmacia.
        </h2>

        <p className="text-center text-[18px] lg:text-[21px] text-white/85 max-w-[820px] mx-auto leading-[1.55] font-medium mb-12">
          Mais de <strong className="text-white">60 formulas autorais</strong>, cursos completos, aulas live e suporte tecnico — para quem nao quer mais{" "}
          <span className="line-through decoration-[#dc2626]/70 decoration-2">copiar do vizinho</span>{" "}
          <strong className="text-[#d4a574]">e comecar a vender ciencia</strong>.
        </p>

        {/* MAIN GRID — 2 columns desktop */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Pitch + features */}
          <div className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-3xl p-7 lg:p-9 relative overflow-hidden">
            {/* Decorative ghost numeral */}
            <div
              aria-hidden
              className="absolute -bottom-12 -right-4 font-serif text-[200px] leading-none opacity-[0.04] text-white pointer-events-none select-none"
            >
              60+
            </div>

            <div className="relative">
              {/* Sub-headline */}
              <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-4 py-1.5 mb-5">
                <Zap className="w-4 h-4 text-[#d4a574]" />
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#d4a574]">
                  Acesso ao metodo proprio
                </span>
              </div>

              <h3 className="font-serif text-[26px] lg:text-[32px] text-white leading-[1.1] tracking-[-0.02em] mb-4">
                O conhecimento tecnico que <em className="italic text-[#d4a574]">leva 6 anos</em> para construir.{" "}
                <span className="text-white/60">Em 30 dias.</span>
              </h3>

              <p className="text-[15px] lg:text-[16.5px] text-white/75 leading-[1.55] mb-7">
                Cada formula entra com racional cientifico, justificativa tecnica e narrativa de venda pronta. Voce ganha tempo, margem e autoridade — sem reinventar a roda a cada paciente.
              </p>

              {/* Stats row — bigger, more impactful */}
              <div className="grid grid-cols-3 gap-4 mb-7 pb-7 border-b border-white/10">
                {[
                  { v: "60+", l: "Formulas" },
                  { v: "1.000+", l: "Alunos" },
                  { v: "17", l: "Estados" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-serif text-[clamp(28px,3.5vw,44px)] text-[#d4a574] leading-none mb-1.5 tracking-[-0.02em]">
                      {s.v}
                    </div>
                    <div className="text-[10px] uppercase tracking-[2px] text-white/55 font-bold">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              {/* What you get list */}
              <div className="space-y-2.5 mb-7">
                {[
                  "Formulas autorais validadas em bancada industrial",
                  "Aulas live mensais com Q&A em tempo real",
                  "Comunidade fechada para suporte tecnico",
                  "Atualizacoes continuas + novas releases",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-[18px] h-[18px] text-[#10b981] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-[14.5px] lg:text-[15.5px] text-white font-semibold leading-[1.4]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cursos"
                  className="group flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide shadow-[0_12px_40px_rgba(184,120,61,0.4)] hover:translate-y-[-2px] hover:shadow-[0_16px_50px_rgba(184,120,61,0.55)] transition-all"
                >
                  <Crown className="w-4 h-4" />
                  Acessar o Clube
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/loja"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/25 text-white px-6 py-4 rounded-xl font-bold text-[15px] tracking-wide hover:bg-white/10 hover:border-white/40 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  Ver formularios
                </Link>
              </div>

              {/* Risk-reverse mini-strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 pt-5 border-t border-white/10">
                {["Acesso imediato", "Cancela quando quiser", "Suporte com Samir"].map((g) => (
                  <div key={g} className="flex items-center gap-1.5 text-[12px] text-white/65 font-semibold">
                    <Lock className="w-3 h-3 text-[#10b981]" />
                    {g}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Feature cards grid + social proof */}
          <div className="flex flex-col gap-5">
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-3.5 flex-1">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group relative bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-sm border border-white/10 hover:border-[var(--accent)]/40 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]"
                  style={{
                    ["--accent" as string]: f.accent,
                    animationDelay: `${i * 80}ms`,
                  } as React.CSSProperties}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${f.accent}20`,
                      border: `1px solid ${f.accent}40`,
                    }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.accent }} strokeWidth={2} />
                  </div>
                  <h4 className="font-serif text-[17px] lg:text-[19px] text-white mb-1.5 leading-[1.15] tracking-[-0.01em]">
                    {f.title}
                  </h4>
                  <p className="text-[12.5px] text-white/60 leading-[1.45]">
                    {f.desc}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    aria-hidden
                    className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(225deg, ${f.accent}25, transparent 60%)`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Social proof bar */}
            <div className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex items-center gap-5">
              {/* Avatars stack */}
              <div className="flex -space-x-2.5 flex-shrink-0">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8783D] to-[#8a5729] border-2 border-[#0C2340] flex items-center justify-center font-serif text-[13px] text-white shadow-md"
                    style={{ zIndex: testimonials.length - i }}
                  >
                    {t.initial}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0C2340] flex items-center justify-center text-[10px] text-white font-bold">
                  +997
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#d4a574] fill-[#d4a574]" />
                  ))}
                  <span className="text-[12.5px] font-bold text-white ml-1.5">4.9/5</span>
                </div>
                <p className="text-[12px] text-white/60 leading-tight font-medium">
                  Avaliacao media de <strong className="text-white/90">1.000+ alunos</strong> em 17 estados
                </p>
              </div>

              <TrendingUp className="w-6 h-6 text-[#10b981] flex-shrink-0" />
            </div>

            {/* Featured testimonial */}
            <div className="relative bg-gradient-to-br from-[#B8783D]/15 to-[#0a8f9e]/10 border border-[#B8783D]/30 rounded-2xl p-5 lg:p-6">
              <Sparkles className="absolute top-4 right-4 w-4 h-4 text-[#d4a574] opacity-60" />
              <p className="text-[14.5px] lg:text-[15.5px] text-white/95 italic leading-[1.55] mb-3.5 font-medium">
                &ldquo;Em 90 dias triplicamos o ticket medio de dermatocosmeticos. O Clube nao e curso, e <strong className="not-italic font-bold text-[#d4a574]">portfolio de venda pronto</strong>.&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#B8783D]/30 border border-[#B8783D]/50 flex items-center justify-center">
                  <span className="font-serif text-[11px] text-[#d4a574] font-bold">LS</span>
                </div>
                <div className="text-[11.5px]">
                  <div className="font-bold text-white">Lucia Souza</div>
                  <div className="text-white/55">Farmacia Magistral · Sao Paulo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
