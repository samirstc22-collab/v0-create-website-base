"use client"

import { Play, CheckCircle2 } from "lucide-react"

export function LevaIADemo() {
  const useCases = [
    "Farmacia magistral buscando otimizar tempo de formulacao",
    "Industria cosmetica desenvolvendo novos produtos",
    "Consultores criando dossies tecnicos para clientes",
    "Prescritores buscando evidencias para protocolos",
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Video Preview */}
          <div className="relative">
            <div className="aspect-video bg-[#1e293b] rounded-2xl border border-white/10 overflow-hidden relative">
              {/* Placeholder for video */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <button className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(59,130,246,0.4)]">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                  <p className="text-white/60 text-sm">Ver demonstracao em video</p>
                </div>
              </div>

              {/* Interface Preview */}
              <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20" />
                    <div className="h-3 w-32 bg-white/20 rounded" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="h-3 w-full bg-white/10 rounded" />
                    <div className="h-3 w-3/4 bg-white/10 rounded" />
                    <div className="h-3 w-5/6 bg-white/10 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-xs text-[#64748b] mb-1">Tempo economizado</div>
              <div className="font-serif text-2xl text-blue-500">73%</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold tracking-[2px] uppercase text-blue-400">
                Veja na Pratica
              </span>
            </div>

            <h2 className="font-serif text-[clamp(32px,4vw,44px)] text-white mb-6 leading-[1.1]">
              IA que entende o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                seu negocio
              </span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Diferente de chatbots genericos, nossa IA foi treinada especificamente
              com conhecimento tecnico de formulacao magistral e cosmetica. Ela entende
              concentracoes, incompatibilidades e regulamentacoes.
            </p>

            {/* Use Cases */}
            <div className="space-y-4 mb-10">
              {useCases.map((useCase, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white/80">{useCase}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5511981403000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(59,130,246,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(59,130,246,0.45)] transition-all"
            >
              Agendar Demonstracao
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
