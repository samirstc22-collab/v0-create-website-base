import { Clock, Target, FileText, Video, CheckCircle2 } from "lucide-react"

export function MentoriaSessions() {
  const sessions = [
    {
      number: "01",
      title: "Diagnostico Tecnico",
      duration: "90 min",
      focus: "Analise completa do seu cenario atual",
      description: "Mapeamento de gaps tecnicos, identificacao de oportunidades de melhoria e definicao de prioridades para o trimestre.",
      deliverables: [
        "Relatorio de diagnostico completo",
        "Matriz de prioridades tecnicas",
        "Checklist de acoes imediatas",
      ],
      color: "#0d7a80",
    },
    {
      number: "02",
      title: "Reformulacao Estrategica",
      duration: "90 min",
      focus: "Revisao de formulas e processos",
      description: "Analise critica de 3-5 formulas-chave do seu portfolio com sugestoes de otimizacao e adequacao regulatoria.",
      deliverables: [
        "Analise de estabilidade",
        "Sugestoes de substituicao de ativos",
        "Otimizacao de custo-eficacia",
      ],
      color: "#B8783D",
    },
    {
      number: "03",
      title: "Tendencias & Inovacao",
      duration: "90 min",
      focus: "Ativos emergentes e tendencias globais",
      description: "Panorama de ingredientes emergentes, tendencias de mercado e oportunidades de diferenciacao para seu segmento.",
      deliverables: [
        "Dossie de tendencias 2025",
        "Lista de ativos recomendados",
        "Fornecedores validados",
      ],
      color: "#1a4d6e",
    },
    {
      number: "04",
      title: "Plano de Acao",
      duration: "90 min",
      focus: "Roadmap personalizado",
      description: "Consolidacao do aprendizado em um plano de acao trimestral com metas, prazos e indicadores de sucesso.",
      deliverables: [
        "Roadmap trimestral completo",
        "KPIs de acompanhamento",
        "Acesso a grupo de suporte",
      ],
      color: "#5a2e0a",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-[#fafbfc]">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0C2340]/5 border border-[#0C2340]/10 rounded-full px-4 py-2 mb-6">
            <Video className="w-4 h-4 text-[#0C2340]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#0C2340]">
              4 Sessoes Tecnicas
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Consultoria direcionada para{" "}
            <span className="text-[#B8783D]">duvidas reais</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Cada sessao foi desenhada para resolver desafios especificos da industria cosmetica
            e farmacias magistrais. Atendimento 1:1 com materiais exclusivos.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sessions.map((session, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl p-8 border border-[#0C2340]/8 hover:border-[#B8783D]/30 hover:shadow-[0_20px_60px_rgba(12,35,64,0.1)] transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-mono text-2xl font-bold text-white"
                  style={{ backgroundColor: session.color }}
                >
                  {session.number}
                </div>
                <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-full px-3 py-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#64748b]" />
                  <span className="text-xs font-semibold text-[#64748b]">{session.duration}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#0C2340] mb-2">{session.title}</h3>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-4 h-4 text-[#B8783D]" />
                <span className="text-sm font-semibold text-[#B8783D]">{session.focus}</span>
              </div>
              <p className="text-base text-[#64748b] leading-relaxed mb-6">{session.description}</p>

              {/* Deliverables */}
              <div className="border-t border-[#0C2340]/8 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-4 h-4 text-[#0C2340]" />
                  <span className="text-xs font-bold tracking-[1.5px] uppercase text-[#0C2340]">
                    Entregaveis
                  </span>
                </div>
                <div className="space-y-3">
                  {session.deliverables.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-[#475569]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#94a3b8]">
            Todas as sessoes sao gravadas e disponibilizadas para revisao.
            Materiais complementares enviados em ate 48h apos cada encontro.
          </p>
        </div>
      </div>
    </section>
  )
}
