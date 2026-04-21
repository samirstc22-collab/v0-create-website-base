import { Check } from "lucide-react"

export function Consultoria() {
  const tiers = [
    {
      icon: "D",
      iconBg: "bg-[rgba(10,143,158,0.12)]",
      iconColor: "text-teal",
      checkColor: "text-teal",
      name: "Diagnóstico Técnico",
      desc: "Análise completa do P&D da sua farmácia ou marca com recomendações estratégicas em 30 dias.",
      items: [
        "Auditoria de bases e manipulados",
        "Relatório com gaps identificados",
        "Checklist de melhorias prioritárias",
        "Reunião devolutiva (90min)",
      ],
      btnStyle: "secondary",
      btnText: "Solicitar Diagnóstico",
    },
    {
      icon: "C",
      iconBg: "bg-[rgba(192,133,74,0.15)]",
      iconColor: "text-copper",
      checkColor: "text-copper",
      name: "Consultoria Magistral Completa",
      desc: "Reformulação de portfólio, dossiês técnicos e treinamento de equipe para farmácias magistrais.",
      items: [
        "Diagnóstico técnico completo",
        "Reformulação de 5–10 fórmulas-chave",
        "Dossiê farmacotécnico com DOIs",
        "Treinamento de equipe",
        "Suporte 30 dias pós-entrega",
      ],
      featured: true,
      btnStyle: "primary",
      btnText: "Falar sobre Consultoria",
    },
    {
      icon: "I",
      iconBg: "bg-[rgba(11,29,53,0.08)]",
      iconColor: "text-navy",
      checkColor: "text-navy",
      name: "P&D Industrial",
      desc: "Desenvolvimento cosmético grau 1 e 2 para indústrias de insumos, marcas e laboratórios.",
      items: [
        "Briefing → fórmula finalizada",
        "Private label e marcas próprias",
        "Compatibilidade embalagem-formulação",
        "Estudos de estabilidade e claims",
      ],
      btnStyle: "secondary",
      btnText: "Solicitar Proposta",
    },
    {
      icon: "M",
      iconBg: "bg-[rgba(10,143,158,0.12)]",
      iconColor: "text-teal",
      checkColor: "text-teal",
      name: "Missões Internacionais",
      desc: "Imersões técnicas lideradas por mim em Paris, Amsterdam e Japão com grupos fechados.",
      items: [
        "Acesso in loco a indústrias de ingredientes",
        "Sederma, Lucas Meyer e outras",
        "Biofermentação e water-essence (Japão)",
        "Grupos fechados com alunos e profissionais",
      ],
      btnStyle: "secondary",
      btnText: "Próxima Missão",
    },
  ]

  return (
    <section id="consultoria" className="py-[110px] px-8 bg-off-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Consultoria
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Ciência aplicada ao seu laboratório
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Quatro frentes de atuação — do diagnóstico pontual ao desenvolvimento industrial
            completo. Cada projeto é único.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`bg-white rounded-[18px] p-[34px_30px] h-full flex flex-col transition-all relative overflow-hidden ${
                tier.featured
                  ? "border-2 border-copper shadow-[0_12px_44px_rgba(192,133,74,0.15)]"
                  : "border border-border hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:translate-y-[-4px] hover:border-[rgba(192,133,74,0.3)]"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-4 right-4 bg-copper rounded-full py-1 px-3 text-[10px] font-bold text-white tracking-[0.8px] uppercase">
                  Mais procurado
                </div>
              )}
              <div
                className={`w-12 h-12 rounded-[12px] flex items-center justify-center mb-[22px] font-serif text-[24px] font-bold ${tier.iconBg} ${tier.iconColor}`}
              >
                {tier.icon}
              </div>
              <h3 className="font-serif text-[23px] font-normal text-navy mb-2.5 leading-[1.2]">
                {tier.name}
              </h3>
              <p className="text-[13.5px] text-muted leading-[1.65] mb-[22px]">{tier.desc}</p>
              <div className="flex-1 flex flex-col gap-2.5 mb-[26px]">
                {tier.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-2.5 text-[13px] leading-[1.55] text-body"
                  >
                    <Check className={`w-3.5 h-3.5 ${tier.checkColor} shrink-0 mt-0.5`} />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-[10px] py-3.5 px-[22px] font-semibold text-[13.5px] w-full text-center transition-all tracking-[0.3px] ${
                  tier.btnStyle === "primary"
                    ? "bg-copper border-none text-white shadow-[0_4px_16px_rgba(192,133,74,0.25)] hover:translate-y-[-1px] hover:shadow-[0_6px_20px_rgba(192,133,74,0.35)]"
                    : "bg-transparent border-[1.5px] border-border text-navy hover:border-copper hover:text-copper"
                }`}
              >
                {tier.btnText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
