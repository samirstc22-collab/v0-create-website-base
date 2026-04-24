import { Droplets, Sparkles, Shield, Leaf, Sun, Clock } from "lucide-react"

export function ProtocolosServices() {
  const protocols = [
    {
      icon: Droplets,
      title: "Protocolo Melasma",
      description: "Abordagem multimodal com ativos despigmentantes de ultima geracao, peeling quimico customizado e manutencao domiciliar.",
      actives: ["Tranexamico topico", "Cisteamina", "Thiamidol", "Niacinamida"],
      color: "#B8783D",
    },
    {
      icon: Shield,
      title: "Protocolo Acne",
      description: "Controle sebaceo, antimicrobiano e antiinflamatorio com foco em reducao de cicatrizes e prevencao de recidivas.",
      actives: ["Retinoides", "Acido azelaico", "Niacinamida", "BPO"],
      color: "#0d7a80",
    },
    {
      icon: Sparkles,
      title: "Protocolo Anti-aging",
      description: "Estimulo de colageno, preenchimento de rugas e melhora da textura com peptideos bioativos e fatores de crescimento.",
      actives: ["Retinol", "Peptideos", "Vit C", "Acido hialuronico"],
      color: "#1a4d6e",
    },
    {
      icon: Leaf,
      title: "Protocolo Rosacea",
      description: "Controle da inflamacao, fortalecimento da barreira cutanea e reducao da reatividade vascular.",
      actives: ["Metronidazol", "Ivermectina", "Niacinamida", "Azeloglicina"],
      color: "#8b5cf6",
    },
    {
      icon: Sun,
      title: "Protocolo Fotodano",
      description: "Reparacao de danos solares, uniformizacao do tom e prevencao de lesoes pre-malignas.",
      actives: ["Retinoides", "AHAs", "Vit C", "Fotoliase"],
      color: "#f59e0b",
    },
    {
      icon: Clock,
      title: "Protocolo Manutencao",
      description: "Esquemas de manutencao pos-tratamento para resultados duradouros e prevencao de recidivas.",
      actives: ["Antioxidantes", "Hidratantes", "Fotoprotetores", "Retinoides"],
      color: "#10b981",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0d7a80]/10 border border-[#0d7a80]/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#0d7a80]">
              Protocolos Especializados
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Solucoes para cada{" "}
            <span className="text-[#0d7a80]">condicao dermatologica</span>
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Protocolos desenvolvidos com base em evidencia cientifica e experiencia clinica,
            utilizando ativos de ultima geracao e abordagens inovadoras.
          </p>
        </div>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((protocol, i) => (
            <div
              key={i}
              className="group bg-[#fafbfc] rounded-2xl p-6 border border-[#0C2340]/8 hover:bg-white hover:border-[#0d7a80]/30 hover:shadow-[0_16px_48px_rgba(13,122,128,0.1)] transition-all"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${protocol.color}15` }}
              >
                <protocol.icon className="w-6 h-6" style={{ color: protocol.color }} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-[#0C2340] mb-3">{protocol.title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-5">{protocol.description}</p>

              {/* Actives */}
              <div className="border-t border-[#0C2340]/8 pt-5">
                <div className="text-xs font-bold tracking-[1.5px] uppercase text-[#94a3b8] mb-3">
                  Ativos-chave
                </div>
                <div className="flex flex-wrap gap-2">
                  {protocol.actives.map((active, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-semibold px-2 py-1 rounded-md bg-[#0C2340]/5 text-[#475569]"
                    >
                      {active}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
