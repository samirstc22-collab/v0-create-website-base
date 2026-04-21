export function BigStats() {
  const stats = [
    { num: "24", label: "Anos de P&D cosmetico", accent: "#0C2340" },
    { num: "4.000+", label: "Formulas testadas e validadas", accent: "#B8783D" },
    { num: "20+", label: "Industrias atendidas", accent: "#0C2340" },
    { num: "1.000+", label: "Profissionais formados", accent: "#B8783D" },
    { num: "3", label: "Continentes em missao", accent: "#0a8f9e" },
  ]

  return (
    <section className="relative bg-white py-20 px-6 lg:px-10 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase text-[#B8783D] mb-3">
            Numeros que contam historia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0C2340] tracking-tight">
            Duas decadas de <em className="italic text-[#B8783D]">resultado comprovado</em>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(12,35,64,0.12)] border border-transparent hover:border-[#e5e7eb]"
            >
              {/* Accent line */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: stat.accent }}
              />
              
              <div 
                className="font-serif text-[clamp(36px,5vw,52px)] leading-none mb-3 transition-colors"
                style={{ color: stat.accent }}
              >
                {stat.num}
              </div>
              <div className="text-xs md:text-sm text-[#64748b] tracking-[1px] uppercase font-semibold leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
    </section>
  )
}
