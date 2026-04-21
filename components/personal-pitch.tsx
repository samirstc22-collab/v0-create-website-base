import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote, Sparkles, Target, TrendingUp, Heart } from "lucide-react"

export function PersonalPitch() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#b87333]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern id="pitchGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pitchGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e8a87c]">
            <Sparkles className="h-3.5 w-3.5" />
            A primeira consultoria 100% personalizada
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Sua farmácia não é igual a nenhuma outra.{" "}
            <span className="italic text-[#e8a87c]">Sua consultoria também não deveria ser.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
            Prof. Samir Tannuri desenvolveu a <strong className="text-white">primeira metodologia de consultoria
            farmacêutica verdadeiramente personalizada</strong> do Brasil — construída peça por peça para transformar a
            realidade específica da sua farmácia ou drogaria em lucratividade real.
          </p>
        </div>

        {/* Split layout with photo and manifesto */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Big portrait */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/samir-portrait-sofa.jpg"
                  alt="Prof. Samir Tannuri sentado, postura confiante e profissional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              </div>

              {/* Floating credentials card */}
              <div className="absolute -bottom-6 -right-6 hidden max-w-[260px] rounded-xl border border-white/10 bg-white/95 p-5 shadow-2xl backdrop-blur-sm md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0a1628]">
                    <Heart className="h-5 w-5 text-[#e8a87c]" />
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-wider text-[#0a1628]/60">
                      Compromisso
                    </div>
                    <div className="font-serif text-sm italic text-[#0a1628]">
                      "Ensinar é transformar vidas."
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-2xl border-l-4 border-t-4 border-[#b87333]" />
            </div>
          </div>

          {/* Right: Manifesto */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm md:p-10">
              <Quote className="mb-6 h-10 w-10 text-[#b87333]" />

              <p className="font-serif text-2xl leading-relaxed text-white md:text-3xl">
                "Eu não acredito em receita de bolo. Cada farmácia tem sua{" "}
                <em className="text-[#e8a87c]">alma</em>, seu público, seus desafios e seu potencial único.{" "}
                Minha missão é mergulhar no seu negócio e extrair dele a{" "}
                <em className="text-[#e8a87c]">melhor versão possível</em>."
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#b87333]/40">
                  <Image
                    src="/images/samir-portrait-smile.jpg"
                    alt="Prof. Samir Tannuri"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">Prof. Samir Tannuri</div>
                  <div className="text-sm text-white/60">
                    Farmacêutico · Consultor · 24 anos transformando negócios
                  </div>
                </div>
              </div>
            </div>

            {/* Three pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico real",
                  text: "Visitas, análise de fluxo, equipe e mix de produtos.",
                },
                {
                  icon: Sparkles,
                  title: "Plano sob medida",
                  text: "Estratégia construída para o seu público e sua região.",
                },
                {
                  icon: TrendingUp,
                  title: "Lucro comprovado",
                  text: "Métricas acompanhadas mês a mês até o resultado.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#b87333]/40 hover:bg-white/[0.05]"
                >
                  <pillar.icon className="mb-3 h-6 w-6 text-[#e8a87c]" />
                  <div className="font-medium text-white">{pillar.title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-white/60">{pillar.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching passion banner */}
        <div className="mt-24 grid gap-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:grid-cols-2 md:p-12 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:aspect-[4/3]">
              <Image
                src="/images/samir-stage-gesture.jpg"
                alt="Prof. Samir Tannuri no palco ministrando palestra com energia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-[#0a1628] px-5 py-3 shadow-xl">
              <div className="text-xs font-medium uppercase tracking-wider text-[#e8a87c]">
                Congresso Nacional
              </div>
              <div className="font-serif text-sm italic text-white">Em palco desde 2015</div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#2dd4bf]">
              Paixão por ensinar
            </div>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-white md:text-4xl">
              Cada slide é um pedaço da <em className="text-[#e8a87c]">minha história</em> com a farmácia.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Em mais de <strong className="text-white">800 palestras</strong> Brasil afora, o Prof. Samir construiu
              uma reputação inconfundível: falar de farmácia com{" "}
              <strong className="text-white">ciência, coração e aplicação imediata</strong>. É essa mesma energia
              que ele leva para dentro da sua operação na consultoria.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Aulas construídas na rotina real do balcão e da manipulação",
                "Linguagem clara para equipe, farmacêutico e gestor",
                "Conteúdo que vira protocolo, vitrine e caixa cheio",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Promise + CTA */}
        <div className="mt-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="text-xs font-medium uppercase tracking-[0.25em] text-[#e8a87c]">
              A promessa Samir Tannuri
            </div>
            <h3 className="mt-4 font-serif text-3xl leading-[1.1] text-white md:text-5xl">
              Transformar cada farmácia em um{" "}
              <em className="text-[#e8a87c]">negócio lucrativo, respeitado e insubstituível</em> em sua comunidade.
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Nenhum modelo pronto. Nenhuma planilha genérica. Um plano construído olhando nos olhos do seu time,
              estudando o seu caixa e entendendo exatamente o que sua região precisa comprar da sua farmácia —
              e de mais ninguém.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/consultoria"
                className="group inline-flex items-center gap-2 rounded-full bg-[#b87333] px-8 py-4 text-base font-medium text-white shadow-lg shadow-[#b87333]/20 transition hover:bg-[#a0632c]"
              >
                Quero uma consultoria personalizada
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Falar com o Prof. Samir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
