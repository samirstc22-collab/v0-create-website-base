import Image from "next/image"
import { Award, Globe2, GraduationCap, Mic, Beaker, MapPin } from "lucide-react"

export function V2Authority() {
  const metrics = [
    { icon: Mic, num: "800+", label: "Palestras proferidas", sub: "Congressos e convenções" },
    { icon: MapPin, num: "26", label: "Capitais brasileiras", sub: "De Rio Branco a Florianópolis" },
    { icon: Globe2, num: "15+", label: "Países em missão", sub: "Europa, Ásia e Américas" },
    { icon: GraduationCap, num: "12.000", label: "Alunos formados", sub: "Presencial e online" },
    { icon: Beaker, num: "4.000+", label: "Fórmulas validadas", sub: "Bancada + estabilidade" },
    { icon: Award, num: "20+", label: "Indústrias atendidas", sub: "P&D cosmético consultivo" },
  ]

  return (
    <section
      id="autoridade"
      className="relative py-28 md:py-36 bg-[#0f2419] text-[#f5f1e8] overflow-hidden"
    >
      {/* Ornamental arches (SVG) */}
      <svg
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1400px] h-[900px] text-[#c9a961]/8 pointer-events-none"
        viewBox="0 0 1400 900"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <ellipse cx="700" cy="450" rx="650" ry="400" />
        <ellipse cx="700" cy="450" rx="520" ry="320" />
        <ellipse cx="700" cy="450" rx="390" ry="240" />
        <line x1="700" y1="50" x2="700" y2="850" />
        <line x1="100" y1="450" x2="1300" y2="450" />
      </svg>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-6">
            <span className="w-8 h-px bg-[#c9a961]" />
            Autoridade mensurada em números
          </div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-[-0.02em]">
            Vinte e quatro anos traduzidos em{" "}
            <em className="text-[#c9a961]">evidência</em>.
          </h2>
          <p className="mt-7 text-lg md:text-xl text-[#f5f1e8]/75 leading-[1.65] max-w-2xl">
            Cada número abaixo é rastreável. Cada palestra tem palco, cada aluno tem
            certificado, cada fórmula tem relatório de estabilidade. Autoridade, aqui, não
            é adjetivo — é{" "}
            <span className="text-[#c9a961] italic">histórico verificável</span>.
          </p>
        </div>

        {/* Main split: photo + metrics */}
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-16 items-center">
          {/* Lab Image */}
          <div className="relative">
            <div className="relative rounded-[24px] overflow-hidden aspect-[4/5] border border-[#c9a961]/25 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/samir-lab-eurotex.jpg"
                alt="Samir Tannuri em laboratório internacional EUROTEX"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2419]/75 via-[#0f2419]/10 to-transparent" />
            </div>
            <div className="absolute left-5 right-5 bottom-5 bg-[#f5f1e8] text-[#0f2419] rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[2.5px] text-[#1a3d2e]/55 font-bold">
                    Capacitação técnica internacional
                  </div>
                  <div className="font-serif text-xl mt-1.5 leading-tight">
                    Laboratório EUROTEX · França
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center shrink-0">
                  <Beaker className="w-5 h-5 text-[#0f2419]" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map(({ icon: Icon, num, label, sub }) => (
              <div
                key={label}
                className="group relative bg-[#f5f1e8]/5 border border-[#c9a961]/18 rounded-2xl p-7 hover:bg-[#f5f1e8]/8 hover:border-[#c9a961]/40 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <Icon
                    className="w-7 h-7 text-[#c9a961]"
                    strokeWidth={1.5}
                  />
                  <div className="font-serif italic text-[#c9a961]/50 text-sm">
                    ·
                  </div>
                </div>
                <div className="font-serif text-5xl md:text-6xl text-[#f5f1e8] leading-none tracking-tight">
                  {num}
                </div>
                <div className="mt-3.5 text-sm font-semibold text-[#f5f1e8] tracking-wide">
                  {label}
                </div>
                <div className="mt-1 text-xs text-[#f5f1e8]/55 leading-relaxed">
                  {sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Countries strip */}
        <div className="mt-20 pt-10 border-t border-[#c9a961]/20">
          <div className="text-[11px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-5">
            Missões técnicas internacionais
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif text-xl md:text-2xl text-[#f5f1e8]/85 italic">
            {[
              "França",
              "Itália",
              "Alemanha",
              "Países Baixos",
              "Japão",
              "Coreia do Sul",
              "Espanha",
              "Portugal",
              "Estados Unidos",
              "Argentina",
              "Uruguai",
              "Chile",
            ].map((c, i) => (
              <span key={c} className="flex items-center gap-4">
                {c}
                {i < 11 && <span className="text-[#c9a961]/50 text-sm">✦</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
