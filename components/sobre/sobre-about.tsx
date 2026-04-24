import Image from "next/image"
import { Check } from "lucide-react"
import { FlaskIllustration, BeakerIllustration } from "../illustrations"

export function SobreAbout() {
  const checkItems = [
    "6 anos coordenando P&D no maior grupo magistral do Brasil",
    "Delegado tecnico In-Cosmetics Global Paris 2025",
    "Publicacao peer-reviewed com DOI indexado",
    "Co-organizador do 1o Simposio de Peelings Quimicos do Brasil",
    "Missoes tecnicas em Paris, Amsterdam e Japao",
    "500+ farmacias atendidas e 1.000+ formuladores treinados",
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
                  src="/placeholder.svg?height=500&width=500"
                  alt="Samir Tannuri — consultor em tecnologia magistral"
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="font-serif text-xl text-navy">Samir Tannuri</div>
                <div className="text-sm text-muted mt-1">Consultor em Formulação Magistral</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 min-w-[320px]">
            <p className="text-lg leading-relaxed mb-6 text-body">
              <strong className="text-navy font-semibold">Samir Tannuri Cerveira</strong> passou os
              ultimos seis anos coordenando o P&D de cosmeticos no{" "}
              <strong className="text-navy font-semibold">maior grupo magistral do Brasil</strong>.
              Nesse periodo, formulou, escalonou, resolveu desvio de lote, atendeu tecnicamente mais
              de 500 farmacias magistrais e treinou mais de mil formuladores no pais inteiro.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-body">
              A <strong className="text-navy font-semibold">ST Farma — Consultoria em Tecnologia
              Farmaceutica</strong> nasce para levar essa vivencia operacional para dentro da sua
              empresa. Nao e aula. Nao e palestra motivacional. E consultoria tecnica, documentada,
              com entregaveis claros: diagnostico de formulacao, reformulacao de portfolio, estudo
              de estabilidade, transferencia de tecnologia, selecao de ativos e due diligence de
              ingredientes.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-body">
              Criador do primeiro peeling de acido azelaico em pasta anidra do mundo e autor da{" "}
              <strong className="text-navy font-semibold">Tecnica Fenol FREE</strong>. Co-assina
              paper peer-reviewed sobre fotoprotecao em peles negras, publicado em colaboracao com
              pesquisadores vinculados a. Delegado tecnico In-Cosmetics Global Paris 2025,
              com missoes em Amsterdam e no Japao.
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
              <span className="text-sm text-muted font-medium">— Samir Tannuri</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
