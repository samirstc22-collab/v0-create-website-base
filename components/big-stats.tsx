import { AtomIllustration, BeakerIllustration } from "./illustrations"

export function BigStats() {
  const stats = [
    { num: "24", label: "Anos de P&D cosmetico" },
    { num: "4.000+", label: "Formulas testadas" },
    { num: "20+", label: "Industrias atendidas" },
    { num: "1.000+", label: "Profissionais treinados" },
    { num: "3", label: "Continentes em missao" },
  ]

  return (
    <section className="bg-white py-24 px-6 lg:px-10 border-b border-border relative overflow-hidden">
      {/* Decorative Elements */}
      <AtomIllustration className="absolute top-10 left-[3%] w-24 h-24 text-teal opacity-8" />
      <BeakerIllustration className="absolute bottom-10 right-[3%] w-20 h-28 text-copper opacity-8" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper inline-block">
            Numeros que contam historia
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center py-8 px-5 relative"
            >
              {i < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border hidden md:block" />
              )}
              <div className="font-serif text-[clamp(48px,6vw,64px)] text-navy leading-none mb-3 bg-gradient-to-br from-navy to-teal bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-sm text-muted tracking-[1.5px] uppercase font-semibold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
