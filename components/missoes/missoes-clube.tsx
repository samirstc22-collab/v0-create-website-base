"use client"

import { GraduationCap, FileText, Video, Users, Star, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

export function MissoesClube() {
  const clubeFeatures = [
    {
      icon: FileText,
      title: "60+ Formularios Tecnicos",
      description: "Bases, ativos, protocolos e fichas tecnicas prontas para uso em sua farmacia ou industria.",
    },
    {
      icon: Video,
      title: "Aulas em Video",
      description: "Conteudo gravado com explicacoes detalhadas sobre cada formulacao e processo.",
    },
    {
      icon: GraduationCap,
      title: "Cursos Completos",
      description: "Formacao estruturada em manipulacao magistral, cosmetologia e gestao.",
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Grupo exclusivo para troca de experiencias, duvidas e networking profissional.",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0a1628] relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-[#B8783D]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
                Clube de Formulas
              </span>
            </div>

            <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-white leading-[1.1] mb-6">
              Seu acesso a{" "}
              <span className="text-[#B8783D]">formacao</span>{" "}
              tecnica de elite
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              O Clube de Formulas e a plataforma educacional que complementa as missoes
              internacionais. Formularios tecnicos, cursos completos e uma comunidade
              ativa de profissionais magistrais.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: "60+", label: "Formularios" },
                { value: "1.000+", label: "Alunos" },
                { value: "17", label: "Estados" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-3xl text-[#B8783D] mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(184,120,61,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(184,120,61,0.45)] transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                Acessar o Clube
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/loja"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Ver Formularios
              </Link>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {clubeFeatures.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#B8783D]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8783D]/15 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-[#B8783D]" />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Testimonial */}
        <div className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/80 italic leading-relaxed mb-6">
            "A missao de Paris mudou minha visao sobre ativos. Voltei com conhecimento que
            levaria anos para adquirir sozinha. O Clube de Formulas mantem esse aprendizado vivo."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#B8783D]/20 flex items-center justify-center">
              <span className="font-serif text-lg text-[#B8783D]">LS</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">Lucia S.</div>
              <div className="text-xs text-white/50">Proprietaria · Farmacia Manipulacao SP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
