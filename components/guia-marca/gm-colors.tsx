function PrimarySwatch({
  name,
  hex,
  rgb,
  cmyk,
  pantone,
  use,
  text,
  textOnLight,
}: {
  name: string
  hex: string
  rgb: string
  cmyk: string
  pantone: string
  use: string
  text?: string
  textOnLight?: boolean
}) {
  const txt = textOnLight ? "#0C2340" : text || "#FAF6F0"
  return (
    <article className="rounded-md overflow-hidden border border-[#D8D2C8]">
      <div
        className="aspect-[4/3] flex flex-col justify-between p-6 md:p-8"
        style={{ background: hex, color: txt }}
      >
        <p className="tn-eyebrow text-[10px] opacity-80">Cor primária</p>
        <div>
          <p className="tn-h1 text-2xl md:text-3xl mb-1">{name}</p>
          <p className="tn-data text-xs opacity-90">{hex}</p>
        </div>
      </div>
      <div className="bg-white p-5">
        <p className="tn-body text-sm text-[#4A4A4A] mb-4">{use}</p>
        <dl className="grid grid-cols-2 gap-y-2 text-xs">
          <dt className="tn-eyebrow text-[10px] text-[#4A4A4A]">RGB</dt>
          <dd className="tn-data text-[#0C2340] text-right">{rgb}</dd>
          <dt className="tn-eyebrow text-[10px] text-[#4A4A4A]">CMYK</dt>
          <dd className="tn-data text-[#0C2340] text-right">{cmyk}</dd>
          <dt className="tn-eyebrow text-[10px] text-[#4A4A4A]">Pantone</dt>
          <dd className="tn-data text-[#0C2340] text-right">{pantone}</dd>
        </dl>
      </div>
    </article>
  )
}

function MicroSwatch({
  name,
  hex,
  textOnLight,
}: {
  name: string
  hex: string
  textOnLight?: boolean
}) {
  return (
    <div className="rounded-md overflow-hidden border border-[#D8D2C8]">
      <div
        className="aspect-square flex items-end p-3"
        style={{
          background: hex,
          color: textOnLight ? "#0C2340" : "#FAF6F0",
        }}
      >
        <span className="tn-eyebrow text-[10px] opacity-90">{name}</span>
      </div>
      <div className="bg-white px-3 py-2 border-t border-[#D8D2C8]">
        <p className="tn-data text-[10px] text-[#0C2340]">{hex}</p>
      </div>
    </div>
  )
}

