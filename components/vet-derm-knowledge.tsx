"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Beaker, Award, Users, CheckCircle2, GraduationCap, Stethoscope } from "lucide-react"

const vetDermProducts = [
  { name: "Shampoo Dermatologico Ceramidas", indication: "Dermatite atopica canina", active: "Ceramidas + Fitosfingosina" },
  { name: "Mousse Antifungico", indication: "Malassezia em caes e gatos", active: "Cetoconazol 2% + Clorexidina" },
  { name: "Spray Cicatrizante", indication: "Feridas pos-cirurgicas", active: "Alantoina + Dexpantenol + Prata coloidal" },
  { name: "Locao Otologica", indication: "Otite externa", active: "Tris-EDTA + Clorexidina 0.15%" },
  { name: "Serum Seborreia", indication: "Seborreia oleosa", active: "Acido salicilico + Enxofre coloidal" },
  { name: "Hidratante Atopico", indication: "Pele ressecada e sensivel", active: "Aveia coloidal + Ureia 5%" },
  { name: "Shampoo Ectoparasiticida", indication: "Demodiciose", active: "Permetrina + Fipronil" },
  { name: "Pomada Piodermite", indication: "Infeccoes bacterianas cutaneas", active: "Mupirocina 2% + Fusidato" },
  { name: "Solucao Quelante", indication: "Preparo auricular", active: "Tris-EDTA tamponado" },
  { name: "Condicionador Restaurador", indication: "Pelagem danificada", active: "Queratina hidrolisada + Silicones" },
  { name: "Gel Antiacneico Felino", indication: "Acne felina", active: "Peroxido de benzoila 2.5%" },
  { name: "Emulsao Despigmentante", indication: "Hiperpigmentacao nasal", active: "Hidroxiacidos + Vitamina C" },
]

const trainingFeatures = [
  {
    icon: GraduationCap,
    title: "Cursos e Congressos",
    description: "Aulas presenciais em eventos nacionais e internacionais para distribuidores magistrais e veterinarios",
  },
  {
    icon: Beaker,
    title: "MBAs e Pos-Graduacao",
    description: "Modulos especializados em formulacao dermatologica e cosmetica veterinaria em instituicoes de ensino",
  },
  {
    icon: Users,
    title: "Treinamentos In Loco",
    description: "Capacitacao pratica diretamente nas farmacias e distribuidores, com foco em hands-on",
  },
  {
    icon: Stethoscope,
    title: "Consultoria Clinica",
    description: "Suporte tecnico para prescritores veterinarios no desenvolvimento de protocolos personalizados",
  },
]

export function VetDermKnowledge() {
  return (
    <section className="relative bg-gradient-to-b from-[#0C2340] to-[#0a1a33] py-24 px-6 lg:px-10 overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#B8783D]/20 backdrop-blur border border-[#B8783D]/30 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-[#B8783D]" />
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#B8783D]">
              Formacao Especializada
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4">
            Dermatologia e Cosmetica{" "}
            <span className="text-[#2dd4bf]">Veterinaria</span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Aulas presenciais e praticas in loco em cursos, congressos e MBAs, focadas no desenvolvimento 
            de formulas dermatologicas para distribuidores magistrais e veterinarios.
          </p>
        </div>

        {/* Training features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trainingFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#B8783D]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#B8783D] to-[#a66a32] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Products showcase */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#B8783D]/20 to-[#2dd4bf]/10 border-b border-white/10 px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-[#B8783D]" />
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#B8783D]">
                    Portfolio Veterinario
                  </span>
                </div>
                <h3 className="text-white font-serif text-2xl">
                  +10 Produtos Especializados
                </h3>
              </div>
              <div className="text-right">
                <div className="text-white/60 text-sm">Desenvolvidos para</div>
                <div className="text-white font-semibold">Caes, Gatos e Equinos</div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vetDermProducts.map((product, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2dd4bf]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#2dd4bf]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{product.name}</h4>
                    <p className="text-white/50 text-xs mb-1">{product.indication}</p>
                    <p className="text-[#B8783D] text-xs font-medium">{product.active}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-[#0C2340] to-[#0a1a33] border-t border-white/10 px-8 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8783D] to-[#a66a32] border-2 border-[#0C2340] flex items-center justify-center"
                    >
                      <Stethoscope className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-medium">Oportunidades de Crescimento Profissional</div>
                  <div className="text-white/60 text-sm">
                    Formacao hands-on para veterinarios e farmaceuticos
                  </div>
                </div>
              </div>
              <Link
                href="/contato?assunto=Formacao%20Veterinaria"
                className="group inline-flex items-center gap-2 bg-[#B8783D] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#a66a32] transition-all shadow-[0_8px_20px_rgba(184,120,61,0.3)]"
              >
                Solicitar Treinamento
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Impact statement */}
        <div className="mt-12 text-center">
          <p className="text-xl md:text-2xl text-white/80 font-serif italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;Formacao pratica que transforma conhecimento em resultados clinicos — 
            preparando profissionais para liderar o mercado de dermatologia veterinaria.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
