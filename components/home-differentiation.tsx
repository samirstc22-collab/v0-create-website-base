import Link from "next/link"
import Image from "next/image"
import { ArrowRight, X, Check, AlertTriangle } from "lucide-react"

export function HomeDifferentiation() {
  const problems = [
    {
      bad: "Formulas copiadas de apostilas desatualizadas",
      good: "Protocolos proprios validados em bancada industrial",
    },
    {
      bad: "Ativos incompativeis por falta de conhecimento tecnico",
      good: "Compatibilidade testada e documentada tecnicamente",
    },
    {
      bad: "Claims sem lastro — promessas vazias ao prescritor",
      good: "Resultados com DOI e referencia peer-reviewed",
    },
    {
      bad: "Bases instaveis que comprometem eficacia",
      good: "Veiculos selecionados por estabilidade comprovada",
    },
  ]

  return (
    <section className="relative bg-[#f8fafc] py-20 px-6 lg:px-10 overflow-hidden">
      {/* Subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.04) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#fef3c7] border border-[#fcd34d]/30 rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="w-4 h-4 text-[#d97706]" />
            <span className="text-[11px] tracking-[2px] uppercase font-bold text-[#92400e]">
              Diagnostico do mercado magistral
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.1] tracking-tight mb-6 max-w-[800px] mx-auto">
            Sua marca tem ativos bons, mas{" "}
            <em className="italic text-[#dc2626]">nao tem narrativa tecnica que converta?</em>
          </h2>

          <p className="text-lg text-[#475569] leading-[1.7] max-w-[650px] mx-auto">
            Combino ciencia translacional, formulacao magistral e raciocinio de mercado para criar solucoes dermatologicas que nao nascem prontas em catalogo.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* BAD column */}
          <div className="bg-white rounded-2xl border border-[#fecaca]/50 overflow-hidden">
            <div className="bg-[#fef2f2] px-6 py-4 border-b border-[#fecaca]/30">
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-[#dc2626]" />
                <span className="font-semibold text-[#991b1b]">Abordagem comum</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-[#fef2f2]/50 rounded-xl border border-[#fecaca]/20"
                >
                  <X className="w-4 h-4 text-[#dc2626] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#7f1d1d]">{p.bad}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GOOD column */}
          <div className="bg-white rounded-2xl border border-[#bbf7d0]/50 overflow-hidden">
            <div className="bg-[#f0fdf4] px-6 py-4 border-b border-[#bbf7d0]/30">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#16a34a]" />
                <span className="font-semibold text-[#166534]">Metodo ST Farma</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-[#f0fdf4]/50 rounded-xl border border-[#bbf7d0]/20"
                >
                  <Check className="w-4 h-4 text-[#16a34a] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#166534]">{p.good}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image + CTA Section */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          {/* Images Grid */}
          <div className="relative space-y-4">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#0C2340]/10 via-transparent to-[#B8783D]/10 blur-xl pointer-events-none" />
            
            {/* Training workshop image */}
            <div className="relative overflow-hidden rounded-2xl border border-[#e5e7eb] shadow-[0_20px_60px_-15px_rgba(12,35,64,0.15)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80%28s%29%2020.04.24-GqBE7P7pok9Hw3CPH6YzshQ2B1v35n.png"
                alt="Workshop de peelings quimicos com pratica supervisionada"
                width={600}
                height={400}
                className="w-full h-[280px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-[10px] uppercase tracking-[2px] font-bold text-[#B8783D] mb-1">
                    Treinamento pratico
                  </div>
                  <div className="text-sm font-semibold text-[#0C2340]">
                    Formacao com pratica supervisionada real
                  </div>
                </div>
              </div>
            </div>

            {/* Product development showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl border border-[#e5e7eb] shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1700403712110-gEYnsv8nrv3qDjAzTOhj9LXhnJ6YEQ.jpeg"
                  alt="Treinamento tecnico em formulacao"
                  width={300}
                  height={200}
                  className="w-full h-[120px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-[#e5e7eb] shadow-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg"
                  alt="Portfolio de produtos desenvolvidos"
                  width={300}
                  height={200}
                  className="w-full h-[120px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* CTA Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase text-[#B8783D] mb-3">
              Proximo passo
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#0C2340] leading-[1.2] mb-4">
              Quer transformar seu portfolio em <em className="italic text-[#B8783D]">vantagem competitiva real?</em>
            </h3>
            <p className="text-[#475569] mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Em uma conversa de 30 minutos identificamos os pontos criticos da sua operacao
              e mostramos onde a ciencia aplicada gera maior impacto comercial.
            </p>
            <Link
              href="/consultoria"
              className="group inline-flex items-center gap-2 bg-[#0C2340] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide hover:bg-[#0a1a33] transition-all shadow-[0_8px_30px_rgba(12,35,64,0.2)]"
            >
              Solicitar diagnostico do projeto
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
