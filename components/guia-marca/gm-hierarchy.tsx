export function GmHierarchy() {
  return (
    <section
      id="hierarquia"
      className="bg-[#FAF6F0] py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">04</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">
              Hierarquia editorial
            </span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            Ritmo, leitura e respiração
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            A escala respeita razão de 1,33× entre níveis (quarta menor),
            garantindo leitura confortável em A4, em desktop largo e em
            mobile. Espaçamentos verticais seguem múltiplos da grade base de
            8 px.
          </p>
        </header>

        {/* Live editorial preview */}
        <article className="bg-white border border-[#D8D2C8] rounded-md p-6 md:p-12 mb-12">
          <p className="tn-eyebrow text-[#B8783D] mb-6">
            Edição 04 · Out 2026
          </p>
          <h3 className="tn-display text-[#0C2340] text-4xl md:text-6xl mb-3">
            Display 36 pt
          </h3>
          <p className="tn-h1 text-[#0C2340] text-2xl md:text-3xl mb-3">
            Título nível 1 — 22 pt
          </p>
          <p className="tn-h2 text-[#0C2340] text-lg md:text-xl mb-3">
            Título nível 2 — 16 pt
          </p>
          <p className="tn-h3 text-[#0096B4] mb-4">Subtítulo · 11 pt</p>
          <p className="tn-body tn-measure text-[#1A1A1A] mb-4">
            Corpo de texto · Inter Regular 11 pt. A leitura ocorre em colunas
            com largura ótima de 65–75 caracteres, espaçamento entrelinhas
            equivalente a 1,55× e contraste mínimo AA sobre creme. Esta é a
            superfície editorial padrão do Tannuri Brand System — sustenta
            artigos, dossiês, blocos de evidência e cards clínicos.
          </p>
          <p className="tn-body tn-measure text-[#1A1A1A] mb-6">
            Mantenha o ritmo: parágrafos de 4–6 linhas; respiração entre
            blocos equivalente a uma linha de corpo (~16 px); subtítulos
            ancorados ao parágrafo seguinte por margem inferior de 5 mm.
          </p>
          <p className="tn-caption text-[#4A4A4A]">
            Legenda · 8.5 pt JetBrains Mono — usada em pés de tabela,
            referências e DOIs.
          </p>
        </article>

        {/* Ritmo / espaçamento table */}
        <div className="bg-white border border-[#D8D2C8] rounded-md overflow-hidden">
          <div className="bg-[#0C2340] text-[#FAF6F0] px-6 py-4 flex items-baseline justify-between flex-wrap gap-2">
            <p className="tn-eyebrow text-[10px] text-[#D4A574]">
              Espaçamento e ritmo · Web px / Print mm
            </p>
            <p className="tn-data text-[10px] text-[#FAF6F0] opacity-70">
              Base 8px · 17px body em desktop
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#FAF6F0]">
                  <th className="text-left tn-eyebrow text-[10px] text-[#0C2340] px-5 py-3">
                    Elemento
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#0C2340] px-5 py-3">
                    Margem superior
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#0C2340] px-5 py-3">
                    Margem inferior
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#0C2340] px-5 py-3">
                    Line-height
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#0C2340] px-5 py-3">
                    Tailwind
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Display", "0", "10 mm / 40 px", "0.95", "mb-10 leading-[0.95]"],
                  ["H1", "8 mm / 32 px", "5 mm / 20 px", "1.05", "mt-8 mb-5 leading-[1.05]"],
                  ["H2", "10 mm / 40 px", "5 mm / 20 px", "1.2", "mt-10 mb-5 leading-tight"],
                  ["H3", "5 mm / 20 px", "3 mm / 12 px", "1.3", "mt-5 mb-3 leading-snug"],
                  ["Parágrafo", "0", "4 mm / 16 px", "1.55", "mb-4 leading-relaxed"],
                  ["Bloco de tabela", "5 mm / 20 px", "5 mm / 20 px", "1.4", "my-5 leading-snug"],
                  ["Citação editorial", "8 mm / 32 px", "8 mm / 32 px", "1.4", "my-8 leading-snug"],
                  ["Caption", "2 mm / 8 px", "0", "1.3", "mt-2 leading-snug"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#D8D2C8] hover:bg-[#FAF6F0]/60 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-[#0C2340]">
                      {row[0]}
                    </td>
                    <td className="px-5 py-3 tn-data text-xs text-[#1A1A1A]">
                      {row[1]}
                    </td>
                    <td className="px-5 py-3 tn-data text-xs text-[#1A1A1A]">
                      {row[2]}
                    </td>
                    <td className="px-5 py-3 tn-data text-xs text-[#1A1A1A]">
                      {row[3]}
                    </td>
                    <td className="px-5 py-3 tn-data text-xs text-[#0096B4]">
                      {row[4]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Responsive type scale */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              label: "Mobile · < 768 px",
              base: "16 px",
              display: "44 px",
              h1: "28 px",
              h2: "20 px",
              note: "Reduza Display em 25%. Mantém razão 1,33×.",
            },
            {
              label: "Tablet · 768–1023 px",
              base: "16 px",
              display: "64 px",
              h1: "36 px",
              h2: "24 px",
              note: "Lockup horizontal compacto em headers.",
            },
            {
              label: "Desktop · ≥ 1024 px",
              base: "17 px",
              display: "96 px",
              h1: "44 px",
              h2: "28 px",
              note: "Escala completa. Coluna de leitura máx. 68ch.",
            },
          ].map((b) => (
            <div
              key={b.label}
              className="bg-white border border-[#D8D2C8] rounded-md p-6"
            >
              <p className="tn-eyebrow text-[#B8783D] mb-4">{b.label}</p>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="tn-body text-xs text-[#4A4A4A]">Body base</dt>
                  <dd className="tn-data text-xs text-[#0C2340]">{b.base}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="tn-body text-xs text-[#4A4A4A]">Display</dt>
                  <dd className="tn-data text-xs text-[#0C2340]">
                    {b.display}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="tn-body text-xs text-[#4A4A4A]">H1</dt>
                  <dd className="tn-data text-xs text-[#0C2340]">{b.h1}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="tn-body text-xs text-[#4A4A4A]">H2</dt>
                  <dd className="tn-data text-xs text-[#0C2340]">{b.h2}</dd>
                </div>
              </dl>
              <p className="tn-body text-xs text-[#4A4A4A] mt-4 pt-4 border-t border-[#D8D2C8]">
                {b.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
