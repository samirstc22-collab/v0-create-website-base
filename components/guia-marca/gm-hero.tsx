export function GmHero() {
  return (
    <section className="relative bg-[#FAF6F0] border-b border-[#D8D2C8]">
      {/* subtle baseline grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0C2340 1px, transparent 1px), linear-gradient(to bottom, #0C2340 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
        {/* Document marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="tn-eyebrow text-[#B8783D]">
            Manual de Identidade · v1.0 · 2026
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-[#D8D2C8]" />
          <span className="tn-data text-[10px] text-[#4A4A4A]">
            DOC · BR-GUIDELINES
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h1 className="tn-display text-[#0C2340] text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
              Guia de aplicação
              <span className="block tn-quote text-[#B8783D] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] mt-2">
                tipografia &amp; logotipo
              </span>
            </h1>

            <p className="tn-body tn-measure text-[#1A1A1A] text-base md:text-lg mt-8 leading-relaxed">
              Documento operacional para desenvolvimento web. Define famílias
              tipográficas, hierarquia, paleta cromática, regras de uso do
              logotipo, componentes visuais e critérios de acessibilidade —
              alinhado ao{" "}
              <span className="italic">Tannuri Brand System™</span> dos
              ecossistemas Samir Tannuri Consultoria, Clube de Fórmulas e IA
              Formulator.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { href: "#logotipo", label: "01 · Logotipo" },
                { href: "#tipografia", label: "02 · Tipografia" },
                { href: "#cores", label: "03 · Paleta" },
                { href: "#hierarquia", label: "04 · Hierarquia" },
                { href: "#componentes", label: "05 · Componentes" },
                { href: "#acessibilidade", label: "06 · Acessibilidade" },
                { href: "#regras", label: "07 · Regras" },
                { href: "#implementacao", label: "08 · Implementação" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="tn-data text-[11px] px-3 py-2 rounded-full border border-[#0C2340]/15 text-[#0C2340] bg-white hover:bg-[#0C2340] hover:text-[#FAF6F0] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Inline spec card */}
          <aside className="lg:col-span-4">
            <div className="bg-white border border-[#D8D2C8] rounded-md p-6 shadow-[0_1px_0_rgba(12,35,64,0.04)]">
              <p className="tn-eyebrow text-[#0096B4] mb-4">Curadoria</p>
              <p className="tn-h2 text-[#0C2340] text-2xl mb-1">
                Prof. Samir Tannuri
              </p>
              <p className="tn-body text-sm text-[#4A4A4A] mb-6">
                Pesquisador · Consultor · Professor
              </p>

              <dl className="grid grid-cols-2 gap-y-4 gap-x-3 border-t border-[#D8D2C8] pt-4">
                <dt className="tn-data text-[10px] text-[#4A4A4A]">Edição</dt>
                <dd className="tn-data text-[11px] text-[#0C2340] text-right">
                  Primeira · Abr 2026
                </dd>
                <dt className="tn-data text-[10px] text-[#4A4A4A]">Versão</dt>
                <dd className="tn-data text-[11px] text-[#0C2340] text-right">
                  v1.0
                </dd>
                <dt className="tn-data text-[10px] text-[#4A4A4A]">Escopo</dt>
                <dd className="tn-data text-[11px] text-[#0C2340] text-right">
                  Web · App · Editorial
                </dd>
                <dt className="tn-data text-[10px] text-[#4A4A4A]">Status</dt>
                <dd className="tn-data text-[11px] text-[#2A8B6A] text-right">
                  Vinculante
                </dd>
              </dl>
            </div>
          </aside>
        </div>

        {/* Manifesto */}
        <blockquote className="mt-20 md:mt-24 tn-measure border-l-2 border-[#B8783D] pl-6">
          <p className="tn-quote text-[#0C2340] text-2xl md:text-3xl leading-snug">
            &ldquo;Comunicar ciência magistral com a precisão de uma molécula e
            a elegância de uma página bem composta.&rdquo;
          </p>
          <footer className="tn-eyebrow text-[#4A4A4A] mt-4">
            Manifesto · Tannuri Brand System
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
