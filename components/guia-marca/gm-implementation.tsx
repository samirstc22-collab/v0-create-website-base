function CodeBlock({
  label,
  language,
  code,
}: {
  label: string
  language: string
  code: string
}) {
  return (
    <div className="bg-[#0C2340] rounded-md overflow-hidden border border-[#1A3556]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#1A3556]">
        <p className="tn-eyebrow text-[10px] text-[#D4A574]">{label}</p>
        <p className="tn-data text-[10px] text-[#FAF6F0]/50">{language}</p>
      </div>
      <pre className="px-5 py-5 text-[12.5px] leading-relaxed overflow-x-auto">
        <code className="tn-data text-[#FAF6F0]/90 whitespace-pre">{code}</code>
      </pre>
    </div>
  )
}

export function GmImplementation() {
  return (
    <section id="implementacao" className="bg-white py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <header className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="tn-data text-xs text-[#B8783D]">08</span>
            <span className="h-px flex-1 max-w-[80px] bg-[#D8D2C8]" />
            <span className="tn-eyebrow text-[#0C2340]">
              Implementação técnica
            </span>
          </div>
          <h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl mb-4">
            Snippets prontos para o time de desenvolvimento
          </h2>
          <p className="tn-body text-[#4A4A4A] tn-measure text-base md:text-lg">
            Tokens, fontes e classes utilitárias já estão registrados no
            projeto. Use os snippets abaixo como referência canônica para
            qualquer nova página, e-mail transacional ou aplicação derivada
            do Tannuri Brand System.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6">
          <CodeBlock
            label="Carregamento de fontes · Next.js / app/layout.tsx"
            language="TypeScript"
            code={`import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
})

// Aplique todas as variáveis no <html>:
// <html className={\`\${inter.variable} \${playfair.variable} \${jetbrains.variable}\`}>`}
          />

          <CodeBlock
            label="Tokens cromáticos · app/globals.css"
            language="CSS"
            code={`@theme inline {
  /* Famílias */
  --font-display: var(--font-playfair), Georgia, serif;
  --font-body:    var(--font-outfit), Inter, sans-serif;
  --font-mono:    var(--font-jetbrains), monospace;

  /* Paleta primária Tannuri */
  --color-tn-navy:        #0C2340;
  --color-tn-teal:        #0096B4;
  --color-tn-copper:      #B8783D;
  --color-tn-creme:       #FAF6F0;

  /* Neutros editoriais */
  --color-tn-ink:         #1A1A1A;
  --color-tn-ink-soft:    #4A4A4A;
  --color-tn-gray-line:   #D8D2C8;

  /* Funcionais */
  --color-tn-success:     #2A8B6A;
  --color-tn-warning:     #D8A437;
  --color-tn-alert:       #B33A3A;
}`}
          />

          <CodeBlock
            label="Classes editoriais · uso em JSX"
            language="TSX"
            code={`{/* Display de capa */}
<h1 className="tn-display text-[#0C2340]
               text-[44px] md:text-[80px] lg:text-[96px]">
  Mais Evidência em Ciência
</h1>

{/* H1 editorial */}
<h2 className="tn-h1 text-[#0C2340] text-3xl md:text-5xl">
  Sistema cromático
</h2>

{/* Eyebrow técnico */}
<span className="tn-eyebrow text-[#B8783D]">
  Edição 04 · 2026
</span>

{/* Citação editorial */}
<blockquote className="tn-quote text-[#0C2340] text-2xl">
  "A pele responde a sequência..."
</blockquote>

{/* Dado técnico */}
<span className="tn-data text-[#0096B4]">
  DOI 10.1002/cpdd.806
</span>`}
          />

          <CodeBlock
            label="Logo responsivo · padrão de uso"
            language="TSX"
            code={`import { Logo } from "@/components/logo"

// Header desktop (lockup completo)
<div className="hidden lg:block">
  <Logo size="lg" showText variant="dark" />
</div>

// Header tablet
<div className="hidden md:block lg:hidden">
  <Logo size="md" showText variant="dark" />
</div>

// Header mobile (apenas monograma)
<div className="md:hidden">
  <Logo size="sm" showText={false} variant="dark" />
</div>

// Footer / fundos navy
<Logo size="md" variant="light" />`}
          />

          <CodeBlock
            label="Botão primário · padrão Tannuri"
            language="TSX"
            code={`<button
  className="tn-h3 text-[12px] text-[#FAF6F0]
             bg-[#B8783D] hover:bg-[#a66a32]
             px-6 py-3 rounded-sm
             focus-visible:outline-2
             focus-visible:outline-offset-2
             focus-visible:outline-[#B8783D]
             transition-colors"
>
  Acessar conteúdo
</button>

{/* Secundário (outline) */}
<button
  className="tn-h3 text-[12px] text-[#0C2340]
             border border-[#0C2340]
             hover:bg-[#0C2340] hover:text-[#FAF6F0]
             px-6 py-3 rounded-sm transition-colors"
>
  Saber mais
</button>`}
          />

          <CodeBlock
            label="Acessibilidade · checklist mínimo"
            language="A11y"
            code={`✓ html lang="pt-BR" no <html>
✓ alt= em todas as <img> (vazio se decorativo)
✓ aria-label em botões só com ícone
✓ outline copper em :focus-visible (nunca outline:none)
✓ contraste ≥ 4.5:1 corpo · 3:1 títulos grandes
✓ touch targets ≥ 44 × 44 px em mobile
✓ prefers-reduced-motion respeitado
✓ ordem semântica h1 → h6 sem saltos
✓ landmarks: <header>, <nav>, <main>, <footer>
✓ skip-link "Pular para o conteúdo" no topo`}
          />
        </div>

        {/* Closing block */}
        <div className="mt-16 bg-[#FAF6F0] border border-[#D8D2C8] rounded-md p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p className="tn-eyebrow text-[#B8783D] mb-3">
                Governança da marca
              </p>
              <h3 className="tn-h1 text-[#0C2340] text-2xl md:text-3xl mb-3">
                Curadoria e revisão de aplicações
              </h3>
              <p className="tn-body text-[#4A4A4A] tn-measure">
                Toda aplicação destas marcas está sujeita à curadoria do
                titular. Solicitações de uso institucional, parcerias ou
                licenciamento devem ser endereçadas pelos canais oficiais.
                Pull requests que alterem tokens cromáticos ou tipográficos
                exigem aprovação explícita.
              </p>
            </div>
            <div className="md:text-right">
              <p className="tn-h2 text-[#0C2340] text-lg mb-1">
                Prof. Samir Tannuri
              </p>
              <p className="tn-body text-sm text-[#4A4A4A] mb-4">
                Curadoria · Direção criativa
              </p>
              <p className="tn-data text-xs text-[#B8783D]">
                @samir_farma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
