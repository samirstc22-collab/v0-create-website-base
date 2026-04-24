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
          <h2 className="mt-6 font-serif text-4xl leading-[1.03] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
            Sua farmácia não é igual a nenhuma outra.{" "}
            <span className="italic text-[#e8a87c]">Sua consultoria também não deveria ser.</span>
          </h2>
          <p className="mt-8 text-lg leading-[1.7] text-white/75 md:text-xl">
            O Samir Tannuri concebeu a{" "}
            <strong className="text-white">primeira metodologia brasileira de consultoria em magistral
            verdadeiramente personalizada</strong> — forjada em mais de duas décadas de balcão, bancada e
            indústria, construída linha por linha para transformar a geografia, o público e o potencial
            específicos da sua farmácia em{" "}
            <em className="text-[#e8a87c] not-italic font-semibold">lucratividade mensurável</em>.
          </p>
        </div>

        {/* Split layout with photo and manifesto */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Big portrait */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Samir Tannuri sentado, postura confiante e profissional"
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

              <p className="font-serif text-2xl leading-[1.4] text-white md:text-3xl">
                &ldquo;Eu não acredito em receita de bolo. Cada farmácia carrega uma{" "}
                <em className="text-[#e8a87c]">alma</em> própria — um bairro, um público, uma história.{" "}
                Minha missão é mergulhar até o chão do seu negócio e extrair dele a{" "}
                <em className="text-[#e8a87c]">melhor versão possível</em> — com ciência na bancada,
                estratégia no caixa e ternura no atendimento.&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#b87333]/40">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Samir Tannuri"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">Samir Tannuri</div>
                  <div className="text-sm text-white/60">
                    Professor · Consultor · 24 anos transformando negócios
                  </div>
                </div>
              </div>
            </div>

            {/* Three pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: "Diagnóstico de campo",
                  text: "Visitas presenciais, leitura do fluxo, escuta da equipe e raio-X do mix.",
                },
                {
                  icon: Sparkles,
                  title: "Plano sob medida",
                  text: "Estratégia desenhada para o seu público, sua região e o seu caixa real.",
                },
                {
                  icon: TrendingUp,
                  title: "Lucro mensurável",
                  text: "Indicadores acompanhados mês a mês, com metas claras e resultado comprovado.",
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
                src="/placeholder.svg?height=600&width=800"
                alt="Samir Tannuri no palco ministrando palestra com energia"
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
            <h3 className="mt-3 font-serif text-3xl leading-[1.1] text-white md:text-4xl lg:text-[44px]">
              Cada slide carrega um pedaço da{" "}
              <em className="text-[#e8a87c]">minha história</em> com a farmácia.
            </h3>
            <p className="mt-6 text-base leading-[1.7] text-white/75 md:text-lg">
              Em mais de <strong className="text-white">800 palestras</strong> em congressos
              nacionais e internacionais, o Samir consolidou uma reputação inconfundível:
              discutir farmácia com{" "}
              <strong className="text-white">rigor científico, afeto humano e aplicabilidade imediata</strong>.
              É exatamente essa energia — disciplinada no rigor e contagiosa no entusiasmo — que ele
              transporta, dia após dia, para dentro da sua operação na consultoria.
            </p>

            <ul className="mt-7 space-y-3.5 text-sm leading-relaxed text-white/85 md:text-base">
              {[
                "Aulas construídas sobre a rotina real do balcão, da bancada e da manipulação",
                "Linguagem cristalina para especialista, equipe de atendimento e gestor de caixa",
                "Conteúdo que, já no dia seguinte, vira protocolo, vitrine e ticket médio maior",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8a87c]" />
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
            <h3 className="mt-4 font-serif text-3xl leading-[1.05] tracking-[-0.015em] text-white md:text-5xl lg:text-[56px]">
              Transformar cada farmácia em um{" "}
              <em className="text-[#e8a87c]">negócio lucrativo, respeitado e insubstituível</em>{" "}
              em sua comunidade.
            </h3>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.7] text-white/75 md:text-lg">
              Nenhum modelo pronto. Nenhuma planilha reciclada. Nenhum relatório de gaveta. Um plano
              arquitetado olhando nos olhos do seu time, estudando a respiração do seu caixa e
              compreendendo, com precisão de bisturi, o que o seu bairro precisa comprar da sua
              farmácia — e de mais <em className="text-[#e8a87c] not-italic font-semibold">nenhuma outra</em>.
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
                Falar com o Samir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
