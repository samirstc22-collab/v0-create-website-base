"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Beaker, Shield, Sparkles, Clock, Check } from "lucide-react"

const lhaAdvantages = [
  {
    title: "Penetracao Controlada",
    description: "Permanece no estrato corneo sem irritar camadas profundas",
    icon: Shield,
  },
  {
    title: "Concentracao Reduzida",
    description: "Eficaz em 5-10% vs 20-30% do acido salicilico tradicional",
    icon: Beaker,
  },
  {
    title: "Peeling Invisivel",
    description: "Descamacao celula a celula, mimetizando renovacao natural",
    icon: Sparkles,
  },
  {
    title: "Recuperacao Rapida",
    description: "1-3 dias vs 3-5 dias do acido salicilico convencional",
    icon: Clock,
  },
]

const protocolSteps = [
  "Preparo cutaneo com LHA (priming)",
  "Aplicacao do peeling azelaico em pasta",
  "8 horas de contato (remocao domiciliar)",
  "Creme reparador pos-peeling com ceramidas",
  "Manutencao com LHA para descamacao controlada",
]

export function PortfolioLhaPeel() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#0096B4]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#d4af37]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0096B4]/30 bg-[#0096B4]/10 px-4 py-2 text-sm text-[#0096B4] mb-6">
            <Beaker className="h-4 w-4" />
            Protocolo Integrado
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0C2340] leading-[1.1] text-balance">
            LHA La Peel:{" "}
            <em className="text-[#0096B4]">suporte farmacotecnico</em>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-[#0C2340]/70 leading-relaxed">
            O acido lipodroxila (Capryloyl Salicylic Acid) e um derivado do acido salicilico com cadeia C8 
            que oferece esfoliacao eficiente com tolerabilidade superior — ideal para preparo e manutencao 
            pos-peeling azelaico.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Technical info */}
          <div>
            <h3 className="font-serif text-2xl text-[#0C2340] mb-6">
              Mecanismo de Acao Diferenciado
            </h3>
            <p className="text-[#0C2340]/70 leading-relaxed mb-8">
              A natureza lipofilica do C8-LHA e sua penetracao lenta conferem um efeito esfoliante 
              eficiente em baixas concentracoes, com propriedades antimicrobianas, anti-inflamatorias 
              e anticomedogenicas. Promove descamacao fisiologica — particularmente adequado para 
              peles sensiveis e protocolos seriados.
            </p>

            {/* Advantages grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {lhaAdvantages.map((adv) => (
                <div
                  key={adv.title}
                  className="bg-[#f8f7f5] rounded-xl p-5 border border-[#0C2340]/5"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#0096B4]/10 flex items-center justify-center">
                      <adv.icon className="h-5 w-5 text-[#0096B4]" />
                    </div>
                    <h4 className="font-semibold text-[#0C2340] text-sm">{adv.title}</h4>
                  </div>
                  <p className="text-sm text-[#0C2340]/60 leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>

            {/* Comparison table */}
            <div className="bg-[#0C2340] rounded-2xl p-6 text-white">
              <h4 className="font-semibold mb-4">LHA vs Acido Salicilico</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Concentracao eficaz</span>
                  <span><span className="text-[#0096B4]">5-10%</span> vs 20-30%</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Penetracao</span>
                  <span><span className="text-[#0096B4]">Estrato corneo</span> vs profunda</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-white/60">Recuperacao</span>
                  <span><span className="text-[#0096B4]">1-3 dias</span> vs 3-5 dias</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Tolerabilidade</span>
                  <span className="text-[#0096B4]">Superior (peles sensiveis)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Protocol and images */}
          <div>
            {/* Congress presentation image */}
            <div className="relative rounded-3xl overflow-hidden border border-[#0C2340]/10 shadow-xl mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4778-R8YSSSROeHasGd91VvoHUUudskA1v9.jpeg"
                alt="Prof. Samir Tannuri apresentando formula de serum hidratante com madecassosides em congresso"
                width={800}
                height={1000}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0C2340] to-transparent p-6">
                <div className="text-xs text-[#0096B4] font-medium mb-1">Congresso Magistral</div>
                <div className="text-white font-medium">Serum Hidratante Hyali B5 + Madecassosides</div>
                <p className="text-white/70 text-sm mt-1">
                  Formulacao de suporte pos-peeling com ceramidas, pantenol e acido hialuronico
                </p>
              </div>
            </div>

            {/* Protocol steps */}
            <div className="bg-gradient-to-br from-[#0096B4]/10 to-[#d4af37]/5 rounded-2xl p-6 border border-[#0096B4]/20">
              <h4 className="font-semibold text-[#0C2340] mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#d4af37]" />
                Protocolo LHALA Peel Integrado
              </h4>
              <div className="space-y-3">
                {protocolSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0096B4] flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-[#0C2340]/80 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stage presentation images */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-3xl overflow-hidden border border-[#0C2340]/10 shadow-lg group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4731-F3BZhbe0KbBVRgANn0HnrQHGcheeDs.jpeg"
              alt="Palco do Clinic Day com apresentacao Primeiro Peeling Azelaico em Pasta do Mundo"
              width={1000}
              height={600}
              className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block bg-[#d4af37] text-[#0C2340] text-xs font-bold px-3 py-1 rounded mb-2">
                CLINIC DAY 2024
              </div>
              <h4 className="text-white font-serif text-xl">Primeiro Peeling Azelaico em Pasta do Mundo</h4>
              <p className="text-white/70 text-sm mt-1">Apresentacao da inovacao farmacotecnica inedita</p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[#0C2340]/10 shadow-lg group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4738-B1FIaPy8hfxTIEXePZlss4SG9jrV4K.jpeg"
              alt="Prof. Samir Tannuri no palco do Clinic Day apresentando avaliacao de resultados em Visia"
              width={1000}
              height={1200}
              className="w-full h-[320px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block bg-[#0096B4] text-white text-xs font-bold px-3 py-1 rounded mb-2">
                PEELING 50% PASTA
              </div>
              <h4 className="text-white font-serif text-xl">Avaliacao de Resultados em Visia</h4>
              <p className="text-white/70 text-sm mt-1">Avancos que mudam a forma como tratamos a pele</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contato?assunto=protocolo-lha-peel"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#0096B4] to-[#007a94] px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Solicitar Protocolo Completo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-sm text-[#0C2340]/50">
            Inclui formulas magistrais, dosies tecnicos e orientacoes de aplicacao clinica
          </p>
        </div>
      </div>
    </section>
  )
}
