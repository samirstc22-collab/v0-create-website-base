import { FlaskConical, FileText, Stethoscope, TrendingUp, Users, BookOpen } from "lucide-react"

const services = [
  {
    icon: FlaskConical,
    title: "Portfolio Autoral",
    description: "Formulas exclusivas desenvolvidas para o perfil da sua farmacia e do seu publico. Nada de receitas genericas.",
    features: ["Formulas exclusivas", "Diferenciacao de mercado", "Protecao contra copia"],
  },
  {
    icon: FileText,
    title: "Protocolos Clinicos",
    description: "Protocolos validados para dermatologia, tricologia, estetica e areas especializadas com racional cientifico.",
    features: ["Racional documentado", "Casos clinicos", "Material para prescritores"],
  },
  {
    icon: Stethoscope,
    title: "Relacionamento com Prescritores",
    description: "Estrategias para conquistar medicos e profissionais da saude atraves de conteudo tecnico e resultados.",
    features: ["Materiais tecnicos", "Treinamento de equipe", "Eventos cientificos"],
  },
  {
    icon: TrendingUp,
    title: "Aumento de Margem",
    description: "Formulas premium com alto valor agregado que permitem praticar precos justos sem entrar na guerra de centavos.",
    features: ["Precificacao estrategica", "Valor percebido", "Fidelizacao"],
  },
  {
    icon: Users,
    title: "Treinamento de Equipe",
    description: "Capacitacao tecnica do seu time para atendimento diferenciado e manipulacao de alta performance.",
    features: ["Treinamento presencial", "Suporte continuo", "Atualizacao tecnica"],
  },
  {
    icon: BookOpen,
    title: "Conteudo e Marketing Tecnico",
    description: "Narrativas cientificas que posicionam sua farmacia como autoridade no mercado magistral.",
    features: ["Posts tecnicos", "Materiais educativos", "Posicionamento"],
  },
]

export function ConsultoriaMagistralServices() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8783D]/10 border border-[#B8783D]/20 text-[#B8783D] text-xs font-bold uppercase tracking-[2px] mb-6">
            Servicos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0C2340] tracking-tight mb-4">
            O que entrego na <em className="text-[#B8783D]">consultoria magistral</em>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma consultoria completa que transforma sua farmacia em referencia tecnica do mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#B8783D]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#B8783D]/10 flex items-center justify-center mb-6 group-hover:bg-[#B8783D]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#B8783D]" />
              </div>
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8783D]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
