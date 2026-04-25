import Image from "next/image"
import { GraduationCap, Microscope, Mic, FlaskConical, BookOpen, Users } from "lucide-react"

export function SobreHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#b87333]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-8">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e8a87c]">
            Quem conduz a ST Farma
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
            Samir <em className="text-[#e8a87c]">Tannuri</em>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            <strong className="text-white">Consultor em Tecnologia Magistral</strong> com seis anos liderando P&D no maior grupo magistral do Brasil. Mais de <strong className="text-white">500 farmacias atendidas tecnicamente</strong> e <strong className="text-white">1.000+ formuladores treinados</strong> em programas proprios. Desde 2021, conduzo iniciativas cientificas inovadoras em laboratorios e projetos de Pesquisa e Desenvolvimento — identificando novas solucoes, otimizando processos e desenvolvendo formulacoes de alta performance.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            Essa experiencia agora e aplicada em <strong className="text-white/80">consultoria sob medida para industrias, laboratorios magistrais e marcas</strong>. Colaboro com equipes multidisciplinares para atender as demandas do mercado farmaceutico e cosmetico — do diagnostico de formulacao a transferencia de tecnologia.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <FlaskConical className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">6 Anos P&D</div>
              <div className="text-xs text-white/60">Maior grupo magistral BR</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Users className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">1.000+ Treinados</div>
              <div className="text-xs text-white/60">Formuladores e tecnicos</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Mic className="mb-3 h-6 w-6 text-[#e8a87c]" />
              <div className="text-sm font-medium text-white">Delegado Tecnico</div>
              <div className="text-xs text-white/60">In-Cosmetics Paris 2025</div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <GraduationCap className="mb-3 h-6 w-6 text-[#2dd4bf]" />
              <div className="text-sm font-medium text-white">Formacao Academica</div>
              <div className="text-xs text-white/60">Nutricao & Ciencias Biomedicas</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <BookOpen className="mb-3 h-6 w-6 text-[#2dd4bf]" />
              <div className="text-sm font-medium text-white">Professor</div>
              <div className="text-xs text-white/60">Cursos, Congressos & MBAs</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <Microscope className="mb-3 h-6 w-6 text-[#2dd4bf]" />
              <div className="text-sm font-medium text-white">Pesquisa Cientifica</div>
              <div className="text-xs text-white/60">Paper DOI Peer-Reviewed</div>
            </div>
          </div>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4128-pAVchu8AAaVoA2fHFbF3NfNqx04xGp.jpeg"
                alt="Samir Tannuri — Consultor em Tecnologia Magistral no In-Cosmetics Global Paris"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#b87333]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#2dd4bf]" />
          </div>
        </div>
      </div>
    </section>
  )
}
