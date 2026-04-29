function RulesColumn({
  title,
  variant,
  rules,
}: {
  title: string
  variant: "do" | "dont"
  rules: string[]
}) {
  const isDo = variant === "do"
  const accent = isDo ? "#2A8B6A" : "#B33A3A"
  const symbol = isDo ? "✓" : "×"
  const label = isDo ? "Faça" : "Não faça"

  return (
    <article className="bg-white border border-[#D8D2C8] rounded-md overflow-hidden">
      <header
        className="px-6 py-5 flex items-baseline justify-between"
        style={{ background: accent + "10" }}
      >
        <div>
          <p className="tn-eyebrow text-[10px] mb-1" style={{ color: accent }}>
            {label}
          </p>
          <h3 className="tn-h2 text-[#0C2340] text-lg">{title}</h3>
        </div>
        <span
          className="font-display text-3xl"
          style={{ color: accent }}
          aria-hidden
        >
          {symbol}
        </span>
      </header>
      <ul className="p-6 space-y-3">
        {rules.map((r, i) => (
          <li key={i} className="flex gap-3 tn-body text-sm text-[#1A1A1A]">
            <span
              className="tn-data text-xs mt-0.5"
              style={{ color: accent }}
            >
              {symbol}
            </span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function GmRules() {
  return (
    <section
      id="regras"
      className="bg-[#FAF6F0] py-20 md:py-28 border-b border-[#D8D2C8]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">07</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">
              Boas práticas e limites
            </span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            O que fazer e o que evitar
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            A integridade do sistema visual depende de aplicações
            disciplinadas. As regras abaixo são vinculantes para qualquer
            comunicação assinada pelas três marcas — sem exceção editorial.
          </p>
        </header>

        <div className="space-y-12">
          {/* Logos */}
          <div>
            <h3 className="tn-h2 text-[#0C2340] text-xl md:text-2xl mb-5">
              Aplicação dos logotipos
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <RulesColumn
                title="Logotipos"
                variant="do"
                rules={[
                  "Mantenha a área de proteção mínima ao redor de cada marca (x/2 do diâmetro)",
                  "Use sempre os arquivos vetoriais aprovados (SVG / EPS)",
                  "Aplique o monograma ST em selos editoriais e capítulos",
                  "Use o lockup horizontal em cabeçalhos estreitos",
                  "Respeite os tamanhos mínimos legíveis: 28 px digital, 10 mm impresso",
                ]}
              />
              <RulesColumn
                title="Logotipos"
                variant="dont"
                rules={[
                  "Não distorça, estique ou reposicione elementos da marca",
                  "Não aplique sombras, brilhos, bevels ou bordas adicionais",
                  "Não recrie a marca em fontes equivalentes (Lora, Cormorant, etc.)",
                  "Não use o monograma sobre fotografias com baixo contraste",
                  "Não combine duas marcas no mesmo lockup sem aprovação curatorial",
                ]}
              />
            </div>
          </div>

          {/* Color */}
          <div>
            <h3 className="tn-h2 text-[#0C2340] text-xl md:text-2xl mb-5">
              Aplicação cromática
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <RulesColumn
                title="Cores"
                variant="do"
                rules={[
                  "Use o creme como superfície editorial dominante",
                  "Reserve copper para acentos editoriais e ornamentos",
                  "Use teal apenas em contextos clínico-científicos",
                  "Garanta contraste AA mínimo entre texto e fundo",
                  "Documente toda nova combinação no registry de tokens",
                ]}
              />
              <RulesColumn
                title="Cores"
                variant="dont"
                rules={[
                  "Não combine três cores primárias na mesma área compacta",
                  "Não use copper como cor de corpo de texto",
                  "Não introduza gradientes de marca arbitrários",
                  "Não use o teal como fundo para parágrafos longos",
                  "Não substitua hex por aproximações (use os tokens exatos)",
                ]}
              />
            </div>
          </div>

          {/* Tone of voice */}
          <div>
            <h3 className="tn-h2 text-[#0C2340] text-xl md:text-2xl mb-5">
              Tom de voz e composição
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <RulesColumn
                title="Voz editorial"
                variant="do"
                rules={[
                  "Escreva com rigor científico — frases curtas, ativas, verificáveis",
                  "Cite DOI / PMID em afirmações técnicas (formato JetBrains)",
                  "Use italic Playfair em manifestos e citações curtas",
                  "Mantenha 65–75 caracteres por linha em corpo editorial",
                  "Atribua autoria explicitamente em conteúdos clínicos",
                ]}
              />
              <RulesColumn
                title="Voz editorial"
                variant="dont"
                rules={[
                  "Não use exclamações, emojis ou jargão de marketing genérico",
                  "Não escreva afirmações clínicas sem evidência referenciada",
                  "Não use caixa alta em parágrafos longos — apenas em eyebrows",
                  "Não misture vozes (consultor, IA, marca) sem disambiguação",
                  "Não traduza termos técnicos consagrados (INCI, MMP, ℞)",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
