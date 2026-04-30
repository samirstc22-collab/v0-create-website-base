import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { FlaskIllustration, BeakerIllustration } from "../illustrations"

export function SobreAbout() {
  const checkItems = [
    "6 anos coordenando P&D no maior grupo magistral do Brasil",
    "Lideranca em atividades laboratoriais e projetos de P&D desde 2021",
    "500+ farmacias magistrais atendidas tecnicamente",
    "1.000+ formuladores treinados em programas proprios",
    "Delegado tecnico In-Cosmetics Global Paris 2025",
    "Missoes tecnicas em Paris, Amsterdam e Toquio",
    "Publicacao peer-reviewed com DOI indexado",
    "Professor em cursos, congressos e MBAs",
    "Co-organizador do 1o Simposio de Peelings Quimicos do Brasil",
    "Estudante de Nutricao e Ciencias Biomedicas",
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2400-56iB6ioacXe4fVxwFVoNMDro6w3zSZ.jpeg"
                  alt="Samir Tannuri trabalhando no laboratorio — consultor em tecnologia magistral"
                  fill
                  className="object-cover object-top"
                  sizes="400px"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/98 backdrop-blur-xl rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="font-serif text-xl text-navy">Samir Tannuri</div>
                <div className="text-sm text-muted mt-1">Consultor em Tecnologia Magistral</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 min-w-[320px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B8783D]/25 bg-[#B8783D]/8 px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
                Curriculo & Trajetoria
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0C2340] mb-8 leading-tight">
              Experiencia que se traduz em <em className="text-[#B8783D]">resultados mensuráveis</em>.
            </h2>

            <p className="text-lg leading-relaxed mb-6 text-[#374151]">
              <strong className="text-[#0C2340] font-semibold">Quem ensinou Samir foi o proprio pai.</strong> Cresceu dentro de farmacia magistral, ouvindo conversa de balcao e vendo manipulacao acontecer desde crianca. Esse legado familiar virou paixao por compartilhar conhecimento — e a paixao virou metodo de ensinar e formar profissionais Brasil afora.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-[#374151]">
              <strong className="text-[#0C2340] font-semibold">Samir Tannuri</strong> passou os ultimos seis anos coordenando o P&D de cosmeticos no <strong className="text-[#0C2340] font-semibold">maior grupo magistral do Brasil</strong>. Nesse periodo, formulou, escalonou, resolveu desvio de lote, atendeu tecnicamente mais de 500 farmacias magistrais e treinou mais de mil formuladores no pais inteiro.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-[#374151]">
              Desde 2021, lidera <strong className="text-[#0C2340] font-semibold">atividades laboratoriais e projetos de Pesquisa e Desenvolvimento</strong>, conduzindo iniciativas cientificas inovadoras com foco na identificacao de novas solucoes, otimizacao de processos e desenvolvimento de formulacoes de alta performance. Colabora com <strong className="text-[#0C2340] font-semibold">equipes multidisciplinares</strong> para atender as demandas do mercado farmaceutico e cosmetico.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-[#374151]">
              A <strong className="text-[#0C2340] font-semibold">ST Farma — Consultoria em Tecnologia Farmaceutica</strong> nasce para levar essa vivencia operacional para dentro da sua empresa. Nao e aula. Nao e palestra motivacional. E consultoria tecnica, documentada, com entregaveis claros: diagnostico de formulacao, reformulacao de portfolio, estudo de estabilidade, transferencia de tecnologia, selecao de ativos e due diligence de ingredientes.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-[#374151]">
              Ministra <strong className="text-[#0C2340] font-semibold">aulas em programas tecnico-cientificos</strong> abordando tecnologia farmaceutica, cosmetica e protocolos avancados de tratamentos esteticos. Como estudante de <strong className="text-[#0C2340] font-semibold">Nutricao e Ciencias Biomedicas</strong>, integra conhecimento academico e aplicacao pratica para promover avancos nos setores de saude e cuidados pessoais.
            </p>

            <p className="text-lg leading-relaxed mb-8 text-[#374151]">
              Criador do primeiro peeling de acido azelaico em pasta anidra do mundo e autor da <strong className="text-[#0C2340] font-semibold">Tecnica Fenol FREE</strong>. Co-assina paper peer-reviewed sobre fotoprotecao em peles negras. Delegado tecnico In-Cosmetics Global Paris 2025, com missoes em Amsterdam e Toquio.
            </p>

            {/* Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base text-[#0C2340] font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#0a8f9e]/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0a8f9e]" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="border-l-4 border-[#B8783D] py-6 px-7 bg-[#B8783D]/10 rounded-r-2xl mt-10">
              <p className="font-serif italic text-xl text-[#0C2340] leading-relaxed mb-3">
                {'"'}Formula boa nao nasce de opiniao — nasce de evidencia, metodo e iteracao.{'"'}
              </p>
              <span className="text-sm text-[#64748b] font-medium">— Samir Tannuri</span>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B8783D] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#9a6530] transition-colors"
              >
                Falar sobre um projeto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 border-2 border-[#0C2340] text-[#0C2340] font-semibold px-6 py-3.5 rounded-xl hover:bg-[#0C2340] hover:text-white transition-colors"
              >
                Ver portfolio de inovacoes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
