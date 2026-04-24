import { Check } from "lucide-react"

export function About() {
  const checkItems = [
    "Bolsista pesquisando ativos em UNICAMP",
    "Speaker convidado em 7+ congressos nacionais",
    "Publicação peer-reviewed com DOI indexado",
    "Co-organizador do 1° Simpósio de Peelings",
    "Missões técnicas em Paris, Amsterdam e Japão",
    "Consultor P&D de 20+ indústrias cosméticas",
  ]

  return (
    <section id="about" className="py-[110px] px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Quem é Samir Tannuri
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Ciência transformada em resultado clínico
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Farmacêutico pela USF, pesquisador na UNICAMP e consultor industrial com mais de
            duas décadas de experiência em P&D cosmético.
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
                <div className="text-[11px] text-muted mt-0.5">Farmacêutico · Consultor em Tecnologia Farmacêutica</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 min-w-[300px]">
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              <strong className="text-navy font-semibold">Samir Tannuri Cerveira</strong> é um dos
              nomes de referência no P&D cosmético brasileiro. Com formação em Farmácia pela
              Universidade São Francisco e pesquisa de ponta na UNICAMP, desenvolve formulações
              magistrais e industriais que conectam ciência de bancada ao resultado clínico.
            </p>
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              Sua trajetória inclui consultoria técnica para mais de <strong className="text-navy font-semibold">20 indústrias cosméticas</strong>,
              criação de 40+ marcas independentes e a produção de materiais científicos que já
              impactaram milhares de profissionais de saúde.
            </p>
            <p className="text-[15.5px] leading-[1.85] mb-[18px] text-body">
              Criador da <strong className="text-navy font-semibold">Técnica Fenol FREE</strong> e
              pioneiro no desenvolvimento do primeiro peeling de ácido azelaico em pasta anidra do
              Brasil, Samir também lidera missões técnicas internacionais em Paris, Amsterdam e
              Japão.
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
