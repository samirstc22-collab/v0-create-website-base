import { MessageSquare, FileSearch, FlaskConical, BookOpen, CheckCircle2 } from "lucide-react"

export function ProtocolosProcess() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Briefing Clinico",
      description: "Entendimento do perfil de pacientes, objetivos terapeuticos e diferenciais desejados para sua clinica.",
    },
    {
      icon: FileSearch,
      number: "02",
      title: "Analise Tecnica",
      description: "Revisao de literatura, selecao de ativos e definicao de concentracoes baseadas em evidencia.",
    },
    {
      icon: FlaskConical,
      number: "03",
      title: "Desenvolvimento",
      description: "Formulacao do protocolo completo com fichas tecnicas, orientacoes de uso e materiais de suporte.",
    },
    {
      icon: BookOpen,
      number: "04",
      title: "Treinamento",
      description: "Capacitacao da equipe clinica para aplicacao do protocolo e manejo de intercorrencias.",
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Acompanhamento",
      description: "Suporte continuo para ajustes, evolucao de casos e atualizacoes do protocolo.",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-[#fafbfc]">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0C2340]/5 border border-[#0C2340]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#0C2340]">
              Como Funciona
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Do briefing ao{" "}
            <span className="text-[#0d7a80]">protocolo validado</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Um processo estruturado para garantir que seu protocolo seja cientificamente
            embasado, clinicamente eficaz e diferenciado no mercado.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d7a80]/20 via-[#0d7a80]/40 to-[#0d7a80]/20" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-white border-2 border-[#0d7a80]/20 flex items-center justify-center shadow-[0_4px_20px_rgba(13,122,128,0.1)]">
                  <span className="font-mono text-lg font-bold text-[#0d7a80]">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#0d7a80]/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#0d7a80]" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg text-[#0C2340] mb-2">{step.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { value: "127+", label: "Protocolos desenvolvidos" },
            { value: "45+", label: "Clinicas atendidas" },
            { value: "98%", label: "Taxa de satisfacao" },
            { value: "15 dias", label: "Tempo medio de entrega" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-[#0C2340]/8 text-center">
              <div className="font-serif text-3xl text-[#0d7a80] mb-2">{stat.value}</div>
              <div className="text-sm text-[#64748b]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
