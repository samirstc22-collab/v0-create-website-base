import Image from "next/image"

export function BigStats() {
  const stats = [
    {
      num: "6",
      suffix: "anos",
      label: "Liderando P&D",
      sub: "no maior grupo magistral do Brasil",
      accent: "#0C2340",
      featured: true,
    },
    {
      num: "500",
      suffix: "+",
      label: "Farmacias atendidas",
      sub: "que ja elevaram seu padrao tecnico",
      accent: "#B8783D",
      featured: true,
    },
    {
      num: "1.000",
      suffix: "+",
      label: "Formuladores treinados",
      sub: "em metodo proprio",
      accent: "#0C2340",
      featured: false,
    },
    {
      num: "10",
      suffix: "+",
      label: "Programas tecnicos",
      sub: "ministrados em congressos e MBAs",
      accent: "#B8783D",
      featured: false,
    },
    {
      num: "3",
      suffix: "",
      label: "Continentes",
      sub: "em missoes tecnicas internacionais",
      accent: "#0a8f9e",
      featured: false,
    },
  ]

  return (
    <section className="relative bg-white py-24 lg:py-28 px-6 lg:px-10 overflow-hidden">
      {/* Soft brand-tinted background wash */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background:
            "radial-gradient(ellipse 1000px 600px at 80% 0%, rgba(184,120,61,0.06) 0%, transparent 60%), radial-gradient(ellipse 800px 500px at 0% 100%, rgba(12,35,64,0.04) 0%, transparent 60%)",
        }}
      />

      {/* Top + bottom hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e5e7eb] to-transparent" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#B8783D]" />
            <span className="text-[12px] font-bold tracking-[3.5px] uppercase text-[#B8783D]">
              Por que confiar
            </span>
            <span className="h-px w-10 bg-[#B8783D]" />
          </div>
          <h2 className="font-serif text-[clamp(34px,4.6vw,56px)] text-[#0C2340] tracking-[-0.025em] leading-[1.05] max-w-[860px] mx-auto">
            Experiencia que se traduz em{" "}
            <em className="italic text-[#B8783D]">resultados para sua operacao.</em>
          </h2>
          <p className="mt-6 text-[17px] text-[#475569] leading-[1.6] max-w-[640px] mx-auto">
            Numeros consolidados em seis anos de bancada industrial, formacao tecnica e missoes internacionais.
          </p>
        </div>

        {/* Photo + Stats grid */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-start">
          {/* Professional photo */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#B8783D]/20 via-transparent to-[#0C2340]/15 blur-2xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-2xl border border-[#0C2340]/10 shadow-[0_30px_70px_-20px_rgba(12,35,64,0.25)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9950%20copiar-5oI7SGUIxX6Vi6p4D42Jo06tatWSVM.jpg"
                alt="Samir Tannuri - Consultor em Formulacao Magistral"
                width={320}
                height={460}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/85 via-[#0C2340]/15 to-transparent" />

              {/* Copper accent rule */}
              <div className="absolute bottom-[68px] left-5 h-px w-10 bg-[#B8783D]" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[10px] uppercase tracking-[2.5px] text-[#d4a574] font-bold mb-1.5">
                  Consultor ST Farma
                </div>
                <div className="font-serif text-white text-[24px] leading-[1.1] tracking-[-0.02em]">
                  Samir Tannuri
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid — 3 cols x 2 rows, last row has 2 items spanning */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 lg:gap-5">
            {stats.map((stat, i) => {
              // Layout: first row 3 items (md:col-span-2 each), second row 2 items (md:col-span-3 each)
              const span = i < 3 ? "md:col-span-2" : "md:col-span-3"
              const isNavy = stat.accent === "#0C2340"
              return (
                <div
                  key={i}
                  className={`group relative bg-white rounded-2xl border border-[#e5e7eb] hover:border-transparent overflow-hidden transition-all duration-300 hover:shadow-[0_24px_60px_-18px_rgba(12,35,64,0.20)] hover:translate-y-[-3px] ${span}`}
                >
                  {/* Top accent rail */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: stat.accent }}
                  />

                  {/* Decorative big numeral background */}
                  <div
                    aria-hidden
                    className="absolute -bottom-6 -right-2 font-serif text-[120px] leading-none opacity-[0.04] pointer-events-none select-none"
                    style={{ color: stat.accent }}
                  >
                    {stat.num}
                  </div>

                  <div className="relative p-7 lg:p-8">
                    {/* Featured badge */}
                    {stat.featured && (
                      <div className="absolute top-5 right-5 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[2px] text-[#B8783D]">
                        <span className="w-1 h-1 rounded-full bg-[#B8783D]" />
                        Destaque
                      </div>
                    )}

                    {/* Big number */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span
                        className="font-serif text-[clamp(56px,6.5vw,84px)] leading-[0.9] tracking-[-0.04em] font-medium"
                        style={{ color: stat.accent }}
                      >
                        {stat.num}
                      </span>
                      {stat.suffix && (
                        <span
                          className="font-serif text-[clamp(28px,3vw,40px)] leading-none tracking-[-0.02em]"
                          style={{ color: stat.accent, opacity: 0.7 }}
                        >
                          {stat.suffix}
                        </span>
                      )}
                    </div>

                    {/* Label — strong navy */}
                    <div className="text-[16px] lg:text-[17px] font-bold text-[#0C2340] leading-[1.25] tracking-[-0.01em] mb-1.5">
                      {stat.label}
                    </div>

                    {/* Sub-label — secondary detail */}
                    <div className="text-[13px] lg:text-[14px] text-[#64748b] leading-[1.5]">
                      {stat.sub}
                    </div>

                    {/* Bottom accent dot row */}
                    <div className="flex items-center gap-2 mt-5 pt-5 border-t border-[#0C2340]/[0.06]">
                      <div
                        className="h-px flex-1"
                        style={{ backgroundColor: stat.accent, opacity: 0.3 }}
                      />
                      <span
                        className="text-[10px] font-bold uppercase tracking-[2px]"
                        style={{ color: stat.accent }}
                      >
                        {isNavy ? "Pratica industrial" : stat.accent === "#B8783D" ? "Mercado real" : "Alcance global"}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
