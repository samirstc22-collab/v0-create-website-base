import Image from "next/image"

export function BigStats() {
  const stats = [
    { num: "6 anos", label: "Liderando P&D no maior grupo magistral do Brasil", accent: "#0C2340" },
    { num: "500+", label: "Farmacias que ja elevaram seu padrao tecnico", accent: "#B8783D" },
    { num: "1.000+", label: "Formuladores treinados em metodo proprio", accent: "#0C2340" },
    { num: "10+", label: "Programas tecnicos ministrados em congressos e MBAs", accent: "#B8783D" },
    { num: "3", label: "Continentes em missoes tecnicas internacionais", accent: "#0a8f9e" },
  ]

  return (
    <section className="relative bg-white py-20 px-6 lg:px-10 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase text-[#B8783D] mb-3">
            Por que confiar
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0C2340] tracking-tight max-w-[700px] mx-auto">
            Experiencia que se traduz em{" "}
            <em className="italic text-[#B8783D]">resultados para sua operacao</em>
          </h2>
        </div>

        {/* Photo + Stats grid */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Professional photo */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#B8783D]/15 via-transparent to-[#0C2340]/10 blur-xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-2xl border border-[#e5e7eb] shadow-[0_20px_50px_-15px_rgba(12,35,64,0.15)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9950%20copiar-5oI7SGUIxX6Vi6p4D42Jo06tatWSVM.jpg"
                alt="Samir Tannuri - Consultor em Formulacao Magistral"
                width={280}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-semibold text-sm">Samir Tannuri</div>
                <div className="text-white/70 text-xs">Consultor ST Farma</div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative bg-[#f8fafc] hover:bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(12,35,64,0.12)] border border-transparent hover:border-[#e5e7eb]"
              >
                {/* Accent line */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: stat.accent }}
                />
                
                <div 
                  className="font-serif text-[clamp(32px,4vw,48px)] leading-none mb-2 transition-colors"
                  style={{ color: stat.accent }}
                >
                  {stat.num}
                </div>
                <div className="text-[10px] md:text-xs text-[#64748b] tracking-[1px] uppercase font-semibold leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
    </section>
  )
}
