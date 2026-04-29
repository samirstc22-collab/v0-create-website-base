function FamilyCard({
  name,
  role,
  example,
  weights,
  glyphs,
  className,
  italicSample,
}: {
  name: string
  role: string
  example: string
  weights: string[]
  glyphs: string
  className: string
  italicSample?: string
}) {
  return (
    <article className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-8 md:p-10">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
        <h3 className={`text-3xl md:text-4xl text-[#0C2340] ${className}`}>
          {name}
        </h3>
        <p className="tn-eyebrow text-[#B8783D]">{role}</p>
      </div>

      <p
        className={`text-[64px] sm:text-[88px] md:text-[112px] leading-none text-[#0C2340] ${className}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {example}
      </p>

      <p
        className={`text-xs md:text-sm text-[#4A4A4A] mt-6 break-words ${className}`}
      >
        {glyphs}
      </p>

      {italicSample ? (
        <p
          className={`mt-4 text-lg text-[#4A4A4A] ${className}`}
          style={{ fontStyle: "italic" }}
        >
          {italicSample}
        </p>
      ) : null}

      <div className="mt-6 pt-6 border-t border-[#D8D2C8] grid grid-cols-3 sm:grid-cols-6 gap-3">
        {weights.map((w) => (
          <div key={w} className="text-center">
            <p className={`text-xl text-[#0C2340] ${className}`}>Aa</p>
            <p className="tn-data text-[10px] text-[#4A4A4A] mt-1">{w}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

function ScaleRow({
  size,
  family,
  weight,
  tracking,
  lineHeight,
  use,
  preview,
  previewClass,
}: {
  size: string
  family: string
  weight: string
  tracking: string
  lineHeight: string
  use: string
  preview: string
  previewClass: string
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-baseline py-6 border-b border-[#D8D2C8] last:border-0">
      <div className="lg:col-span-5">
        <p className={`text-[#0C2340] ${previewClass}`}>{preview}</p>
      </div>
      <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Tamanho</p>
          <p className="tn-data text-[#0C2340]">{size}</p>
        </div>
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Família</p>
          <p className="text-[#0C2340] font-medium">{family}</p>
        </div>
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Peso</p>
          <p className="tn-data text-[#0C2340]">{weight}</p>
        </div>
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Tracking</p>
          <p className="tn-data text-[#0C2340]">{tracking}</p>
        </div>
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Line-h</p>
          <p className="tn-data text-[#0C2340]">{lineHeight}</p>
        </div>
        <div>
          <p className="tn-eyebrow text-[10px] text-[#4A4A4A] mb-1">Uso</p>
          <p className="text-[#0C2340]">{use}</p>
        </div>
      </div>
    </div>
  )
}

export function GmTypography() {
  return (
    <section
      id="tipografia"
      className="bg-[#FAF6F0] py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">02</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">
              Sistema tipográfico
            </span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            Três famílias, três funções
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            Cada família ocupa um papel funcional inegociável: Playfair Display
            para a alma editorial; Inter para a clareza informativa; JetBrains
            Mono para o rigor técnico. Nenhuma fonte alternativa é permitida em
            comunicações oficiais.
          </p>
        </header>

        {/* Family cards */}
        <div className="grid gap-6 mb-16">
          <FamilyCard
            name="Playfair Display"
            role="Display · Títulos · Citações"
            example="Aa Gg Rx"
            italicSample="A pele responde a sequência, não a sobreposição."
            glyphs="ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789 · áéíóúãõâêîôûç · ℞ ° α β μ"
            weights={["400 Reg", "500 Med", "600 SBd", "700 Bd", "800 ExBd", "900 Blk"]}
            className="font-display"
          />
          <FamilyCard
            name="Inter"
            role="Corpo · Subtítulos · UI"
            example="Aa Gg Rx"
            glyphs="ABCDEFGHIJKLMNOPQRSTUVWXYZ · abcdefghijklmnopqrstuvwxyz · 0123456789 · áéíóúãõâêîôûç · % ‰ ± μm pH"
            weights={["300 Lt", "400 Reg", "500 Med", "600 SBd", "700 Bd", "900 Blk"]}
            className="font-sans"
          />
          <FamilyCard
            name="JetBrains Mono"
            role="Eyebrows · Códigos · Dados técnicos"
            example="DOI · pH · ℞"
            glyphs="ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789 · 10.1002/cpdd.806 · pH 5,2–5,8 · 0,5% w/w"
            weights={["400 Reg", "500 Med", "600 SBd"]}
            className="font-mono-tn"
          />
        </div>

        {/* Application rules table */}
        <div className="bg-white border border-[#D8D2C8] rounded-md p-6 md:p-10">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8">
            <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl">
              Regras de aplicação · Escala editorial
            </h3>
            <p className="tn-eyebrow text-[#B8783D]">
              Razão 1,33× · Quarta menor
            </p>
          </div>

          <ScaleRow
            preview="Display de capa"
            previewClass="tn-display text-[36px] md:text-[44px]"
            size="36 pt / 56 px"
            family="Playfair"
            weight="800"
            tracking="−2%"
            lineHeight="0.95"
            use="Hero · Capa"
          />
          <ScaleRow
            preview="Título nível 1"
            previewClass="tn-h1 text-[24px] md:text-[28px]"
            size="22 pt / 32 px"
            family="Playfair"
            weight="700–800"
            tracking="−1,5%"
            lineHeight="1.05"
            use="Seção principal"
          />
          <ScaleRow
            preview="Título nível 2"
            previewClass="tn-h2 text-[18px] md:text-[22px]"
            size="16 pt / 24 px"
            family="Playfair"
            weight="500–600"
            tracking="0"
            lineHeight="1.2"
            use="Subseção"
          />
          <ScaleRow
            preview="SUBSEÇÃO H3 · UPPER"
            previewClass="tn-h3 text-[12px] md:text-[14px]"
            size="11 pt / 16 px"
            family="Inter"
            weight="700"
            tracking="+12%"
            lineHeight="1.3"
            use="Categorias · Tabs"
          />
          <ScaleRow
            preview="Corpo de texto. Inter Regular em colunas de 65–75 caracteres por linha, com contraste mínimo AA."
            previewClass="tn-body text-base"
            size="11 pt / 16 px"
            family="Inter"
            weight="400"
            tracking="0"
            lineHeight="1.55"
            use="Parágrafos"
          />
          <ScaleRow
            preview="Corpo com ênfase — destaca termos clínicos sem quebrar leitura."
            previewClass="tn-body text-base font-semibold"
            size="11 pt / 16 px"
            family="Inter"
            weight="600"
            tracking="0"
            lineHeight="1.55"
            use="Ênfase inline"
          />
          <ScaleRow
            preview="“A pele responde a sequência, não a sobreposição.”"
            previewClass="tn-quote text-xl md:text-2xl"
            size="14–18 pt"
            family="Playfair italic"
            weight="400"
            tracking="−1%"
            lineHeight="1.4"
            use="Citação editorial"
          />
          <ScaleRow
            preview="EYEBROW · ETIQUETA"
            previewClass="tn-eyebrow text-[11px]"
            size="9–11 pt"
            family="JetBrains"
            weight="600"
            tracking="+25–35%"
            lineHeight="1"
            use="Kicker · Tag"
          />
          <ScaleRow
            preview="10.1002/cpdd.806 · pH 5,2–5,8"
            previewClass="tn-data text-sm"
            size="10–11 pt"
            family="JetBrains"
            weight="500–600"
            tracking="+5%"
            lineHeight="1.3"
            use="DOI · Dados"
          />
        </div>

        {/* Practical do/dont mini grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-white border-l-4 border-[#2A8B6A] border-y border-r border-y-[#D8D2C8] border-r-[#D8D2C8] rounded-md p-6">
            <p className="tn-eyebrow text-[#2A8B6A] mb-4">Faça</p>
            <ul className="space-y-2 tn-body text-sm text-[#1A1A1A]">
              <li>· Use Playfair apenas para Display, H1 e H2</li>
              <li>· Mantenha colunas de 60–75 caracteres por linha</li>
              <li>· Aplique tracking +25% em eyebrows JetBrains</li>
              <li>· Use Inter 400 para todo corpo de texto</li>
              <li>· Reserve italic Playfair para citações editoriais</li>
            </ul>
          </div>
          <div className="bg-white border-l-4 border-[#B33A3A] border-y border-r border-y-[#D8D2C8] border-r-[#D8D2C8] rounded-md p-6">
            <p className="tn-eyebrow text-[#B33A3A] mb-4">Não faça</p>
            <ul className="space-y-2 tn-body text-sm text-[#1A1A1A]">
              <li>· Não use Playfair em corpo de texto longo</li>
              <li>· Não aplique JetBrains em parágrafos</li>
              <li>· Não substitua por fontes &ldquo;equivalentes&rdquo; (Lora, Roboto Mono)</li>
              <li>· Não use mais de duas famílias na mesma seção compacta</li>
              <li>· Não combine Playfair Bold com Inter Light no mesmo bloco</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
