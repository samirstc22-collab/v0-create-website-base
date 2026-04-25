"use client"

import Image from "next/image"
import { MapPin, Users, Video, Building2, ArrowRight, Globe, Wifi, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function MissoesTraining() {
  const presencialTrainings = [
    {
      country: "Bolivia",
      flag: "BO",
      type: "Presencial",
      description: "Treinamentos in-loco para grupos de farmacias magistrais. Formacao completa em formulacao, protocolos clinicos e gestao de ativos.",
      highlights: ["Grupos de farmacias", "Formacao intensiva", "Certificacao"],
      status: "Agendando 2025",
      featured: true,
    },
  ]

  const onlineTrainings = [
    { country: "Argentina", flag: "AR" },
    { country: "Honduras", flag: "HN" },
    { country: "Paraguay", flag: "PY" },
    { country: "Portugal", flag: "PT" },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-[#fafbfc] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-[#2dd4bf]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#2dd4bf]">
              Treinamentos Internacionais
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Formacao que atravessa{" "}
            <span className="text-[#B8783D]">fronteiras</span>
          </h2>
          <p className="text-lg text-[#64748b] leading-relaxed max-w-2xl mx-auto">
            Levo conhecimento tecnico de ponta para farmacias magistrais em toda a America Latina e Europa,
            tanto presencialmente quanto via treinamentos online ao vivo.
          </p>
        </div>

        {/* Teaching Photo Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-[#0C2340]/10 shadow-[0_20px_60px_rgba(12,35,64,0.1)]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3997-IpBgS7uAOmRCbCItrdJTrLCd4mT0ID.jpeg"
            alt="Prof. Samir Tannuri ministrando treinamento internacional para grupo de farmaceuticos"
            width={1400}
            height={600}
            className="w-full h-[400px] object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/90 via-[#0C2340]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#B8783D] mb-3">
                  Educacao Continuada Internacional
                </div>
                <h3 className="font-serif text-2xl md:text-4xl text-white leading-tight max-w-xl">
                  Formando farmaceuticos lideres em inovacao magistral
                </h3>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3 text-center">
                  <div className="font-serif text-2xl text-white">5+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Paises</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3 text-center">
                  <div className="font-serif text-2xl text-white">500+</div>
                  <div className="text-xs text-white/60 uppercase tracking-wider">Treinados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Presencial - Bolivia */}
          <div className="bg-white rounded-3xl border border-[#0C2340]/10 overflow-hidden shadow-[0_8px_32px_rgba(12,35,64,0.06)]">
            <div className="bg-gradient-to-br from-[#007934] via-[#F9E300]/20 to-[#D52B1E] p-8 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[2px] text-white/80 mb-1">
                    Treinamento Presencial
                  </div>
                  <h3 className="font-serif text-2xl text-white flex items-center gap-3">
                    Bolivia
                    <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">
                      BO
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-[#64748b] leading-relaxed mb-6">
                Treinamentos in-loco para <span className="font-semibold text-[#0C2340]">grupos de farmacias magistrais</span>. 
                Formacao completa em formulacao dermatologica, protocolos clinicos e gestao de ativos de alta performance.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {["Grupos de farmacias", "Formacao intensiva", "Hands-on", "Certificacao"].map((tag, i) => (
                  <span key={i} className="bg-[#007934]/10 text-[#007934] text-xs font-semibold py-1.5 px-3 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#0C2340]/8">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#B8783D]" />
                  <span className="text-sm font-semibold text-[#B8783D]">Agendando 2025</span>
                </div>
                <a
                  href="https://wa.me/5511981403000?text=Olá! Tenho interesse no treinamento presencial na Bolivia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0C2340] text-sm font-bold hover:text-[#B8783D] hover:gap-3 transition-all"
                >
                  Agendar treinamento
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Online Trainings */}
          <div className="bg-white rounded-3xl border border-[#0C2340]/10 overflow-hidden shadow-[0_8px_32px_rgba(12,35,64,0.06)]">
            <div className="bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0a1628] p-8 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,120,61,0.15),transparent_50%)]" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                  <Wifi className="w-7 h-7 text-[#B8783D]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[2px] text-white/60 mb-1">
                    Treinamento Online
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    Remoto Internacional
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-[#64748b] leading-relaxed mb-6">
                Sessoes ao vivo via videoconferencia para farmacias e grupos em toda America Latina e Europa. 
                <span className="font-semibold text-[#0C2340]"> Formato mais acessivel, sem perder a profundidade tecnica</span> — 
                ideal para impulsionar vendas de ativos de alta performance.
              </p>

              {/* Countries Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {onlineTrainings.map((training, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#0C2340]/5 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0C2340]/10 to-[#B8783D]/10 flex items-center justify-center">
                      <span className="font-serif text-sm text-[#0C2340] font-semibold">{training.flag}</span>
                    </div>
                    <span className="text-sm font-medium text-[#0C2340]">{training.country}</span>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="bg-[#B8783D]/5 border border-[#B8783D]/20 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-5 h-5 text-[#B8783D] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-[#0C2340] font-semibold mb-1">
                      Impulsiona vendas de produtos
                    </p>
                    <p className="text-xs text-[#64748b] leading-relaxed">
                      Treinamentos focados em capacitar equipes para vender ativos de alta performance, 
                      aumentando o ticket medio e fidelizando prescritores.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#0C2340]/8">
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#2dd4bf]" />
                  <span className="text-sm text-[#64748b]">Possibilidade remota</span>
                </div>
                <a
                  href="https://wa.me/5511981403000?text=Olá! Tenho interesse em treinamento online internacional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0C2340] text-sm font-bold hover:text-[#B8783D] hover:gap-3 transition-all"
                >
                  Solicitar proposta
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0C2340] via-[#1a3a5c] to-[#0C2340] rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,120,61,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Leve a formacao de elite para sua equipe
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-6">
              Treinamentos personalizados para grupos de farmacias, distribuidores ou redes. 
              Presencial ou online, adapto o conteudo as necessidades do seu mercado.
            </p>
            <Link
              href="/contato?assunto=Treinamento%20Internacional"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(184,120,61,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(184,120,61,0.45)] transition-all"
            >
              Solicitar Treinamento
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
