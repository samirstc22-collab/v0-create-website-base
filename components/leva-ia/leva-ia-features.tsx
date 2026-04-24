import { 
  FlaskConical, 
  Search, 
  FileText, 
  Lightbulb, 
  TrendingUp, 
  Shield,
  Microscope,
  BookOpen
} from "lucide-react"

export function LevaIAFeatures() {
  const features = [
    {
      icon: FlaskConical,
      title: "Formulacao Assistida",
      description: "IA sugere combinacoes de ativos, concentracoes e veiculos baseados em seu objetivo terapeutico.",
      color: "blue",
    },
    {
      icon: Search,
      title: "Busca Inteligente",
      description: "Encontre ativos por mecanismo de acao, indicacao clinica ou perfil de seguranca em segundos.",
      color: "purple",
    },
    {
      icon: FileText,
      title: "Geracao de Dossies",
      description: "Crie dossies tecnicos completos com referencias bibliograficas e DOIs automaticamente.",
      color: "cyan",
    },
    {
      icon: Lightbulb,
      title: "Sugestao de Ativos",
      description: "Receba recomendacoes personalizadas baseadas em tendencias e evidencia cientifica.",
      color: "amber",
    },
    {
      icon: TrendingUp,
      title: "Analise de Tendencias",
      description: "Acompanhe lancamentos de ativos e tendencias do mercado cosmetico global.",
      color: "emerald",
    },
    {
      icon: Shield,
      title: "Verificacao Regulatoria",
      description: "Confira compatibilidade com ANVISA, FDA e regulamentacoes internacionais.",
      color: "rose",
    },
    {
      icon: Microscope,
      title: "Compatibilidade",
      description: "Analise de incompatibilidades entre ativos e estabilidade de formulacoes.",
      color: "indigo",
    },
    {
      icon: BookOpen,
      title: "Base de Conhecimento",
      description: "Acesso a biblioteca de 10.000+ ativos com mecanismos, concentracoes e referencias.",
      color: "orange",
    },
  ]

  const colorMap = {
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-500" },
    purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-500" },
    cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", text: "text-cyan-500" },
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-500" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-500" },
    rose: { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-500" },
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/20", text: "text-indigo-500" },
    orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-500" },
  }

  return (
    <section id="features" className="py-28 px-6 lg:px-10 bg-[#fafbfc]">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-blue-500">
              Recursos
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Inteligencia artificial{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              para formuladores
            </span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Ferramentas desenvolvidas especificamente para o dia a dia de farmacias magistrais,
            industrias cosmeticas e consultores de formulacao.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const colors = colorMap[feature.color as keyof typeof colorMap]
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#0C2340]/8 hover:border-blue-500/30 hover:shadow-[0_16px_48px_rgba(59,130,246,0.1)] transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="font-serif text-lg text-[#0C2340] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
