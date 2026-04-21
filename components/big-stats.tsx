export function BigStats() {
  const stats = [
    { num: "24", label: "Anos de P&D cosmético" },
    { num: "4.000+", label: "Fórmulas testadas" },
    { num: "20+", label: "Indústrias atendidas" },
    { num: "1.000+", label: "Profissionais treinados" },
    { num: "3", label: "Continentes em missão" },
  ]

  return (
    <section className="bg-white py-[90px] px-8 border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Números que contam história
          </span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-7 px-5 transition-transform ${
                i < stats.length - 1 ? "border-r border-border max-md:border-r-0 max-md:border-b max-md:pb-6" : ""
              }`}
            >
              <div className="font-serif text-[56px] max-md:text-[44px] text-navy leading-none mb-2.5 bg-gradient-to-br from-navy to-teal bg-clip-text text-transparent">
                {stat.num}
              </div>
              <div className="text-[12.5px] text-muted tracking-[1.2px] uppercase font-semibold leading-[1.4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
