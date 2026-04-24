import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle, FlaskConical, Mail, Instagram } from "lucide-react"

export function PortfolioCta() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 md:py-32">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#B8783D]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0096B4]/15 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-4 py-1.5">
              <FlaskConical className="h-3.5 w-3.5 text-[#e8a87c]" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                Próximo passo
              </span>
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Quer levar uma destas inovações para sua{" "}
              <em className="text-[#e8a87c]">farmácia ou marca</em>?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
              Atendimento técnico restrito a farmácias magistrais, indústria cosmética e marcas
              dermocosméticas premium. Cada protocolo é discutido caso a caso — com transferência
              de dossiê farmacotécnico completo.
            </p>

            {/* Trust list */}
            <ul className="mt-8 space-y-3 text-[15px] text-white/75">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                <span>
                  <strong className="text-white">Diagnóstico inicial gratuito</strong> em até 48h
                  úteis após o contato
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                <span>
                  <strong className="text-white">Dossiê farmacotécnico</strong> completo com fluxo
                  de produção, validação e referências PubMed
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                <span>
                  <strong className="text-white">Treinamento técnico</strong> da equipe da farmácia
                  ou laboratório (online ou presencial)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                <span>
                  <strong className="text-white">Suporte continuado</strong> durante a
                  implementação dos protocolos
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contato?assunto=portfolio-inovacoes"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#e8a87c] to-[#b87333] px-8 py-4 text-base font-bold text-[#0a1628] shadow-[0_10px_40px_rgba(232,168,124,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(232,168,124,0.55)]"
              >
                <Mail className="h-4 w-4" />
                Solicitar contato técnico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/loja"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                Ver Clube de Fórmulas
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" />
                @samir_farma
              </a>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-sm text-white/60">
                <strong className="text-white">Pesquisador</strong> · Consultor · Professor
              </span>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#e8a87c]/15 via-transparent to-[#0096B4]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0101%20copiar-2-IiYwYOTDXAN931odiZaInaOmsEYjAA.jpg"
                alt="Prof. Samir Tannuri — pesquisador, consultor e professor em formulação dermatológica"
                width={600}
                height={800}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#e8a87c] mb-1">
                  Atendimento direto
                </div>
                <div className="font-serif text-2xl text-white">Prof. Samir Tannuri</div>
                <div className="text-sm text-white/60 mt-1">
                  Pesquisador · Consultor · Professor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
