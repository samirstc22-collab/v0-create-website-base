/* ----- Reusable section header ----- */
function SectionHeader({
  num,
  eyebrow,
  title,
  lede,
}: {
  num: string
  eyebrow: string
  title: string
  lede: string
}) {
  return (
    <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-5">
        <span className="tn-data text-xs text-[#B8783D]">{num}</span>
        <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
        <span className="tn-eyebrow text-[#0C2340]">{eyebrow}</span>
      </div>
      <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
        {title}
      </h2>
      <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
        {lede}
      </p>
    </header>
  )
}

/* ----- Reusable logo lockup ----- */
function STLockup({
  bg = "#FAF6F0",
  navy = "#0C2340",
  copper = "#B8783D",
  inverse = false,
}: {
  bg?: string
  navy?: string
  copper?: string
  inverse?: boolean
}) {
  return (
    <div
      className="aspect-[4/3] rounded-md flex flex-col items-center justify-center gap-4 p-8 border border-[#D8D2C8]"
      style={{ background: bg }}
    >
      {/* Monogram */}
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        <div
          className="absolute inset-0 rounded-full border-[3px]"
          style={{ borderColor: navy }}
        />
        <div
          className="absolute inset-2 rounded-full border"
          style={{ borderColor: navy, opacity: 0.3 }}
        />
        {/* 12 / 6 dots */}
        <span
          className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: copper }}
        />
        <span
          className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
          style={{ background: copper }}
        />
        <div className="absolute inset-0 flex items-center justify-center font-display text-3xl md:text-4xl font-extrabold tracking-tight">
          <span style={{ color: navy }}>S</span>
          <span style={{ color: copper }}>T</span>
        </div>
      </div>

      <div className="text-center">
        <p
          className="tn-h1 text-xl md:text-2xl"
          style={{ color: inverse ? "#FAF6F0" : navy }}
        >
          SAMIR TANNURI
        </p>
        <p
          className="tn-quote text-sm md:text-base mt-1"
          style={{ color: inverse ? copper : copper }}
        >
          Mais Evidência em Ciência
        </p>
        <p
          className="tn-eyebrow text-[10px] mt-3"
          style={{ color: inverse ? "#FAF6F0" : navy, opacity: 0.7 }}
        >
          ST · Consultoria
        </p>
      </div>
    </div>
  )
}

