import { Check, ArrowRight } from "lucide-react"
import { AtomIllustration, HexagonPattern } from "../illustrations"

export function ConsultoriaTiers() {
  const tiers = [
    {
      icon: "D",
      iconBg: "bg-teal/12",
      iconColor: "text-teal",
      checkColor: "text-teal",
      name: "Diagnostico Tecnico",
      desc: "Analise completa do P&D da sua farmacia ou marca com recomendacoes estrategicas em 30 dias.",
      items: [
        "Auditoria de bases e manipulados",
        "Relatorio com gaps identificados",
        "Checklist de melhorias prioritarias",
        "Reuniao devolutiva (90min)",
      ],
      btnStyle: "secondary",
      btnText: "Solicitar Diagnostico",
    },
    {
      icon: "C",
      iconBg: "bg-copper/15",
      iconColor: "text-copper",
      checkColor: "text-copper",
      name: "Consultoria Magistral Completa",
      desc: "Reformulacao de portfolio, dossiês tecnicos e treinamento de equipe para farmacias magistrais.",
      items: [
        "Diagnostico tecnico completo",
        "Reformulacao de 5-10 formulas-chave",
        "Dossiê farmacotecnico com DOIs",
        "Treinamento de equipe",
        "Suporte 30 dias pos-entrega",
      ],
      featured: true,
      btnStyle: "primary",
      btnText: "Falar sobre Consultoria",
    },
    {
      icon: "I",
      iconBg: "bg-navy/8",
      iconColor: "text-navy",
      checkColor: "text-navy",
      name: "P&D Industrial",
      desc: "Desenvolvimento cosmetico grau 1 e 2 para industrias de insumos, marcas e laboratorios.",
      items: [
        "Briefing -> formula finalizada",
        "Private label e marcas proprias",
        "Compatibilidade embalagem-formulacao",
        "Estudos de estabilidade e claims",
      ],
      btnStyle: "secondary",
      btnText: "Solicitar Proposta",
    },
    {
      icon: "M",
      iconBg: "bg-teal/12",
      iconColor: "text-teal",
      checkColor: "text-teal",
      name: "Missoes Internacionais",
      desc: "Imersoes tecnicas lideradas por mim em Paris, Amsterdam e Japao com grupos fechados.",
      items: [
        "Acesso in loco a industrias de ingredientes",
        "Sederma, Lucas Meyer e outras",
        "Biofermentacao e water-essence (Japao)",
        "Grupos fechados com alunos e profissionais",
      ],
      btnStyle: "secondary",
      btnText: "Proxima Missao",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <AtomIllustration className="absolute top-20 right-[3%] w-32 h-32 text-copper opacity-8" />
      <HexagonPattern className="absolute bottom-20 left-[3%] w-40 h-40 text-teal opacity-8" />

      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-10 h-full flex flex-col transition-all relative overflow-hidden ${
                tier.featured
                  ? "border-2 border-copper shadow-[0_16px_60px_rgba(192,133,74,0.15)] md:scale-[1.02]"
                  : "border border-border hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:translate-y-[-4px] hover:border-copper/30"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-5 right-5 bg-copper rounded-full py-1.5 px-4 text-xs font-bold text-white tracking-[1px] uppercase">
                  Mais procurado
                </div>
              )}
              
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-7 font-serif text-3xl font-bold ${tier.iconBg} ${tier.iconColor}`}
              >
                {tier.icon}
              </div>
              
              <h3 className="font-serif text-3xl font-normal text-navy mb-4 leading-tight">
                {tier.name}
              </h3>
              
              <p className="text-base text-muted leading-relaxed mb-7">{tier.desc}</p>
              
              <div className="flex-1 flex flex-col gap-4 mb-8">
                {tier.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-3 text-base leading-relaxed text-body"
                  >
                    <div className={`w-5 h-5 rounded-full ${tier.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className={`w-3 h-3 ${tier.checkColor}`} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-xl py-4 px-7 font-bold text-base w-full text-center transition-all tracking-wide inline-flex items-center justify-center gap-2 ${
                  tier.btnStyle === "primary"
                    ? "bg-gradient-to-br from-copper to-copper-deep border-none text-white shadow-[0_6px_24px_rgba(192,133,74,0.3)] hover:translate-y-[-2px] hover:shadow-[0_10px_32px_rgba(192,133,74,0.4)]"
                    : "bg-transparent border-2 border-border text-navy hover:border-copper hover:text-copper"
                }`}
              >
                {tier.btnText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
