import {
  Award,
  Globe2,
  GraduationCap,
  FlaskConical,
  Mic2,
  Sparkles,
  ShieldCheck,
  Building2,
  BookOpen,
  Microscope,
} from "lucide-react"

const items = [
  { icon: GraduationCap, text: "3.000+ alunos formados" },
  { icon: Mic2, text: "100+ palestras e congressos" },
  { icon: FlaskConical, text: "20+ fórmulas autorais" },
  { icon: Globe2, text: "Missões em Paris · Amsterdam · Japão" },
  { icon: Building2, text: "Indústria cosmética · Grau I e II" },
  { icon: Microscope, text: "Pesquisa & desenvolvimento aplicado" },
  { icon: BookOpen, text: "Curadoria técnica e científica" },
  { icon: Award, text: "6 anos de P&D em alta performance" },
  { icon: ShieldCheck, text: "Sigilo · NDA padrão" },
  { icon: Sparkles, text: "Protocolos exclusivos para clínicas e indústria" },
]

export function CredentialsMarquee() {
  // Duplicate for seamless infinite loop
  const loop = [...items, ...items]

  return (
    <section
      aria-label="Credenciais em destaque"
      className="relative overflow-hidden border-y border-[#D4B98C]/15 bg-gradient-to-r from-[#07142a] via-[#0a1628] to-[#07142a] py-5"
    >
      {/* Glow accents */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a1628] to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a1628] to-transparent"
      />

      <div className="marquee-track flex w-max gap-12 whitespace-nowrap px-6 will-change-transform">
        {loop.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={`${item.text}-${i}`}
              className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[2.5px] text-white/85 md:text-sm"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-[#D4B98C]/35 bg-[#D4B98C]/10 text-[#D4B98C]">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
              <span>{item.text}</span>
              <span aria-hidden className="text-[#D4B98C]/50">
                ◆
              </span>
            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes marquee-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-slide 45s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}
