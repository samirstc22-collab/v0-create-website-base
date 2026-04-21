"use client"

import { useState } from "react"
import { Send, Brain, CheckCircle2, ExternalLink, Copy, BookOpen } from "lucide-react"

const examplePrompts = [
  "Formule um sérum vitamina C 15% estabilizado",
  "Sugira conservantes para emulsão O/A pH 5.5",
  "Calcule HLB para emulsão com 20% fase oleosa",
  "Alternativas ao ácido hialurônico de baixo PM",
]

const sampleResponse = {
  formula: {
    name: "Sérum Antioxidante Vitamina C 15%",
    indication: "Anti-idade, clareador, antioxidante",
    ingredients: [
      { name: "Ácido L-Ascórbico", conc: "15%", function: "Antioxidante principal" },
      { name: "Vitamina E (Tocoferol)", conc: "1%", function: "Co-antioxidante" },
      { name: "Ácido Ferúlico", conc: "0.5%", function: "Estabilizante + sinergista" },
      { name: "Propilenoglicol", conc: "10%", function: "Umectante + solubilizante" },
      { name: "Água purificada", conc: "qsp 100%", function: "Veículo" },
    ],
    ph: "3.0 - 3.5",
    stability: "6 meses (refrigerado, frasco âmbar)",
  },
  confidence: 97,
  references: [
    { title: "Topical Vitamin C and the Skin", journal: "J Clin Aesthet Dermatol", year: 2017 },
    { title: "Ferulic Acid Stabilizes Vitamin C", journal: "J Invest Dermatol", year: 2005 },
  ],
}

export function AIDemo() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowResponse(true)
    }, 2000)
  }

  const handleExampleClick = (example: string) => {
    setPrompt(example)
    setShowResponse(false)
  }

  return (
    <section id="demo" className="relative bg-[#050a12] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#4a9eff]/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full px-4 py-2 mb-6">
            <Brain className="w-4 h-4 text-[#4a9eff]" />
            <span className="text-xs text-[#4a9eff] font-bold tracking-[2px] uppercase">
              Demonstração Interativa
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Experimente agora
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Faça uma pergunta e veja o Formulator AI em ação. Resultados baseados em ciência real.
          </p>
        </div>

        {/* Demo interface */}
        <div className="bg-[#0a1221]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Input area */}
          <div className="p-6 border-b border-white/5">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value)
                  setShowResponse(false)
                }}
                placeholder="Faça sua pergunta de formulação..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4a9eff]/50 transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] text-white px-6 py-4 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(74,158,255,0.3)] transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>

            {/* Example prompts */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs text-white/40">Experimente:</span>
              {examplePrompts.map((example) => (
                <button
                  key={example}
                  onClick={() => handleExampleClick(example)}
                  className="text-xs text-[#4a9eff]/80 bg-[#4a9eff]/10 hover:bg-[#4a9eff]/20 px-3 py-1.5 rounded-lg transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Response area */}
          <div className="p-6 min-h-[400px]">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center h-[350px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4a9eff] to-[#8b5cf6] flex items-center justify-center mb-4 animate-pulse">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="text-white/60">Analisando base de dados...</p>
                <div className="flex gap-1 mt-4">
                  <div className="w-2 h-2 rounded-full bg-[#4a9eff] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#4a9eff] animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 rounded-full bg-[#4a9eff] animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            ) : showResponse ? (
              <div className="space-y-6">
                {/* Confidence badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#28c840]" />
                    <span className="text-sm text-[#28c840] font-semibold">Resposta validada</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#28c840]/10 px-3 py-1.5 rounded-lg">
                    <span className="text-xs text-white/60">Confiança:</span>
                    <span className="text-sm text-[#28c840] font-bold">{sampleResponse.confidence}%</span>
                  </div>
                </div>

                {/* Formula card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl text-white font-semibold">{sampleResponse.formula.name}</h3>
                      <p className="text-sm text-white/50">{sampleResponse.formula.indication}</p>
                    </div>
                    <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <Copy className="w-4 h-4 text-white/60" />
                    </button>
                  </div>

                  {/* Ingredients table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 text-white/50 font-medium">Ingrediente</th>
                          <th className="text-left py-2 text-white/50 font-medium">Concentração</th>
                          <th className="text-left py-2 text-white/50 font-medium">Função</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleResponse.formula.ingredients.map((ing, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="py-2.5 text-white">{ing.name}</td>
                            <td className="py-2.5 text-[#4a9eff] font-mono">{ing.conc}</td>
                            <td className="py-2.5 text-white/60">{ing.function}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Specs */}
                  <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">pH</span>
                      <p className="text-white font-semibold">{sampleResponse.formula.ph}</p>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">Estabilidade</span>
                      <p className="text-white font-semibold">{sampleResponse.formula.stability}</p>
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="text-sm text-[#8b5cf6] font-semibold">Referências científicas</span>
                  </div>
                  <div className="space-y-2">
                    {sampleResponse.references.map((ref, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-white/70">
                          {ref.title}. <span className="text-white/50">{ref.journal}, {ref.year}</span>
                        </span>
                        <ExternalLink className="w-4 h-4 text-white/30" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[350px] text-center">
                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-4">
                  <Brain className="w-10 h-10 text-white/20" />
                </div>
                <p className="text-white/40 max-w-sm">
                  Digite uma pergunta sobre formulação cosmética e veja a IA em ação.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
