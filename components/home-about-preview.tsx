import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { FlaskIllustration, AtomIllustration } from "./illustrations"

export function HomeAboutPreview() {
  const highlights = [
    "Bolsista CNPq pesquisando ativos em UNICAMP",
    "Speaker convidado em 7+ congressos nacionais",
    "Publicacao peer-reviewed com DOI indexado",
    "Missoes tecnicas em Paris, Amsterdam e Japao",
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FlaskIllustration className="absolute top-20 right-[5%] w-32 h-40 text-teal opacity-10" />
      <AtomIllustration className="absolute bottom-20 left-[3%] w-28 h-28 text-copper opacity-10" />

      <div className="max-w-[1320px] mx-auto">
        <div className="flex gap-20 items-center flex-wrap">
          {/* Image Side */}
          <div className="flex-[0_0_420px] min-w-[300px] hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-border">
              <div className="w-full aspect-[3/4] bg-gradient-to-b from-navy-mid to-navy-deep flex items-center justify-center">
                <span className="font-serif text-[120px] text-white/10">ST</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                <div className="font-serif text-xl text-navy">Prof. Samir Tannuri</div>
                <div className="text-sm text-muted mt-1">Farmaceutico | Pesquisador CNPq</div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-copper text-white rounded-2xl py-3 px-5 shadow-[0_8px_30px_rgba(192,133,74,0.4)]">
              <span className="font-serif text-2xl font-bold">24+</span>
              <span className="text-xs block opacity-80">anos de P&D</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1 min-w-[320px]">
            <span className="text-xs font-bold tracking-[3px] uppercase text-copper inline-block mb-4">
              Quem e Samir Tannuri
            </span>
            <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-navy mb-6 leading-[1.1] tracking-[-0.5px]">
              Ciencia transformada em <span className="text-gradient-copper">resultado clinico</span>
            </h2>
            <p className="text-lg text-body leading-relaxed mb-8 max-w-[560px]">
              Farmaceutico pela USF, pesquisador CNPq na UNICAMP e consultor industrial 
              com mais de duas decadas de experiencia em P&D cosmetico. Criador da 
              <strong className="text-navy"> Tecnica Fenol FREE</strong> e pioneiro no desenvolvimento 
              do primeiro peeling de acido azelaico em pasta anidra do Brasil.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base text-dark">
                  <div className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-teal" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 bg-navy text-white rounded-xl py-4 px-8 font-bold text-base hover:bg-navy-mid transition-all shadow-[0_6px_24px_rgba(11,29,53,0.2)] hover:translate-y-[-2px] hover:shadow-[0_10px_32px_rgba(11,29,53,0.3)]"
            >
              Conhecer trajetoria completa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
