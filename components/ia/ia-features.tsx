import { Brain, Beaker, Shield, Zap, BookOpen, MessageSquare } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Base de Conhecimento Exclusiva",
    description: "Treinada com anos de experiencia em formulacao magistral, incluindo ativos, veiculos e protocolos validados.",
  },
  {
    icon: Beaker,
    title: "Sugestoes de Formulacao",
    description: "Receba sugestoes de formulacoes completas baseadas em seus objetivos terapeuticos e ingredientes disponiveis.",
  },
  {
    icon: Shield,
    title: "Verificacao de Compatibilidade",
    description: "Identifique incompatibilidades entre ativos e veiculos antes de formular, evitando erros e desperdicio.",
  },
  {
    icon: Zap,
    title: "Respostas Instantaneas",
    description: "Tire duvidas em segundos, sem precisar pesquisar em livros ou aguardar respostas de especialistas.",
  },
  {
    icon: BookOpen,
    title: "Referencias Cientificas",
    description: "Cada resposta e fundamentada em literatura cientifica e experiencia pratica de formulacao.",
  },
  {
    icon: MessageSquare,
    title: "Conversas Contextuais",
    description: "A IA entende o contexto das suas perguntas e mantem o historico para respostas mais precisas.",
  },
]

export function IAFeatures() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#0C2340] tracking-tight mb-4">
            O que a IA pode fazer por <em className="text-[#0db5c8]">voce</em>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Um assistente completo para acelerar seu trabalho de formulacao.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#0db5c8]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0db5c8]/10 flex items-center justify-center mb-6 group-hover:bg-[#0db5c8]/20 transition-colors">
                <feature.icon className="w-7 h-7 text-[#0db5c8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
