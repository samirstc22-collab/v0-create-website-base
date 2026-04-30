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
      good: "Resultados validados pelo balcao em +500 farmacias atendidas",
    },
    {
      bad: "Bases instaveis que comprometem eficacia",
      good: "Veiculos selecionados por estabilidade comprovada",
    },
  ]

  return (
    <section className="relative bg-[#f8fafc] py-16 lg:py-20 px-6 lg:px-10 overflow-hidden">
      {/* Subtle pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.04) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />
      {/* Brand glows */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 90% 0%, rgba(184,120,61,0.07) 0%, transparent 60%), radial-gradient(ellipse 800px 400px at 10% 100%, rgba(12,35,64,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Header — denser */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#fef3c7] border border-[#fcd34d]/40 rounded-full px-5 py-2 mb-5 shadow-[0_4px_16px_rgba(252,211,77,0.2)] motion-safe:animate-[fadeIn_0.6s_ease-out]">
            <AlertTriangle className="w-[18px] h-[18px] text-[#d97706]" strokeWidth={2.5} />
            <span className="text-[12px] tracking-[2.5px] uppercase font-bold text-[#92400e]">
              Diagnostico do mercado magistral
            </span>
          </div>

          <h2 className="font-serif text-[clamp(34px,5vw,60px)] text-[#0C2340] leading-[1.0] tracking-[-0.03em] mb-5 max-w-[920px] mx-auto">
            Ativos bons{" "}
            <span className="relative inline-block">
              <span className="line-through decoration-[#dc2626]/60 decoration-[3px]">nao bastam</span>
            </span>{" "}
            sem{" "}
            <em className="italic text-[#B8783D]">narrativa tecnica que converte</em>.
          </h2>

          <p className="text-[18px] md:text-[20px] text-[#334155] leading-[1.5] max-w-[720px] mx-auto font-medium">
            Combino <strong className="text-[#0C2340] font-bold">ciencia translacional</strong>,{" "}
            <strong className="text-[#0C2340] font-bold">formulacao magistral</strong> e{" "}
            <strong className="text-[#0C2340] font-bold">raciocinio de mercado</strong> em solucoes que nao saem prontas de catalogo.
          </p>
        </div>

        {/* Comparison grid — denser, animated, higher contrast */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-12">
          {/* BAD column */}
          <div className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(15,23,42,0.10)]">
            <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-7 py-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-300 flex items-center justify-center">
                  <X className="w-5 h-5 text-slate-700" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-slate-500 leading-none mb-1">
                    Antes
                  </div>
                  <span className="font-serif text-slate-700 text-[22px] leading-none tracking-[-0.02em]">
                    Abordagem comum
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 lg:p-6 space-y-2.5">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="group/row flex items-start gap-3 px-5 py-4 rounded-2xl bg-slate-50/80 transition-all duration-300 hover:bg-slate-100 motion-safe:animate-[fadeInLeft_0.5s_ease-out_both]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <X className="w-[18px] h-[18px] text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-[15px] lg:text-[16px] leading-[1.45] text-slate-600 font-medium line-through decoration-slate-300 decoration-1">
                    {p.bad}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GOOD column */}
          <div className="relative bg-white rounded-3xl border-2 border-[#B8783D]/30 overflow-hidden shadow-[0_12px_40px_rgba(184,120,61,0.15)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(184,120,61,0.25)] hover:-translate-y-1">
            {/* Featured badge */}
            <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 bg-[#B8783D] text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase shadow-[0_4px_12px_rgba(184,120,61,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Recomendado
            </div>
            <div className="bg-gradient-to-r from-[#0C2340] to-[#0a1a33] px-7 py-5 border-b border-[#0C2340]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#B8783D] flex items-center justify-center shadow-[0_4px_12px_rgba(184,120,61,0.5)]">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#d4a574] leading-none mb-1">
                    Depois
                  </div>
                  <span className="font-serif text-white text-[22px] leading-none tracking-[-0.02em]">
                    Metodo ST Farma
                  </span>
                </div>
              </div>
            </div>
            <div className="p-5 lg:p-6 space-y-2.5">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-[#B8783D]/[0.06] border border-[#B8783D]/20 transition-all duration-300 hover:bg-[#B8783D]/[0.10] hover:border-[#B8783D]/40 motion-safe:animate-[fadeInRight_0.5s_ease-out_both]"
                  style={{ animationDelay: `${i * 90 + 200}ms` }}
                >
                  <Check className="w-[18px] h-[18px] text-[#B8783D] mt-0.5 flex-shrink-0" strokeWidth={3} />
                  <span className="text-[15px] lg:text-[16px] leading-[1.45] text-[#0C2340] font-bold">
                    {p.good}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image + CTA Section — compressed, more dynamic */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-center">
          {/* Images Grid */}
          <div className="relative space-y-4">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#0C2340]/12 via-transparent to-[#B8783D]/12 blur-2xl pointer-events-none" />

            {/* Training workshop image */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-white shadow-[0_20px_60px_-15px_rgba(12,35,64,0.20)] group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-04-21%20a%CC%80%28s%29%2020.04.24-GqBE7P7pok9Hw3CPH6YzshQ2B1v35n.png"
                alt="Workshop de peelings quimicos com pratica supervisionada"
                width={600}
                height={400}
                className="w-full h-[260px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/85 via-[#0C2340]/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur rounded-xl px-4 py-3.5 shadow-lg border border-white/50">
                  <div className="text-[10px] uppercase tracking-[2.5px] font-bold text-[#B8783D] mb-1.5">
                    Treinamento pratico
                  </div>
                  <div className="text-[16px] font-bold text-[#0C2340] leading-tight tracking-[-0.01em]">
                    Pratica supervisionada real, nao slide.
                  </div>
                </div>
              </div>
            </div>

            {/* Product development showcase */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl border-2 border-white shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1700403712110-gEYnsv8nrv3qDjAzTOhj9LXhnJ6YEQ.jpeg"
                  alt="Treinamento tecnico em formulacao"
                  width={300}
                  height={200}
                  className="w-full h-[110px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/60 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase tracking-[1.5px]">
                  Bancada
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border-2 border-white shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1693088095952-SOf45sTK8EQFDr4RtYf8yo4CsQqVis.jpeg"
                  alt="Portfolio de produtos desenvolvidos"
                  width={300}
                  height={200}
                  className="w-full h-[110px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/60 to-transparent" />
                <div className="absolute bottom-2 left-3 text-[10px] font-bold text-white uppercase tracking-[1.5px]">
                  Portfolio
                </div>
              </div>
            </div>
          </div>

          {/* CTA Content — bigger, bolder */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#B8783D]/10 border border-[#B8783D]/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8783D] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#B8783D]">
                Proximo passo
              </span>
            </div>
            <h3 className="font-serif text-[clamp(28px,3.6vw,44px)] text-[#0C2340] leading-[1.0] tracking-[-0.025em] mb-4">
              Pare de competir por preco.{" "}
              <em className="italic text-[#B8783D]">Comece a competir por ciencia.</em>
            </h3>
            <p className="text-[16px] lg:text-[17px] text-[#334155] mb-6 leading-[1.55] font-medium">
              Em <strong className="text-[#0C2340] font-bold">30 minutos</strong> identificamos os pontos criticos da sua operacao e mostramos onde a ciencia aplicada gera{" "}
              <strong className="text-[#0C2340] font-bold">maior impacto comercial</strong>.
            </p>

            {/* Mini guarantees row */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7 justify-center lg:justify-start">
              {[
                "Diagnostico gratuito",
                "Sem comercial agressivo",
                "Plano tecnico em maos",
              ].map((g) => (
                <div key={g} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10b981]" strokeWidth={3} />
                  <span className="text-[13.5px] font-semibold text-[#0C2340]">{g}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/consultoria"
                className="group inline-flex items-center justify-center gap-3 bg-[#0C2340] text-white px-7 py-[18px] rounded-xl font-bold text-[15px] tracking-wide hover:bg-[#0a1a33] transition-all shadow-[0_8px_30px_rgba(12,35,64,0.25)] hover:shadow-[0_14px_40px_rgba(12,35,64,0.35)] hover:-translate-y-0.5"
              >
                Solicitar diagnostico do projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0C2340]/15 text-[#0C2340] px-6 py-[18px] rounded-xl font-bold text-[15px] tracking-wide hover:border-[#B8783D] hover:bg-[#B8783D]/5 hover:text-[#B8783D] transition-all"
              >
                Falar comigo
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
