import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function ConsultoriaEnvironment() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef] py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Illustration with Samir photo + pharmacy scene */}
          <div className="relative">
            {/* SVG pharmacy illustration background */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#1a2942]">
              <svg
                className="absolute inset-0 h-full w-full opacity-25"
                viewBox="0 0 400 500"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Shelves */}
                <g stroke="#e8a87c" strokeWidth="1.5" fill="none" opacity="0.7">
                  <line x1="20" y1="80" x2="380" y2="80" />
                  <line x1="20" y1="140" x2="380" y2="140" />
                  <line x1="20" y1="200" x2="380" y2="200" />
                  <line x1="20" y1="260" x2="380" y2="260" />
                </g>
                {/* Bottles and boxes */}
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2, 3, 4, 5, 6].map((col) => (
                    <g key={`${row}-${col}`} transform={`translate(${40 + col * 50} ${30 + row * 60})`}>
                      <rect
                        x="0"
                        y="0"
                        width={col % 2 === 0 ? 18 : 22}
                        height={col % 2 === 0 ? 36 : 32}
                        rx="2"
                        fill="#e8a87c"
                        opacity={0.15 + (col % 3) * 0.1}
                      />
                      <rect
                        x="2"
                        y="4"
                        width={col % 2 === 0 ? 14 : 18}
                        height="2"
                        fill="#e8a87c"
                        opacity="0.5"
                      />
                    </g>
                  )),
                )}
                {/* Counter */}
                <rect x="20" y="380" width="360" height="4" fill="#e8a87c" opacity="0.4" />
                <rect x="20" y="384" width="360" height="80" fill="#e8a87c" opacity="0.08" />
                {/* Scale/balance */}
                <g transform="translate(300 340)" stroke="#2dd4bf" strokeWidth="1.5" fill="none" opacity="0.7">
                  <line x1="0" y1="0" x2="0" y2="40" />
                  <line x1="-20" y1="0" x2="20" y2="0" />
                  <circle cx="-20" cy="8" r="8" />
                  <circle cx="20" cy="8" r="8" />
                  <rect x="-6" y="40" width="12" height="6" />
                </g>
                {/* Mortar and pestle */}
                <g transform="translate(80 350)" stroke="#e8a87c" strokeWidth="1.5" fill="none" opacity="0.7">
                  <path d="M 0 20 Q 0 40 25 40 Q 50 40 50 20 Z" />
                  <line x1="30" y1="10" x2="50" y2="-10" />
                </g>
              </svg>

              {/* Samir photo overlay */}
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-white/10">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5807-MVrZXwAjG1TA5axkZtyIbGxca3Yufh.jpeg"
                    alt="Samir Tannuri com equipe no InCos Global Amsterdam — consultoria em tecnologia magistral"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>

            {/* Small stats card */}
            <div className="absolute -right-6 top-6 hidden rounded-xl border border-[#0a1628]/10 bg-white p-5 shadow-xl md:block">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#b87333]">
                Presença real
              </div>
              <div className="mt-2 font-serif text-3xl text-[#0a1628]">+150</div>
              <div className="text-xs text-[#0a1628]/60">farmácias visitadas pessoalmente</div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#b87333]">
              Dentro da sua farmácia
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-[#0a1628] md:text-5xl lg:text-6xl">
              Eu coloco <em className="text-[#b87333]">avental</em> e entro no seu balcão.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#0a1628]/75">
              Nenhuma consultoria do Samir acontece à distância. É obrigatório entender como a sua equipe
              atende, como o cliente entra, o que falta na prateleira e o que sobra na vitrine.{" "}
              <strong className="text-[#0a1628]">Personalização começa ali — no olho no olho.</strong>
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  title: "Imersão presencial ou híbrida",
                  text: "Dias de convivência com a equipe, acompanhamento do fluxo e mapeamento da jornada do cliente.",
                },
                {
                  title: "Time multidisciplinar",
                  text: "Farmacêuticos, designers de vitrine, especialistas em marketing e gestão caminhando junto.",
                },
                {
                  title: "Protocolos adaptados",
                  text: "Cada fórmula, cada script de venda e cada campanha é redesenhada para o seu público.",
                },
                {
                  title: "Foco total em lucro",
                  text: "Decisões filtradas pela pergunta: isso aumenta a margem ou a recompra da sua farmácia?",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#b87333]" />
                  <div>
                    <div className="font-medium text-[#0a1628]">{item.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-[#0a1628]/65">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-[#0a1628]/10 bg-white p-6">
              <p className="font-serif text-lg italic leading-relaxed text-[#0a1628] md:text-xl">
                "Uma farmácia muda quando o dono percebe que está sendo ouvido de verdade. A partir dali, tudo vira
                combustível para o crescimento."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2423-OOSVQktaEsVx00hrr7fyPx9v384NCH.jpeg"
                    alt="Samir Tannuri"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#0a1628]">Samir Tannuri</div>
                  <div className="text-xs text-[#0a1628]/60">Fundador · Clube de Fórmulas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
