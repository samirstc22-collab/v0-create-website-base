export function GmAccessibility() {
  const principles = [
    {
      n: "01",
      title: "Contraste WCAG 2.2 AA mínimo",
      body: "Todo texto sobre fundo deve atingir 4,5:1 para corpo (≤ 18 px) e 3:1 para títulos grandes (≥ 24 px bold). Em corpo de texto longo, busque AAA (7:1) sempre que possível. Os pares Navy ↔ Creme e Ink ↔ Creme são preferenciais.",
    },
    {
      n: "02",
      title: "Tipografia escalável (rem · clamp)",
      body: "Use unidades relativas (rem, em) e clamp() para fluidez entre breakpoints. Nunca fixe tamanhos em px no body. Permita que o usuário escale fontes do navegador até 200% sem quebra de layout.",
    },
    {
      n: "03",
      title: "Focus-visible permanente",
      body: "Outline copper (#B8783D) de 2 px com offset 2 px em todo elemento interativo. Nunca aplicar outline:none sem substituição visual. Esta regra é vinculante em botões, links, inputs e cards clicáveis.",
    },
    {
      n: "04",
      title: "Hierarquia semântica HTML",
      body: "Use h1 → h6 em ordem; a aparência visual NÃO determina o nível semântico. Logos com texto devem incluir aria-label. Imagens decorativas recebem alt vazio; imagens informativas recebem alt descritivo.",
    },
    {
      n: "05",
      title: "Touch targets ≥ 44 × 44 px",
      body: "Todo controle interativo em mobile deve respeitar 44 px mínimos (Apple HIG) ou 48 px (Material). Espaçamento mínimo entre alvos: 8 px. Botões primários no Tannuri System usam 48 px de altura por padrão.",
    },
    {
      n: "06",
      title: "Movimento e prefers-reduced-motion",
      body: "Animações decorativas (marquee, fade, parallax) devem respeitar @media (prefers-reduced-motion: reduce). Substituir animação por transição instantânea. Nunca usar movimento como única indicação de mudança de estado.",
    },
  ]

  return (
    <section
      id="acessibilidade"
      className="bg-[#0C2340] py-20 md:py-28 border-b border-[#1A3556]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#D4A574]">06</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#FAF6F0]/20" />
            <span className="tn-eyebrow text-[#FAF6F0]">
              Acessibilidade · WCAG 2.2
            </span>
          </div>
          <h2 className="tn-h1 text-[#FAF6F0] text-3xl md:text-5xl mb-4">
            Inclusão é parte da identidade
          </h2>
          <p className="tn-body text-[#FAF6F0]/80 tn-measure text-base md:text-lg">
            O Tannuri Brand System é uma comunicação científica:
            acessibilidade não é decoração, é critério editorial. As
            seis cláusulas abaixo são vinculantes para qualquer
            implementação web ou mobile.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p) => (
            <article
              key={p.n}
              className="bg-[#1A3556] border border-[#FAF6F0]/10 rounded-md p-6 md:p-8 hover:border-[#D4A574]/40 transition-colors"
            >
              <p className="tn-data text-xs text-[#D4A574] mb-4">{p.n}</p>
              <h3 className="tn-h2 text-[#FAF6F0] text-xl mb-3">
                {p.title}
              </h3>
              <p className="tn-body text-[#FAF6F0]/75 text-sm leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>

        {/* Device matrix */}
        <div className="mt-16 bg-[#1A3556] border border-[#FAF6F0]/10 rounded-md overflow-hidden">
          <div className="px-6 py-4 border-b border-[#FAF6F0]/10 flex items-baseline justify-between flex-wrap gap-2">
            <p className="tn-eyebrow text-[#D4A574]">
              Compatibilidade · Dispositivos &amp; navegadores
            </p>
            <p className="tn-data text-[10px] text-[#FAF6F0]/60">
              Atualizado · Abr 2026
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0C2340]">
                  <th className="text-left tn-eyebrow text-[10px] text-[#D4A574] px-5 py-3">
                    Plataforma
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#D4A574] px-5 py-3">
                    Largura
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#D4A574] px-5 py-3">
                    Navegadores
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#D4A574] px-5 py-3">
                    Particularidades
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#FAF6F0]/80">
                {[
                  [
                    "Mobile",
                    "320–767 px",
                    "iOS Safari 16+ · Chrome Android 110+",
                    "Logo monograma · h-touch ≥ 44 px",
                  ],
                  [
                    "Tablet",
                    "768–1023 px",
                    "iPad Safari · Chrome",
                    "Lockup horizontal compacto · 2 colunas",
                  ],
                  [
                    "Desktop",
                    "1024–1439 px",
                    "Chrome · Firefox · Edge · Safari",
                    "Lockup completo · Type scale 17 px base",
                  ],
                  [
                    "Wide",
                    "≥ 1440 px",
                    "Idem desktop",
                    "Container máx 1200 px · margens generosas",
                  ],
                  [
                    "Print · A4",
                    "210 × 297 mm",
                    "PDF · Boletins editoriais",
                    "Logo ≥ 10 mm · CMYK · Pantone 2767 C",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#FAF6F0]/10 hover:bg-[#0C2340]/30"
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-3 ${
                          j === 0 ? "text-[#FAF6F0] font-medium" : ""
                        } ${j === 1 ? "tn-data text-xs" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
