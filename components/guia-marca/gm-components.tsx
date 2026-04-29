export function GmComponents() {
  return (
    <section
      id="componentes"
      className="bg-white py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">05</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">
              Componentes visuais
            </span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            UI editorial reutilizável
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            Conjunto vinculante para todos os veículos das três marcas — eBooks,
            lâminas, dossiês, ambientes digitais e e-mails. Cada componente
            herda a paleta primária e respeita a hierarquia editorial definida.
          </p>
        </header>

        {/* === Buttons === */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <p className="tn-eyebrow text-[#B8783D] mb-5">
              Botões · Primário · Secundário · Ênfase
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="tn-h3 text-[12px] text-[#FAF6F0] bg-[#B8783D] hover:bg-[#a66a32] px-6 py-3 rounded-sm transition-colors">
                Acessar conteúdo
              </button>
              <button className="tn-h3 text-[12px] text-[#0C2340] bg-transparent border border-[#0C2340] hover:bg-[#0C2340] hover:text-[#FAF6F0] px-6 py-3 rounded-sm transition-colors">
                Saber mais
              </button>
              <button className="tn-h3 text-[12px] text-[#FAF6F0] bg-[#0C2340] hover:bg-[#1A3556] px-6 py-3 rounded-sm transition-colors">
                Adquirir
              </button>
            </div>
            <dl className="text-xs space-y-1.5 pt-4 border-t border-[#D8D2C8]">
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Padding</dt>
                <dd className="tn-data text-[#0C2340]">px-6 py-3 (24·12 px)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Tipografia</dt>
                <dd className="tn-data text-[#0C2340]">Inter 700 · +12% tracking</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Raio</dt>
                <dd className="tn-data text-[#0C2340]">2 px (rounded-sm)</dd>
              </div>
            </dl>
          </div>

          <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <p className="tn-eyebrow text-[#B8783D] mb-5">
              Tags e marcadores
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tn-eyebrow text-[10px] text-[#0C2340] bg-[#FAF6F0] border border-[#0C2340]/30 px-3 py-1.5 rounded-full">
                DERMATOLOGIA
              </span>
              <span className="tn-eyebrow text-[10px] text-[#FAF6F0] bg-[#0C2340] px-3 py-1.5 rounded-full">
                MAGISTRAL
              </span>
              <span className="tn-eyebrow text-[10px] text-[#FAF6F0] bg-[#0096B4] px-3 py-1.5 rounded-full">
                ℞ VERIFICADA
              </span>
              <span className="tn-eyebrow text-[10px] text-[#FAF6F0] bg-[#B8783D] px-3 py-1.5 rounded-full">
                EVIDÊNCIA · A
              </span>
              <span className="tn-eyebrow text-[10px] text-[#0C2340] bg-[#D4A574]/40 border border-[#B8783D]/30 px-3 py-1.5 rounded-full">
                EDIÇÃO 04
              </span>
            </div>
            <dl className="text-xs space-y-1.5 pt-4 border-t border-[#D8D2C8]">
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Tipografia</dt>
                <dd className="tn-data text-[#0C2340]">JetBrains 600 · 10 px</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Tracking</dt>
                <dd className="tn-data text-[#0C2340]">+30%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[#4A4A4A]">Padding</dt>
                <dd className="tn-data text-[#0C2340]">px-3 py-1.5</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* === Quote + evidence card === */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#FAF6F0] border-l-4 border-[#B8783D] rounded-md p-8">
            <p className="tn-eyebrow text-[#B8783D] mb-4">
              Citação editorial
            </p>
            <blockquote className="tn-quote text-[#0C2340] text-2xl md:text-3xl leading-snug mb-4">
              &ldquo;O timing define o resultado, não o ativo isolado. A pele
              responde a sequência, não a sobreposição.&rdquo;
            </blockquote>
            <footer className="tn-data text-xs text-[#4A4A4A]">
              — Prof. Samir Tannuri · Clube de Fórmulas, Ed. 04
            </footer>
          </div>

          <div className="bg-white border border-[#0096B4]/30 rounded-md p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#0096B4]" />
            <p className="tn-eyebrow text-[#006B82] mb-4">
              Evidência clínica · Grau A
            </p>
            <p className="tn-h2 text-[#0C2340] text-xl mb-3">
              GHK-Cu organiza colágeno funcional
            </p>
            <p className="tn-body text-[#1A1A1A] text-sm mb-4">
              Em fase de remodelação tardia (D21+), com modulação de MMP
              balance documentada em estudos in vitro e clínicos
              randomizados.
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#D8D2C8]">
              <span className="tn-data text-[10px] text-[#0096B4]">
                DOI 10.1002/cpdd.806
              </span>
              <span className="h-3 w-px bg-[#D8D2C8]" />
              <span className="tn-data text-[10px] text-[#4A4A4A]">
                pH 5,2–5,8
              </span>
            </div>
          </div>
        </div>

        {/* === Rx prescription card === */}
        <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-10">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-5 border-b border-[#D8D2C8]">
            <div className="flex items-center gap-4">
              <span className="font-display text-3xl text-[#B8783D]">℞</span>
              <div>
                <p className="tn-eyebrow text-[#0096B4] mb-1">
                  ℞ 04 · Sérum GHK-Cu Remodelador
                </p>
                <p className="tn-h2 text-[#0C2340] text-xl">
                  D21+ · Aplicação noturna
                </p>
              </div>
            </div>
            <span className="tn-eyebrow text-[10px] text-[#FAF6F0] bg-[#0C2340] px-3 py-1.5 rounded-full">
              MAGISTRAL · ℞
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left tn-eyebrow text-[10px] text-[#4A4A4A] pb-3">
                    Ativo (INCI)
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#4A4A4A] pb-3">
                    Conc.
                  </th>
                  <th className="text-left tn-eyebrow text-[10px] text-[#4A4A4A] pb-3">
                    Função
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Copper Tripeptide-1 (GHK-Cu)", "0,5%", "Remodelação · MMP balance"],
                  ["Niacinamide", "5%", "Anti-inflamatório · barreira"],
                  ["Madecassoside", "1%", "Regeneração controlada"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-[#D8D2C8]">
                    <td className="py-3 text-[#0C2340] font-medium">{row[0]}</td>
                    <td className="py-3 tn-data text-[#B8783D]">{row[1]}</td>
                    <td className="py-3 text-[#1A1A1A]">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* === Form input + link styles === */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <p className="tn-eyebrow text-[#B8783D] mb-5">
              Campos de formulário
            </p>
            <label className="block">
              <span className="tn-h3 text-[11px] text-[#0C2340] mb-2 block">
                E-mail institucional
              </span>
              <input
                type="email"
                placeholder="contato@exemplo.com"
                className="w-full bg-white border border-[#D8D2C8] rounded-sm px-4 py-3 text-[#0C2340] tn-body focus:outline-none focus:border-[#B8783D] focus:ring-1 focus:ring-[#B8783D]"
              />
            </label>
            <p className="tn-body text-xs text-[#4A4A4A] mt-2">
              Estado focado: borda copper · ring copper a 1 px · sem sombra.
            </p>
          </div>

          <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <p className="tn-eyebrow text-[#B8783D] mb-5">
              Links e âncoras editoriais
            </p>
            <p className="tn-body text-[#1A1A1A] mb-4">
              Em corpo de texto, links seguem padrão{" "}
              <a
                href="#"
                className="text-[#B8783D] underline decoration-[#B8783D]/40 underline-offset-4 hover:decoration-[#B8783D] transition-all"
              >
                copper sublinhado
              </a>
              . Para títulos com link, aplicar{" "}
              <a
                href="#"
                className="text-[#0C2340] hover:text-[#B8783D] transition-colors font-medium"
              >
                navy &rarr; copper
              </a>{" "}
              em hover, sem sublinhado.
            </p>
            <p className="tn-body text-xs text-[#4A4A4A]">
              Nunca aplique azul padrão de browser. Nunca remova o estado
              focus-visible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
