import { Check } from "lucide-react"

export function About() {
  const checkItems = [
    "6 anos coordenando P&D no maior grupo magistral do Brasil",
    "Delegado técnico In-Cosmetics Global Paris 2025",
    "Publicação peer-reviewed com DOI indexado",
    "Co-organizador do 1° Simpósio de Peelings Químicos do Brasil",
    "Missões técnicas em Paris, Amsterdam e Japão",
    "500+ farmácias atendidas e 1.000+ formuladores treinados",
  ]

  return (
    <section id="about" className="py-[110px] px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Quem conduz a ST Farma
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Prática industrial real, não teoria de sala de aula
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Samir Tannuri — seis anos coordenando P&D no maior grupo magistral do Brasil, mais de
            500 farmácias atendidas tecnicamente e 1.000+ formuladores treinados.
          </p>
        </div>

        <div className="flex gap-[72px] items-start flex-wrap">
          {/* Photo Side - Hidden on mobile */}
          <div className="flex-[0_0_360px] min-w-[280px] hidden lg:block">
            <div className="relative rounded-[18px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center">
                <span className="font-serif text-[100px] text-white/10">ST</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 bg-white/[0.96] backdrop-blur-[16px] rounded-[14px] p-4 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <div className="font-serif text-[15px] text-navy">Samir Tannuri</div>
                <div className="text-[11px] text-muted mt-0.5">Consultor em Tecnologia Farmacêutica</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 min-w-[300px]">
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              <strong className="text-navy font-semibold">Samir Tannuri Cerveira</strong> passou os
              últimos seis anos coordenando o P&D de cosméticos no{" "}
              <strong className="text-navy font-semibold">maior grupo magistral do Brasil</strong>.
              Nesse período, formulou, escalonou, resolveu desvio de lote, atendeu tecnicamente mais
              de 500 farmácias magistrais e treinou mais de 1.000 formuladores no país inteiro.
            </p>
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              A <strong className="text-navy font-semibold">ST Farma</strong> nasce para levar essa
              vivência operacional para dentro da sua empresa: diagnóstico técnico, reformulação de
              portfólio, transferência de tecnologia, sourcing internacional e due diligence de
              ingredientes.
            </p>
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              Criador do primeiro peeling de ácido azelaico em pasta anidra do mundo, autor da{" "}
              <strong className="text-navy font-semibold">Técnica Fenol FREE</strong> e coautor de
              paper peer-reviewed sobre fotoproteção em peles negras. Delegado técnico In-Cosmetics
              Global Paris 2025, com missões em Amsterdam e no Japão.
            </p>

            {/* Check Grid */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3 my-7">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13.5px] text-dark font-medium">
                  <Check className="w-4 h-4 text-teal" />
                  {item}
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="border-l-[3px] border-copper py-[18px] px-[22px] bg-[rgba(192,133,74,0.15)] rounded-r-[12px] mt-7">
              <p className="font-serif italic text-[16px] text-navy leading-[1.6] mb-1.5">
                {'"'}Fórmula boa não nasce de opinião — nasce de evidência, método e iteração.{'"'}
              </p>
              <span className="text-[12px] text-muted">— Samir Tannuri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
