import { Microscope, Beaker, FileSearch, RefreshCw, Globe, Truck } from "lucide-react"

const services = [
  {
    icon: Beaker,
    title: "Desenvolvimento de Prototipos",
    description: "Criacao de formulacoes com sensorial refinado, estabilidade comprovada e claims defensaveis.",
    features: ["Benchmarking de mercado", "Sensorial premium", "Testes de estabilidade"],
  },
  {
    icon: FileSearch,
    title: "Reformulacao e Otimizacao",
    description: "Melhoria de produtos existentes com foco em custo, performance sensorial e claims.",
    features: ["Analise de formula", "Otimizacao de custo", "Upgrade de sensorial"],
  },
  {
    icon: Microscope,
    title: "Validacao Cientifica",
    description: "Racional cientifico documentado para suportar claims e posicionamento de marketing.",
    features: ["Literatura cientifica", "Claims defensaveis", "Dossie tecnico"],
  },
  {
    icon: RefreshCw,
    title: "Transferencia de Tecnologia",
    description: "Suporte completo para escalonamento, do laboratorio a linha de producao industrial.",
    features: ["Scale-up", "Documentacao tecnica", "Treinamento de equipe"],
  },
  {
    icon: Globe,
    title: "Sourcing Internacional",
    description: "Acesso a ativos de ponta atraves de conexoes com fornecedores globais de materias-primas.",
    features: ["Ativos inovadores", "Fornecedores premium", "Tendencias globais"],
  },
  {
    icon: Truck,
    title: "Suporte a Producao",
    description: "Acompanhamento tecnico durante a producao industrial para garantir qualidade e reproducibilidade.",
    features: ["Lotes piloto", "Controle de qualidade", "Troubleshooting"],
  },
]

export function ConsultoriaIndustrialServices() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0db5c8]/10 border border-[#0db5c8]/20 text-[#0db5c8] text-xs font-bold uppercase tracking-[2px] mb-6">
            Servicos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0C2340] tracking-tight mb-4">
            O que entrego na <em className="text-[#0db5c8]">consultoria industrial</em>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            P&D de alta performance para industrias cosmeticas e farmaceuticas que buscam inovacao.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#0db5c8]/20 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0db5c8]/10 flex items-center justify-center mb-6 group-hover:bg-[#0db5c8]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[#0db5c8]" />
              </div>
              <h3 className="text-xl font-bold text-[#0C2340] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0db5c8]" />
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