function ContrastChip({
  bg,
  fg,
  ratio,
  ok,
  label,
}: {
  bg: string
  fg: string
  ratio: string
  ok: "AAA" | "AA" | "fail"
  label: string
}) {
  const okColor =
    ok === "AAA" ? "#2A8B6A" : ok === "AA" ? "#D8A437" : "#B33A3A"
  return (
    <div className="rounded-md overflow-hidden border border-[#D8D2C8]">
      <div
        className="p-5"
        style={{ background: bg, color: fg }}
      >
        <p className="tn-h2 text-xl mb-1">Aa Bb 12</p>
        <p className="tn-body text-sm opacity-90">{label}</p>
      </div>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-[#D8D2C8]">
        <span className="tn-data text-[11px] text-[#0C2340]">{ratio}:1</span>
        <span
          className="tn-eyebrow text-[10px] px-2 py-1 rounded-sm"
          style={{ background: okColor + "20", color: okColor }}
        >
          {ok === "fail" ? "Falha" : ok}
        </span>
      </div>
    </div>
  )
}

export function GmColors() {
  return (
    <section
      id="cores"
      className="bg-white py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">03</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">Sistema cromático</span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            Paleta primária e secundária
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            A paleta nasce do diálogo entre três temperaturas: a profundidade
            institucional do navy, o calor do copper e a clareza clínica do
            teal. Os neutros — creme e tinta — sustentam a leitura editorial
            em todas as superfícies digitais.
          </p>
        </header>

        {/* Primary palette */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          <PrimarySwatch
            name="Navy Tannuri"
            hex="#0C2340"
            rgb="12 · 35 · 64"
            cmyk="100 · 80 · 40 · 60"
            pantone="2767 C"
            use="Cor institucional. Tipografia de títulos, monogramas, fundos formais."
          />
          <PrimarySwatch
            name="Teal Magistral"
            hex="#0096B4"
            rgb="0 · 150 · 180"
            cmyk="85 · 25 · 25 · 5"
            pantone="7711 C"
            use="Cor de assinatura clínica. Detalhes técnicos, blocos de evidência."
          />
          <PrimarySwatch
            name="Copper Editorial"
            hex="#B8783D"
            rgb="184 · 120 · 61"
            cmyk="20 · 55 · 85 · 10"
            pantone="471 C"
            use="Acentos editoriais. CTAs primários, ornamentos, links destacados."
          />
          <PrimarySwatch
            name="Creme Pergaminho"
            hex="#FAF6F0"
            rgb="250 · 246 · 240"
            cmyk="2 · 3 · 5 · 0"
            pantone="Warm Gray 1 C"
            use="Superfície editorial dominante. Fundo padrão de páginas longas."
            textOnLight
          />
        </div>

        {/* Secondary tonal scales */}
        <div className="bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-10 mb-12">
          <div className="flex items-baseline justify-between flex-wrap gap-2 mb-8">
            <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl">
              Variantes da matriz primária
            </h3>
            <p className="tn-eyebrow text-[#B8783D]">
              Tons funcionais e neutros
            </p>
          </div>

          <p className="tn-eyebrow text-[#0096B4] mb-4">Escala Navy / Teal</p>
          <div className="grid grid-cols-3 sm:grid-cols-7 gap-3 mb-8">
            <MicroSwatch name="Navy" hex="#0C2340" />
            <MicroSwatch name="Navy Soft" hex="#1A3556" />
            <MicroSwatch name="Teal Deep" hex="#006B82" />
            <MicroSwatch name="Teal" hex="#0096B4" />
            <MicroSwatch name="Teal Light" hex="#4FB8CB" />
            <MicroSwatch name="Copper" hex="#B8783D" />
            <MicroSwatch name="Copper Light" hex="#D4A574" textOnLight />
          </div>

          <p className="tn-eyebrow text-[#0096B4] mb-4">Neutros editoriais</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
            <MicroSwatch name="Ink" hex="#1A1A1A" />
            <MicroSwatch name="Ink Soft" hex="#4A4A4A" />
            <MicroSwatch name="Gray Line" hex="#D8D2C8" textOnLight />
            <MicroSwatch name="Creme Deep" hex="#F2EBDD" textOnLight />
            <MicroSwatch name="Creme" hex="#FAF6F0" textOnLight />
            <MicroSwatch name="White" hex="#FFFFFF" textOnLight />
          </div>

          <p className="tn-eyebrow text-[#0096B4] mb-4">
            Cores funcionais — alertas e estados
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <MicroSwatch name="Sucesso" hex="#2A8B6A" />
            <MicroSwatch name="Atenção" hex="#D8A437" textOnLight />
            <MicroSwatch name="Alerta" hex="#B33A3A" />
            <MicroSwatch name="Informativo" hex="#5C5470" />
          </div>
        </div>

        {/* Distribution table */}
        <div className="bg-white border border-[#D8D2C8] rounded-md overflow-hidden mb-12">
          <div className="bg-[#0C2340] text-[#FAF6F0] px-6 py-4">
            <p className="tn-eyebrow text-[10px] text-[#D4A574]">
              Distribuição cromática recomendada
            </p>
          </div>
          <div className="grid grid-cols-4 gap-0 text-sm">
            {[
              ["Função editorial", "Cor primária", "Acento", "Fundo"],
              ["Capa institucional", "Navy", "Copper", "Creme"],
              ["Bloco de evidência clínica", "Teal Deep", "Teal Light", "Creme"],
              ["CTA e botão primário", "Copper", "Navy", "White"],
              ["Card de prescrição", "Navy", "Teal", "Creme"],
              ["Footer institucional", "Navy", "Copper Light", "Navy"],
            ].map((row, i) => (
              <div key={i} className="contents">
                {row.map((cell, j) => (
                  <div
                    key={j}
                    className={`px-4 py-3 border-b border-[#D8D2C8] ${
                      i === 0
                        ? "tn-eyebrow text-[10px] text-[#0C2340] bg-[#FAF6F0]"
                        : "tn-body text-[#1A1A1A]"
                    } ${j > 0 ? "border-l border-[#D8D2C8]" : ""}`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility contrast samples */}
        <div>
          <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl mb-3">
            Contraste e acessibilidade
          </h3>
          <p className="tn-body text-[#4A4A4A] tn-measure mb-8">
            Todas as combinações listadas são validadas pelo WCAG 2.2. Use{" "}
            <strong>AAA</strong> em corpo de texto longo, <strong>AA</strong>{" "}
            em UI e títulos, e evite combinações marcadas como falha.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ContrastChip
              bg="#FAF6F0"
              fg="#0C2340"
              ratio="14.2"
              ok="AAA"
              label="Navy sobre creme"
            />
            <ContrastChip
              bg="#0C2340"
              fg="#FAF6F0"
              ratio="14.2"
              ok="AAA"
              label="Creme sobre navy"
            />
            <ContrastChip
              bg="#FFFFFF"
              fg="#B8783D"
              ratio="4.6"
              ok="AA"
              label="Copper sobre branco"
            />
            <ContrastChip
              bg="#0C2340"
              fg="#D4A574"
              ratio="6.8"
              ok="AAA"
              label="Copper Light · Navy"
            />
            <ContrastChip
              bg="#FAF6F0"
              fg="#006B82"
              ratio="5.4"
              ok="AA"
              label="Teal Deep · Creme"
            />
            <ContrastChip
              bg="#0096B4"
              fg="#FFFFFF"
              ratio="3.1"
              ok="fail"
              label="Branco sobre Teal — apenas títulos > 24 px"
            />
            <ContrastChip
              bg="#FAF6F0"
              fg="#1A1A1A"
              ratio="16.1"
              ok="AAA"
              label="Ink · Creme (corpo)"
            />
            <ContrastChip
              bg="#FAF6F0"
              fg="#4A4A4A"
              ratio="8.2"
              ok="AAA"
              label="Ink Soft · Creme (auxiliar)"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
