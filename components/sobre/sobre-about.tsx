import Image from "next/image"
import { Check } from "lucide-react"
import { FlaskIllustration, BeakerIllustration } from "../illustrations"

export function SobreAbout() {
  const checkItems = [
    "Bolsista CNPq pesquisando ativos em UNICAMP",
    "Speaker convidado em 7+ congressos nacionais",
    "Publicacao peer-reviewed com DOI indexado",
    "Co-organizador do 1o Simposio de Peelings",
    "Missoes tecnicas em Paris, Amsterdam e Japao",
    "Consultor P&D de 20+ industrias cosmeticas",
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <FlaskIllustration className="absolute top-20 right-[3%] w-24 h-32 text-teal opacity-10" />
      <BeakerIllustration className="absolute bottom-20 left-[3%] w-20 h-28 text-copper opacity-10" />

      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-20 items-start flex-wrap">
          {/* Photo Side */}
          <div className="flex-[0_0_400px] min-w-[300px] hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)] sticky top-32">
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src="/images/samir-award.png"
                  alt="Prof. Samir Tannuri com troféu Clinic Day"
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="font-serif text-xl text-navy">Prof. Samir Tannuri</div>
                <div className="text-sm text-muted mt-1">Farmaceutico | Pesquisador CNPq</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 min-w-[320px]">
            <p className="text-lg leading-relaxed mb-6 text-body">
              <strong className="text-navy font-semibold">Samir Tannuri Cerveira</strong> e um dos
              nomes de referencia no P&D cosmetico brasileiro. Com formacao em Farmacia pela
              Universidade Sao Francisco e pesquisa de ponta na UNICAMP, desenvolve formulacoes
              magistrais e industriais que conectam ciencia de bancada ao resultado clinico.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-body">
              Sua trajetoria inclui consultoria tecnica para mais de{" "}
              <strong className="text-navy font-semibold">20 industrias cosmeticas</strong>,
              criacao de 40+ marcas independentes e a producao de materiais cientificos que ja
              impactaram milhares de profissionais de saude.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-body">
              Criador da <strong className="text-navy font-semibold">Tecnica Fenol FREE</strong> e
              pioneiro no desenvolvimento do primeiro peeling de acido azelaico em pasta anidra do
              Brasil, Samir tambem lidera missoes tecnicas internacionais em Paris, Amsterdam e
              Japao.
            </p>

            {/* Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base text-dark font-medium">
                  <div className="w-6 h-6 rounded-full bg-teal/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-teal" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="border-l-4 border-copper py-6 px-7 bg-copper/10 rounded-r-2xl mt-10">
              <p className="font-serif italic text-xl text-navy leading-relaxed mb-3">
                {'"'}Formula boa nao nasce de opiniao — nasce de evidencia, metodo e iteracao.{'"'}
              </p>
              <span className="text-sm text-muted font-medium">— Prof. Samir Tannuri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
