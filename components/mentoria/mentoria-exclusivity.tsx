import { Shield, Lock, Users, Award, Sparkles, BookOpen } from "lucide-react"

export function MentoriaExclusivity() {
  const exclusiveFeatures = [
    {
      icon: Shield,
      title: "Acesso Privilegiado",
      description: "Atendimento direto comigo, sem intermediarios. Tire duvidas em tempo real durante as sessoes.",
    },
    {
      icon: Lock,
      title: "Materiais Exclusivos",
      description: "Formularios, protocolos e dossies tecnicos que nao estao disponiveis em nenhum outro canal.",
    },
    {
      icon: Users,
      title: "Comunidade Fechada",
      description: "Grupo exclusivo com outros mentorados para networking e troca de experiencias do setor.",
    },
    {
      icon: Award,
      title: "Certificacao",
      description: "Certificado de conclusao ao final de cada ciclo trimestral de mentoria.",
    },
    {
      icon: Sparkles,
      title: "Atualizacoes Continuas",
      description: "Acesso antecipado a novos ativos, tendencias e insights de missoes internacionais.",
    },
    {
      icon: BookOpen,
      title: "Biblioteca Tecnica",
      description: "Acesso a biblioteca completa de formularios e protocolos durante a vigencia do plano.",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-br from-[#0a1628] via-[#0C2340] to-[#1a3a5c] relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-[#B8783D]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
              Exclusivo para Membros
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-white mb-6 leading-[1.1]">
            Por que a mentoria e{" "}
            <span className="text-[#B8783D]">exclusiva</span>?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Um programa desenhado para profissionais que buscam resultados reais,
            com acesso a recursos e suporte que nao existem em cursos abertos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exclusiveFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#B8783D]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#B8783D]/15 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-[#B8783D]" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Industries Focus */}
        <div className="mt-20 text-center">
          <p className="text-xs font-bold tracking-[3px] uppercase text-white/40 mb-8">
            Focado nas necessidades de
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Farmacias Magistrais",
              "Industria Cosmetica",
              "Marcas Proprias",
              "Laboratorios de P&D",
              "Redes de Farmacias",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
              >
                <span className="text-sm font-medium text-white/70">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
