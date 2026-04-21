import Link from "next/link"
import { ArrowRight, Beaker, BookOpen, Briefcase, Globe } from "lucide-react"
import { CircuitPattern } from "./illustrations"

export function HomeServicesPreview() {
  const services = [
    {
      icon: Beaker,
      title: "Consultoria Magistral",
      desc: "Reformulacao de portfolio, dossiês tecnicos e treinamento de equipe para farmacias magistrais.",
      color: "teal",
      href: "/consultoria",
    },
    {
      icon: Briefcase,
      title: "P&D Industrial",
      desc: "Desenvolvimento cosmetico grau 1 e 2 para industrias de insumos, marcas e laboratorios.",
      color: "copper",
      href: "/consultoria",
    },
    {
      icon: BookOpen,
      title: "Materiais Tecnicos",
      desc: "eBooks, formularios e cursos com rigor cientifico para aplicacao clinica e laboratorial.",
      color: "navy",
      href: "/materiais",
    },
    {
      icon: Globe,
      title: "Missoes Internacionais",
      desc: "Imersoes tecnicas em Paris, Amsterdam e Japao com acesso a industrias de ingredientes.",
      color: "teal",
      href: "/sobre",
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "teal":
        return { bg: "bg-teal/10", text: "text-teal", hover: "hover:border-teal/40" }
      case "copper":
        return { bg: "bg-copper/10", text: "text-copper", hover: "hover:border-copper/40" }
      case "navy":
        return { bg: "bg-navy/10", text: "text-navy", hover: "hover:border-navy/40" }
      default:
        return { bg: "bg-teal/10", text: "text-teal", hover: "hover:border-teal/40" }
    }
  }

  return (
    <section className="py-28 px-6 lg:px-10 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <CircuitPattern className="absolute top-10 left-[5%] w-40 h-40 text-copper opacity-10" />
      <CircuitPattern className="absolute bottom-10 right-[5%] w-32 h-32 text-teal opacity-10 rotate-90" />

      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper inline-block mb-4">
            Areas de Atuacao
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-navy mb-5 leading-[1.1] tracking-[-0.5px]">
            Como posso ajudar
          </h2>
          <p className="text-lg text-muted max-w-[600px] mx-auto leading-relaxed">
            Quatro frentes de atuacao — do diagnostico pontual ao desenvolvimento 
            industrial completo. Cada projeto e unico.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => {
            const colors = getColorClasses(service.color)
            return (
              <Link
                key={i}
                href={service.href}
                className={`group bg-white rounded-2xl p-8 border border-border transition-all duration-300 hover:translate-y-[-6px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${colors.hover}`}
              >
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-7 h-7 ${colors.text}`} />
                </div>
                <h3 className="font-serif text-2xl text-navy mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-5">
                  {service.desc}
                </p>
                <span className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} group-hover:gap-3 transition-all`}>
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-copper to-copper-deep text-white rounded-xl py-4 px-10 font-bold text-base hover:translate-y-[-2px] transition-all shadow-[0_8px_30px_rgba(192,133,74,0.3)] hover:shadow-[0_12px_40px_rgba(192,133,74,0.45)]"
          >
            Vamos conversar
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
