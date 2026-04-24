import { Quote, Star } from "lucide-react"

export function CursosTestimonials() {
  const testimonials = [
    {
      name: "Dra. Marina Albuquerque",
      role: "Farmácia magistral · Recife",
      quote:
        "Em 90 dias após a Masterclass, aumentei meu ticket médio em 42%. A diferença é que agora vendo ciência — não mais fórmula genérica.",
      stars: 5,
    },
    {
      name: "Farm. Ricardo Bueno",
      role: "Rede Bueno Farma · Curitiba",
      quote:
        "Já fiz sete cursos em cosmetologia antes. O do Samir foi o primeiro que me fez sair da sala com protocolo pronto pra rodar.",
      stars: 5,
    },
    {
      name: "Dra. Patrícia Nogueira",
      role: "Farmácia Nogueira · Fortaleza",
      quote:
        "Aplicação imediata. Fechei a primeira semana depois do curso faturando R$ 18 mil só com as fórmulas novas. Retorno absurdo.",
      stars: 5,
    },
    {
      name: "Farm. Leandro Costa",
      role: "Manipulário Alpha · São Paulo",
      quote:
        "O que me conquistou foi o rigor científico. Samir referencia estudos, mostra bancada e ainda ensina a precificar. Tudo junto.",
      stars: 5,
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%">
          <pattern id="grid-testi" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-testi)" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#e8a87c]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#e8a87c]">
            Quem estuda, fatura
          </div>
          <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-white md:text-6xl">
            Resultados que cabem no <em className="text-[#e8a87c]">caixa da sua farmácia.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Farmacêuticos reais, em cidades reais, vendendo fórmulas reais. Toda depoimento listado
            aqui foi validado e autorizado por escrito.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 transition-all hover:-translate-y-1 hover:border-[#e8a87c]/30"
            >
              <Quote className="h-8 w-8 text-[#e8a87c]/40" />
              <p className="mt-5 font-serif text-xl leading-[1.5] text-white md:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#e8a87c] text-[#e8a87c]" />
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