/* ----- Clube selo ----- */
function ClubeSelo({
  bg = "#FAF6F0",
  ring = "#0C2340",
  fg = "#0C2340",
  accent = "#B8783D",
}: {
  bg?: string
  ring?: string
  fg?: string
  accent?: string
}) {
  return (
    <div
      className="aspect-[4/3] rounded-md flex items-center justify-center p-8 border border-[#D8D2C8]"
      style={{ background: bg }}
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <div
          className="absolute inset-0 rounded-full border-[3px]"
          style={{ borderColor: ring }}
        />
        <div
          className="absolute inset-3 rounded-full border"
          style={{ borderColor: ring, opacity: 0.4 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
          <span
            className="font-display text-3xl md:text-4xl"
            style={{ color: accent }}
          >
            ℞
          </span>
          <span
            className="tn-eyebrow text-[9px] md:text-[10px] mt-1"
            style={{ color: fg, opacity: 0.7 }}
          >
            CLUBE DE
          </span>
          <span
            className="tn-quote text-lg md:text-xl"
            style={{ color: fg }}
          >
            Fórmulas
          </span>
        </div>
      </div>
    </div>
  )
}

/* ----- IA Formulator símbolo ----- */
function FormulatorMark({
  bg = "#FFFFFF",
  navy = "#0C2340",
  teal = "#0096B4",
  copper = "#B8783D",
}: {
  bg?: string
  navy?: string
  teal?: string
  copper?: string
}) {
  return (
    <div
      className="aspect-[4/3] rounded-md flex flex-col items-center justify-center p-8 gap-5 border border-[#D8D2C8]"
      style={{ background: bg }}
    >
      <svg
        viewBox="0 0 120 120"
        className="w-24 h-24 md:w-28 md:h-28"
        aria-hidden
      >
        {/* Outer hexagon */}
        <polygon
          points="60,8 108,34 108,86 60,112 12,86 12,34"
          fill="none"
          stroke={navy}
          strokeWidth="3"
        />
        {/* Inner hex */}
        <polygon
          points="60,28 92,46 92,74 60,92 28,74 28,46"
          fill="none"
          stroke={teal}
          strokeWidth="1.4"
        />
        {/* Inference vectors */}
        {[
          [60, 8],
          [108, 34],
          [108, 86],
          [60, 112],
          [12, 86],
          [12, 34],
        ].map(([x, y], i) => (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={60}
            y2={60}
            stroke={copper}
            strokeWidth="1.2"
            strokeOpacity="0.55"
          />
        ))}
        {/* Atoms */}
        {[
          [60, 8],
          [108, 34],
          [108, 86],
          [60, 112],
          [12, 86],
          [12, 34],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill={navy} />
        ))}
        {/* Pulse ring */}
        <circle
          cx="60"
          cy="60"
          r="14"
          fill="none"
          stroke={teal}
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        {/* Neural core */}
        <circle cx="60" cy="60" r="6" fill={teal} />
      </svg>

      <p className="tn-h1 text-xl md:text-2xl" style={{ color: navy }}>
        IA<span style={{ color: teal }}>Formulator</span>
      </p>
      <p
        className="tn-eyebrow text-[10px] text-center"
        style={{ color: navy, opacity: 0.7 }}
      >
        Curadoria Inteligente · Fórmulas Magistrais
      </p>
    </div>
  )
}

/* ----- Spec list row ----- */
function SpecRow({
  label,
  value,
  mono,
}: {
  label: string
  value: string
  mono?: boolean
}) {
  return (
    <div className="flex items-baseline justify-between py-2.5 border-b border-[#D8D2C8] last:border-0">
      <dt className="tn-body text-sm text-[#4A4A4A]">{label}</dt>
      <dd
        className={`text-sm text-[#0C2340] ${mono ? "tn-data" : "font-medium"}`}
      >
        {value}
      </dd>
    </div>
  )
}

export function GmLogos() {
  return (
    <section
      id="logotipo"
      className="bg-white py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <SectionHeader
          num="01"
          eyebrow="Logotipos · Construção e variações"
          title="Sistema de marcas Tannuri"
          lede="Três logotipos compõem o ecossistema técnico-científico. Cada marca responde a um propósito clínico distinto, mas compartilha a mesma gramática visual: rigor, responsabilidade e profundidade editorial."
        />

        {/* === Marca 1: Samir Tannuri Consultoria === */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl">
              Samir Tannuri Consultoria Científica
            </h3>
            <span className="tn-eyebrow text-[#B8783D]">
              Marca-mãe do sistema
            </span>
          </div>
          <p className="tn-body text-[#4A4A4A] tn-measure mb-8">
            Representa a autoridade técnica e a curadoria científica do
            consultor sob o conceito{" "}
            <span className="italic">&ldquo;Mais Evidência em Ciência&rdquo;</span>.
            Construção tipográfica em Playfair Display, ancorada pelo monograma
            circular ST em traçado contínuo.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <STLockup />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Versão primária · Fundo creme
              </p>
            </div>
            <div>
              <STLockup bg="#FFFFFF" />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Monocromática · Navy
              </p>
            </div>
            <div>
              <STLockup
                bg="#0C2340"
                navy="#FAF6F0"
                copper="#D4A574"
                inverse
              />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Inversa · Sobre navy
              </p>
            </div>
          </div>

          {/* Construction specs */}
          <div className="grid md:grid-cols-2 gap-6 mt-10 bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <div>
              <p className="tn-eyebrow text-[#B8783D] mb-4">
                Especificações de construção
              </p>
              <dl>
                <SpecRow label="Razão diâmetro/altura wordmark" value="2,8 : 1" mono />
                <SpecRow label="Anel externo" value="x · 1,5%" mono />
                <SpecRow label="Anel interno" value="x · 0,4%" mono />
                <SpecRow label="Letra S — peso/cor" value="Playfair 800 · Navy" />
                <SpecRow label="Letra T — peso/cor" value="Playfair 800 · Copper" />
              </dl>
            </div>
            <div>
              <p className="tn-eyebrow text-[#B8783D] mb-4">
                Tamanhos mínimos &amp; proteção
              </p>
              <dl>
                <SpecRow label="Mínimo digital" value="28 px" mono />
                <SpecRow label="Mínimo impresso" value="10 mm" mono />
                <SpecRow label="Área de proteção" value="x / 2 ao redor" mono />
                <SpecRow label="Header desktop" value="44–56 px de altura" mono />
                <SpecRow label="Header mobile" value="32–40 px de altura" mono />
              </dl>
            </div>
          </div>
        </div>

        {/* === Marca 2: Clube de Fórmulas === */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl">
              Clube de Fórmulas
            </h3>
            <span className="tn-eyebrow text-[#B8783D]">
              Marca editorial · Selo institucional
            </span>
          </div>
          <p className="tn-body text-[#4A4A4A] tn-measure mb-8">
            Selo editorial dos conteúdos clínicos e formativos. Cálice
            farmacêutico estilizado, integrado ao símbolo magistral{" "}
            <span className="font-display text-lg align-middle">℞</span> e
            enquadrado por moldura editorial circular — síntese visual entre
            tradição farmacotécnica e curadoria autoral.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <ClubeSelo />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Selo principal · Creme
              </p>
            </div>
            <div>
              <ClubeSelo bg="#0C2340" ring="#FAF6F0" fg="#FAF6F0" accent="#D4A574" />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Selo · Navy
              </p>
            </div>
            <div>
              <ClubeSelo bg="#FFFFFF" ring="#B8783D" fg="#B8783D" accent="#B8783D" />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Selo · Copper
              </p>
            </div>
          </div>
        </div>

        {/* === Marca 3: IA Formulator === */}
        <div>
          <div className="flex items-baseline justify-between mb-6 flex-wrap gap-3">
            <h3 className="tn-h2 text-[#0C2340] text-2xl md:text-3xl">
              IA Formulator
            </h3>
            <span className="tn-eyebrow text-[#0096B4]">
              Marca tecnológica · Símbolo molecular
            </span>
          </div>
          <p className="tn-body text-[#4A4A4A] tn-measure mb-8">
            Plataforma de IA dedicada à curadoria de fórmulas magistrais. O
            símbolo combina nó molecular hexagonal (anel benzênico estilizado)
            com nodo neural central, traduzindo a interseção entre química
            medicinal e raciocínio computacional.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <FormulatorMark />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Versão primária · Branco
              </p>
            </div>
            <div>
              <FormulatorMark bg="#0C2340" navy="#FAF6F0" teal="#4FB8CB" copper="#D4A574" />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Navy · Cyan
              </p>
            </div>
            <div>
              <FormulatorMark bg="#FAF6F0" navy="#006B82" teal="#0096B4" copper="#B8783D" />
              <p className="tn-caption text-[#4A4A4A] mt-3">
                Creme · Teal
              </p>
            </div>
          </div>

          <div className="mt-10 bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-6 md:p-8">
            <p className="tn-eyebrow text-[#0096B4] mb-4">
              Anatomia do símbolo
            </p>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-1">
              <dl>
                <SpecRow label="Hexágono externo (N1–N6)" value="Navy · 6 px" mono />
                <SpecRow label="Hexágono interno" value="Teal · 1.2 px" mono />
                <SpecRow label="Vetores de inferência" value="Copper · 55%" mono />
              </dl>
              <dl>
                <SpecRow label="Núcleo neural" value="Teal · sólido" mono />
                <SpecRow label="Anel pulsar" value="Teal · 40%" mono />
                <SpecRow label="Mínimo digital" value="32 px" mono />
              </dl>
            </div>
          </div>
        </div>

        {/* Responsive guidance */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Desktop · ≥ 1024 px",
              h: "44–56 px",
              note: "Lockup completo (símbolo + wordmark + tagline) em headers fixos.",
            },
            {
              title: "Tablet · 768–1023 px",
              h: "40–48 px",
              note: "Lockup horizontal compacto. Tagline pode ser ocultada se largura < 720 px.",
            },
            {
              title: "Mobile · < 768 px",
              h: "32–40 px",
              note: "Apenas monograma ou lockup compacto. Nunca aplicar lockup vertical em headers.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="border border-[#D8D2C8] rounded-md p-6 bg-white"
            >
              <p className="tn-eyebrow text-[#0096B4] mb-3">{b.title}</p>
              <p className="tn-h2 text-[#0C2340] text-2xl mb-2">{b.h}</p>
              <p className="tn-body text-sm text-[#4A4A4A]">{b.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
