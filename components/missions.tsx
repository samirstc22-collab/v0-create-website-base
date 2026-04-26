"use client"

import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Calendar,
  ArrowRight,
  Globe2,
  Users,
  Plane,
  GraduationCap,
  Sparkles,
  Award,
  Languages,
} from "lucide-react"
import { MoleculeIllustration, HexagonPattern, AtomIllustration, DNAHelix } from "./illustrations"

type Mission = {
  flag: string
  flagEmoji?: string
  year: string
  location: string
  title: string
  desc: string
  tags: string[]
  photo: string
  alt: string
  caption: string
  featured?: boolean
  online?: boolean
  accent: string
  gradient: string
}

export function Missions() {
  const missions: Mission[] = [
    {
      flag: "FR",
      year: "2025",
      location: "Paris, Franca",
      title: "In-Cosmetics Global 2025",
      desc:
        "Imersao tecnica na maior feira de ingredientes cosmeticos do mundo. Acesso direto a Lucas Meyer, Sederma, Gattefosse e biofermentacao francesa.",
      tags: ["Peptideos", "Biofermentacao", "Lucas Meyer"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24da41c1-6aed-4c98-a405-36a49a556cd7-yTaMOtFNI9o8wCxLqXDSxSiWJeNl2o.jpeg",
      alt: "Grupo de alunos na sede Lucas Meyer Cosmetics em Paris 2025",
      caption: "Lucas Meyer HQ · Campus Edison",
      featured: true,
      accent: "#B8783D",
      gradient: "from-[#0055A4] via-white/30 to-[#EF4135]",
    },
    {
      flag: "NL",
      year: "2024",
      location: "Amsterdam, Holanda",
      title: "Personal Care Europe",
      desc:
        "Missao focada em sustentabilidade cosmetica, upcycling de ingredientes e clean beauty europeia. Treinamento Croda + Sederma + Evonik.",
      tags: ["Sustentabilidade", "Clean Beauty", "Croda"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5807-MVrZXwAjG1TA5axkZtyIbGxca3Yufh.jpeg",
      alt: "Grupo de profissionais nos stands Evonik e DKSH no InCos Global Amsterdam 2024",
      caption: "Evonik & DKSH · InCos Amsterdam",
      accent: "#B8783D",
      gradient: "from-[#AE1C28] via-white/30 to-[#21468B]",
    },
    {
      flag: "IT",
      year: "2024",
      location: "Milao, Italia",
      title: "Cosmoprof Bologna · Milano Beauty",
      desc:
        "Missao tecnica focada em alta-perfumaria, encapsulamento de ativos e legislacao europeia. Imersao em casas italianas de fragrancia e dermocosmetica de luxo.",
      tags: ["Cosmoprof", "Alta-Perfumaria", "Encapsulamento"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg",
      alt: "Treinamento tecnico em formulacao na Italia",
      caption: "Cosmoprof Bologna · Italia",
      accent: "#0a8f9e",
      gradient: "from-[#009246] via-white/30 to-[#CE2B37]",
    },
    {
      flag: "JP",
      year: "2023",
      location: "Toquio, Japao",
      title: "J-Beauty & Water Essence",
      desc:
        "Estudo de biofermentacao japonesa, texturas water-essence e tecnicas de layering. Visitas a laboratorios Shiseido e Kose com convite oficial.",
      tags: ["J-Beauty", "Fermentacao", "Shiseido"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0009-G8wVY5Cxv5RuRPmMakVQYJHPXfaSqq.jpeg",
      alt: "Equipe completa de alunos no laboratorio durante treinamento tecnico no Japao 2023",
      caption: "Lab Hands-On · Toquio",
      accent: "#BC002D",
      gradient: "from-[#BC002D] via-white/40 to-[#BC002D]",
    },
    {
      flag: "UY",
      year: "2023",
      location: "Montevideu, Uruguai",
      title: "Treinamento Magistral Sul-Americano",
      desc:
        "Capacitacao tecnica para farmacias magistrais uruguaias com foco em peelings, dermocosmeticos e padronizacao tecnica latino-americana.",
      tags: ["Magistral", "Peelings", "America Latina"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80%28s%29%2020.04.24-GqBE7P7pok9Hw3CPH6YzshQ2B1v35n.png",
      alt: "Workshop de peelings quimicos com alunos no Uruguai",
      caption: "Workshop magistral · Montevideu",
      accent: "#0a8f9e",
      gradient: "from-[#0038A8] via-white/30 to-[#FCD116]",
    },
    {
      flag: "BO",
      year: "2022",
      location: "La Paz, Bolivia",
      title: "Treinamento Tecnico Bolivia 2022",
      desc:
        "Capacitacao internacional para profissionais bolivianos em manipulacao magistral avancada, bases dermatologicas e protocolos clinicos personalizados.",
      tags: ["Magistral", "Protocolos", "Andina"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1700403712110-gEYnsv8nrv3qDjAzTOhj9LXhnJ6YEQ.jpeg",
      alt: "Grupo de alunos em treinamento tecnico na Bolivia 2022",
      caption: "Treinamento intensivo · La Paz",
      accent: "#B8783D",
      gradient: "from-[#D52B1E] via-[#F9E300] to-[#007934]",
    },
    {
      flag: "ON",
      year: "Sempre",
      location: "Treinamento Online",
      title: "Mentoria & Cursos Live",
      desc:
        "Para quem nao pode viajar: programa online com aulas live semanais, atendimento direto comigo e acesso ao Clube de Formulas com mais de 60 protocolos.",
      tags: ["Live Semanal", "Suporte 1:1", "Clube de Formulas"],
      photo:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg",
      alt: "Treinamento online de formulacao magistral com alunos via streaming",
      caption: "Aulas live + Clube · Online",
      online: true,
      accent: "#10b981",
      gradient: "from-[#0C2340] via-[#10b981]/40 to-[#B8783D]",
    },
  ]

  const stats = [
    { value: "5", label: "Continentes" },
    { value: "7+", label: "Missoes" },
    { value: "1.000+", label: "Alunos formados" },
    { value: "12", label: "Paises" },
  ]

  return (
    <section
      id="missoes"
      className="relative py-20 lg:py-28 px-6 lg:px-10 bg-[#0C2340] overflow-hidden"
    >
      {/* Animated decorative vectors */}
      <MoleculeIllustration className="absolute top-16 right-[3%] w-40 h-40 text-[#B8783D] opacity-[0.18] motion-safe:animate-[spin_60s_linear_infinite]" />
      <HexagonPattern className="absolute bottom-20 left-[3%] w-44 h-44 text-[#0a8f9e] opacity-[0.15] motion-safe:animate-[spin_80s_linear_infinite_reverse]" />
      <AtomIllustration className="absolute top-1/3 left-[8%] w-28 h-28 text-white opacity-[0.10] motion-safe:animate-[spin_45s_linear_infinite]" />
      <DNAHelix className="absolute right-[6%] bottom-[15%] w-24 h-72 text-[#B8783D] opacity-[0.12]" />

      {/* Brand glows */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 80% 0%, rgba(184,120,61,0.18) 0%, transparent 60%), radial-gradient(ellipse 800px 500px at 10% 100%, rgba(10,143,158,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Connecting flight path SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        aria-hidden
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flightPath" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8783D" stopOpacity="0" />
            <stop offset="50%" stopColor="#B8783D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#B8783D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 200 Q 400 100 800 200 T 1600 200"
          stroke="url(#flightPath)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          fill="none"
          className="motion-safe:animate-[dash_30s_linear_infinite]"
        />
      </svg>

      <div className="relative max-w-[1320px] mx-auto">
        {/* HEADER — bigger, more striking */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 bg-[#B8783D]/15 border border-[#B8783D]/40 rounded-full px-5 py-2.5 mb-7 shadow-[0_8px_30px_rgba(184,120,61,0.25)]">
            <Plane className="w-[18px] h-[18px] text-[#d4a574] motion-safe:animate-[float_3s_ease-in-out_infinite]" />
            <span className="text-[12px] tracking-[3px] uppercase font-bold text-[#d4a574]">
              Missoes Internacionais
            </span>
          </div>

          <h2 className="font-serif font-normal text-[clamp(40px,6vw,80px)] text-white mb-7 leading-[1.0] tracking-[-0.03em] max-w-[1100px] mx-auto">
            Pesquisa{" "}
            <em className="italic text-[#d4a574]">alem das fronteiras</em>
            <span className="text-[#B8783D]">.</span>
          </h2>

          <p className="text-[18px] lg:text-[21px] text-white/85 max-w-[820px] mx-auto leading-[1.55] font-medium mb-10">
            Imersoes tecnicas lideradas <strong className="text-white font-bold">pessoalmente</strong> em{" "}
            <strong className="text-white font-bold">cinco continentes</strong> — acesso privilegiado a industrias de ingredientes, laboratorios de ponta e tendencias globais.{" "}
            <span className="text-[#d4a574]">Voce nao vai a uma feira: voce vai com quem abre as portas.</span>
          </p>

          {/* Quick stats strip */}
          <div className="inline-flex items-stretch divide-x divide-white/15 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="px-5 lg:px-7 py-4 text-center min-w-[110px]"
              >
                <div className="font-serif text-[28px] lg:text-[36px] text-[#d4a574] leading-none tracking-[-0.02em] mb-1.5">
                  {s.value}
                </div>
                <div className="text-[10px] lg:text-[11px] uppercase tracking-[2px] text-white/60 font-bold whitespace-nowrap">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MISSIONS GRID — 3 cols → 2 cols → 1 col, denser */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {missions.map((m, i) => (
            <Link
              key={i}
              href="/missoes"
              className="group relative bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#B8783D]/50 transition-all duration-500 flex flex-col motion-safe:animate-[fadeInUp_0.6s_ease-out_both] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Photo header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Flag gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-30 mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340] via-[#0C2340]/30 to-transparent" />

                {/* Flag badge top-left */}
                <div
                  className={`absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center font-serif text-[22px] tracking-[2px] text-white shadow-[0_8px_24px_rgba(0,0,0,0.4)] bg-gradient-to-br ${m.gradient} border-2 border-white/30`}
                >
                  {m.flag}
                </div>

                {/* Year badge top-right */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-[11px] text-white font-bold tracking-[1px]">
                  {m.online ? (
                    <Languages className="w-3 h-3 text-[#10b981]" />
                  ) : (
                    <Calendar className="w-3 h-3 text-[#d4a574]" />
                  )}
                  {m.year}
                </div>

                {/* Featured / online floating chip */}
                {m.featured && (
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 bg-[#B8783D] text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase shadow-[0_4px_16px_rgba(184,120,61,0.5)]">
                    <Sparkles className="w-3 h-3" />
                    Proxima missao
                  </div>
                )}
                {m.online && (
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 bg-[#10b981] text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase shadow-[0_4px_16px_rgba(16,185,129,0.5)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Sem fronteiras
                  </div>
                )}

                {/* Photo caption ribbon */}
                <div className="absolute bottom-3 left-4 right-32 text-[10px] uppercase tracking-[1.5px] text-white/85 font-bold">
                  {m.caption}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-1.5 text-[12px] text-white/70 mb-2.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5" style={{ color: m.accent }} />
                  {m.location}
                </div>

                <h3 className="font-serif text-[22px] lg:text-[24px] text-white mb-3 leading-[1.15] tracking-[-0.02em] group-hover:text-[#d4a574] transition-colors duration-300">
                  {m.title}
                </h3>

                <p className="text-[14.5px] text-white/70 leading-[1.55] mb-5 flex-1">
                  {m.desc}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] font-bold py-1 px-2.5 rounded-md tracking-[0.5px]"
                      style={{
                        color: m.accent,
                        backgroundColor: `${m.accent}15`,
                        border: `1px solid ${m.accent}35`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-wide group-hover:gap-2.5 transition-all"
                    style={{ color: m.accent }}
                  >
                    Ver registros
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="flex items-center gap-1 text-[10.5px] text-white/40 font-bold uppercase tracking-[1.5px]">
                    <Users className="w-3 h-3" />
                    Com alunos
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="relative bg-gradient-to-r from-[#B8783D] via-[#a66a32] to-[#8a5729] rounded-3xl p-8 lg:p-10 overflow-hidden shadow-[0_20px_60px_rgba(184,120,61,0.3)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />
          <Globe2
            aria-hidden
            className="absolute -right-12 -bottom-12 w-72 h-72 text-white/10"
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-4">
                <Award className="w-4 h-4 text-white" />
                <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-white">
                  Proxima imersao confirmada
                </span>
              </div>
              <h3 className="font-serif text-[clamp(26px,3.5vw,42px)] text-white leading-[1.1] tracking-[-0.025em] mb-3">
                Entre na lista da{" "}
                <em className="italic">In-Cosmetics 2026</em>{" "}
                — vagas limitadas.
              </h3>
              <p className="text-[15.5px] lg:text-[17px] text-white/90 leading-[1.55] max-w-[640px] font-medium">
                Voce viaja, estuda e volta com formulas testadas, contatos com fornecedores globais e os ativos que vao chegar ao Brasil daqui a dois anos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/missoes"
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#0C2340] px-7 py-4 rounded-xl font-bold text-[14px] tracking-wide hover:bg-[#0C2340] hover:text-white transition-all shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              >
                <GraduationCap className="w-4 h-4" />
                Ver todas as missoes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/5511981403000?text=Quero%20saber%20sobre%20a%20proxima%20missao%20internacional"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-7 py-4 rounded-xl font-bold text-[14px] tracking-wide hover:bg-white/10 hover:border-white transition-all"
              >
                Falar pelo WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -300; }
        }
      `}</style>
    </section>
  )
}
