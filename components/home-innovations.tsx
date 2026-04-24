import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Beaker, Sparkles, Microscope, FileText } from "lucide-react"

export function HomeInnovations() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fafbfc] via-white to-[#fafbfc] py-24 md:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[#0096B4]/5 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#B8783D]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0096B4]/20 bg-[#0096B4]/5 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#0096B4]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#0096B4]">
              Portfolio de Inovacoes
            </span>
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-[#0C2340] md:text-5xl lg:text-6xl text-balance">
            Inovacoes que <em className="text-[#B8783D]">criam mercado</em>.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#475569] md:text-xl text-pretty">
            Tres marcos cientificos desenvolvidos do bench ao prescritor — protocolos magistrais
            originais que se tornaram referencia clinica no Brasil.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* Card 1 — Peeling Azelaico em Pasta */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0C2340]/8 bg-white shadow-[0_10px_40px_-15px_rgba(12,35,64,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(12,35,64,0.2)]">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/portfolio/peeling-azelaico-pasta.jpeg"
                alt="Pasta de peeling azelaico em desenvolvimento laboratorial"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-[#0C2340]/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#d4af37]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0C2340] shadow-lg">
                <Beaker className="h-3 w-3" />
                Marco 01
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0C2340]">
                  Visia 30,5% melhora
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-serif text-2xl leading-tight text-[#0C2340]">
                Primeiro Peeling Azelaico em Pasta
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                Acido azelaico em matriz pastosa estavel — desenvolvimento original que entregou
                <strong className="text-[#0C2340]"> 30,5% de melhora media</strong> em estudo Visia&reg;
                (textura, manchas e vermelhidao).
              </p>

              <ul className="mt-5 space-y-2 text-[13px] text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B8783D] shrink-0" />
                  Tratamento de melasma, acne e rosacea
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B8783D] shrink-0" />
                  Pasta estavel, alta tolerabilidade
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#B8783D] shrink-0" />
                  Protocolo magistral exclusivo
                </li>
              </ul>

              <Link
                href="/portfolio-inovacoes#peeling-azelaico"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#B8783D] transition-all group-hover:gap-3"
              >
                Ver detalhes tecnicos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Card 2 — Serum Niacinamida 25% */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border-2 border-[#0096B4]/30 bg-white shadow-[0_10px_40px_-15px_rgba(0,150,180,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,150,180,0.3)] md:scale-[1.02]">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/portfolio/serum-niacinamida-ice.jpg"
                alt="Serum azul de niacinamida 25% em ambiente refrigerado"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/10 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0096B4]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white shadow-lg">
                <Sparkles className="h-3 w-3" />
                Destaque
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0C2340]">
                  Niacinamida 25% + B12
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-serif text-2xl leading-tight text-[#0C2340]">
                Serum Niacinamida 25% + B12 + HA + Arbutin
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                Concentracao tecnica recorde de niacinamida estavel, com vitamina B12 (cor rose
                caracteristica), acido hialuronico de baixo PM e alfa-arbutin —{" "}
                <strong className="text-[#0C2340]">multifuncional em uma unica aplicacao</strong>.
              </p>

              <ul className="mt-5 space-y-2 text-[13px] text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0096B4] shrink-0" />
                  Sebo-regulador + clareamento + barreira
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0096B4] shrink-0" />
                  pH ajustado para estabilidade simultanea
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0096B4] shrink-0" />
                  Sensorial premium aquoso
                </li>
              </ul>

              <Link
                href="/portfolio-inovacoes#serum-niacinamida"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#0096B4] transition-all group-hover:gap-3"
              >
                Ver detalhes tecnicos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* Card 3 — Pesquisa USF */}
          <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0C2340]/8 bg-white shadow-[0_10px_40px_-15px_rgba(12,35,64,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(12,35,64,0.2)]">
            <div className="relative h-56 overflow-hidden">
              <Image
                src="/portfolio/lab-equipment.jpeg"
                alt="Pesquisa aplicada em laboratorio cosmetologico"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-[#0C2340]/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#0C2340]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px] text-white shadow-lg">
                <Microscope className="h-3 w-3" />
                Marco 03
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#0C2340]">
                  USF Research
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-serif text-2xl leading-tight text-[#0C2340]">
                Pesquisa USF — Fatores de Crescimento em Fibroblastos
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                Estudo cientifico em parceria com a USF investigando o efeito de fatores de
                crescimento recombinantes em <strong className="text-[#0C2340]">cultura de
                fibroblastos humanos</strong> para regeneracao tecidual.
              </p>

              <ul className="mt-5 space-y-2 text-[13px] text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0C2340] shrink-0" />
                  EGF, IGF, TGF-Beta3, VEGF
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0C2340] shrink-0" />
                  Sintese de colageno tipo I e III
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-[#0C2340] shrink-0" />
                  Pos-procedimento de alta performance
                </li>
              </ul>

              <Link
                href="/portfolio-inovacoes#pesquisa-usf"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#0C2340] transition-all group-hover:gap-3"
              >
                Ver pesquisa completa
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/portfolio-inovacoes"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#0C2340] to-[#1a3a5c] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(12,35,64,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_rgba(12,35,64,0.6)]"
          >
            Ver portfolio completo de inovacoes
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio-inovacoes#estudo-visia"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0C2340]/15 bg-white px-8 py-4 text-base font-bold text-[#0C2340] transition-all hover:border-[#B8783D] hover:bg-[#B8783D]/5"
          >
            <FileText className="h-4 w-4" />
            Estudo Visia&reg;
          </Link>
        </div>
      </div>
    </section>
  )
}
