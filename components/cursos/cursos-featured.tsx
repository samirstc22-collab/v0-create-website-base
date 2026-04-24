import Link from "next/link"
import Image from "next/image"
import { Flame, Clock, Users, PlayCircle, ArrowRight, CheckCircle2 } from "lucide-react"

export function CursosFeatured() {
  const modules = [
    "Princípios de formulação magistral avançada",
    "Ativos dermatológicos de última geração",
    "Veiculação inteligente e biodisponibilidade",
    "Estudo de estabilidade acelerada",
    "Precificação estratégica e margem de contribuição",
    "Storytelling técnico para o balcão",
  ]

  return (
    <section className="relative bg-[#f7f3ee] py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/5 px-4 py-1.5">
              <Flame className="h-3.5 w-3.5 text-[#b87333]" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
                Curso em destaque
              </span>
            </div>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-[#0a1628] md:text-5xl lg:text-6xl">
              Masterclass em <em className="text-[#b87333]">Cosmetologia Magistral Avançada</em>
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#b87333]/10 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#b87333]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#b87333]">
              Matrículas abertas
            </span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Content */}
          <div className="rounded-[28px] border border-[#0a1628]/10 bg-white p-8 shadow-[0_20px_60px_rgba(10,22,40,0.08)] md:p-12">
            <h3 className="font-serif text-2xl leading-tight text-[#0a1628] md:text-3xl">
              O curso que encerra a era dos formulários aleatórios na sua farmácia.
            </h3>
            <p className="mt-5 text-base leading-[1.7] text-[#0a1628]/70 md:text-lg">
              Oito semanas de imersão construídas sobre o mesmo arcabouço que o Samir usa para
              consultar grandes indústrias: bancada, ciência, margem e execução.{" "}
              <span className="font-semibold text-[#0a1628]">
                Você termina o curso com sete fórmulas proprietárias prontas para rodar no seu
                balcão.
              </span>
            </p>

            {/* Stats row */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-[#0a1628]/10 bg-[#f7f3ee] px-4 py-3">
                <Clock className="h-5 w-5 text-[#b87333]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0a1628]/50">
                    Duração
                  </div>
                  <div className="text-sm font-semibold text-[#0a1628]">8 semanas</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#0a1628]/10 bg-[#f7f3ee] px-4 py-3">
                <PlayCircle className="h-5 w-5 text-[#b87333]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0a1628]/50">
                    Aulas
                  </div>
                  <div className="text-sm font-semibold text-[#0a1628]">42 vídeos HD</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#0a1628]/10 bg-[#f7f3ee] px-4 py-3">
                <Users className="h-5 w-5 text-[#b87333]" />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0a1628]/50">
                    Mentoria
                  </div>
                  <div className="text-sm font-semibold text-[#0a1628]">Grupo fechado</div>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="mt-8">
              <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#0a1628]/50">
                O que você vai dominar
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {modules.map((m) => (
                  <div key={m} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b87333]" />
                    <span className="text-sm leading-relaxed text-[#0a1628]/80">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#0a1628]/10 pt-8">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0a1628]/50">
                  Investimento
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-[#0a1628]/40 line-through">R$ 4.997</span>
                  <span className="font-serif text-4xl text-[#0a1628]">
                    12x <span className="text-[#b87333]">R$ 297</span>
                  </span>
                </div>
              </div>
              <Link
                href="/contato"
                className="group ml-auto inline-flex items-center gap-2 rounded-xl bg-[#0a1628] px-7 py-4 text-sm font-bold text-white shadow-[0_8px_30px_rgba(10,22,40,0.25)] transition-all hover:-translate-y-0.5 hover:bg-[#b87333]"
              >
                Garantir minha vaga
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[28px] border border-[#0a1628]/10 shadow-[0_30px_80px_rgba(10,22,40,0.2)]">
              <Image
                src="/images/samir-portrait-stool.jpg"
                alt="Samir Tannuri"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl border border-[#0a1628]/10 bg-white p-5 shadow-[0_20px_50px_rgba(10,22,40,0.15)]">
              <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
                Consultor Senior
              </div>
              <div className="mt-1 font-serif text-lg text-[#0a1628]">Samir Tannuri</div>
              <p className="mt-1 text-xs leading-relaxed text-[#0a1628]/60">
                Consultor em Tecnologia Farmacêutica-UNICAMP, 800+ palestras, publicação peer-reviewed indexada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
