import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  FlaskConical,
  Sparkles,
  Microscope,
  GraduationCap,
  Heart,
  Award,
} from "lucide-react"

export function HomeTrajectory() {
  const innovations = [
    {
      icon: FlaskConical,
      title: "Técnica Fenol FREE",
      description:
        "Protocolo autoral que substitui o fenol por sistema seguro, com performance clínica equivalente e maior conformidade regulatória.",
    },
    {
      icon: Sparkles,
      title: "Peeling de Ácido Azelaico em pasta anidra",
      description:
        "Primeiro do Brasil. Estabilidade superior, ativo em alta concentração e veículo desenhado para resultado clínico mensurável.",
    },
    {
      icon: Microscope,
      title: "P&D documentado e reprodutível",
      description:
        "Formulações com racional científico, estudos de estabilidade e transferência de tecnologia prontas para escalar na sua farmácia.",
    },
  ]

  const milestones = [
    "24+ anos imerso em formulação magistral",
    "500+ farmácias atendidas tecnicamente",
    "1.000+ formuladores treinados em programas próprios",
    "Coordenação de P&D no maior grupo magistral do Brasil",
    "Criador da Técnica Fenol FREE e do peeling de azelaico em pasta anidra",
    "Consultor de 20+ indústrias cosméticas",
  ]

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 lg:py-32 px-6 lg:px-10">
      {/* Sutil padrão de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(11,29,53,0.6) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow decorativo */}
      <div
        aria-hidden
        className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(184,120,61,0.25) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* Eyebrow + título centralizado */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B8783D]/25 bg-[#B8783D]/8 px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
              Minha Trajetória
            </span>
          </div>
          <h2 className="font-serif font-normal text-[clamp(34px,4.6vw,56px)] text-[#0C2340] leading-[1.08] tracking-[-1px] max-w-[920px] mx-auto text-balance">
            Da bancada do meu pai para as{" "}
            <em className="italic text-[#B8783D]">maiores farmácias do Brasil</em>.
          </h2>
          <p className="mt-6 text-lg text-[#374151] leading-relaxed max-w-[720px] mx-auto text-pretty">
            Habilidade técnica, inovação aplicada e mais de duas décadas dentro do setor magistral
            — transformadas em formulações que vendem, fidelizam e diferenciam farmácias no mercado.
          </p>
        </div>

        {/* Bloco principal: foto + texto */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Foto */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[440px]">
              {/* Moldura champagne */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-[#B8783D]/30" aria-hidden />
              <div className="absolute -inset-1.5 rounded-3xl border border-[#B8783D]/15" aria-hidden />

              {/* Glow atrás da foto */}
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full opacity-40"
                style={{
                  background:
                    "radial-gradient(circle, rgba(184,120,61,0.30) 0%, rgba(157,190,177,0.18) 45%, transparent 75%)",
                  filter: "blur(50px)",
                }}
              />

              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(12,35,64,0.25)] bg-[#0C2340]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2000.11.30-UkIMWFmpL5lZ3gn4blX8ZmP2oSU9L6.jpeg"
                  alt="Prof. Samir Tannuri sorrindo com jaleco branco bordado — consultor em formulação magistral"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Badge inferior premium */}
              <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[#B8783D]/35 rounded-2xl px-5 py-4 shadow-[0_15px_40px_rgba(12,35,64,0.18)] max-w-[260px]">
                <div className="text-[10px] uppercase tracking-[2.5px] text-[#B8783D] font-bold mb-1">
                  Prof. Samir Tannuri
                </div>
                <div className="text-[#0C2340] text-[14px] font-bold leading-tight">
                  Consultor em Tecnologia Magistral
                </div>
              </div>

              {/* Decorações de canto */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-[3px] border-r-[3px] border-[#9DBEB1]/55 rounded-br-2xl" aria-hidden />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-[3px] border-l-[3px] border-[#B8783D]/55 rounded-tl-2xl" aria-hidden />
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-5">
              <Heart className="w-4 h-4 text-[#B8783D]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#B8783D]">
                A herança que virou método
              </span>
            </div>

            <h3 className="font-serif text-[28px] md:text-[34px] text-[#0C2340] leading-tight mb-6 tracking-[-0.5px]">
              Aprendi a manipular antes de aprender a falar de mercado.
            </h3>

            <p className="text-[17px] text-[#374151] leading-relaxed mb-5">
              <strong className="text-[#0C2340] font-semibold">Quem me ensinou foi meu pai.</strong>{" "}
              Cresci dentro de farmácia magistral, ouvindo conversa de balcão, vendo manipulação
              acontecer e entendendo, ainda criança, que cada fórmula é um pedaço de ciência
              transformado em cuidado. Esse legado virou paixão — e a paixão virou método.
            </p>

            <p className="text-[17px] text-[#374151] leading-relaxed mb-5">
              Hoje compartilhar conhecimento é missão pessoal. Já formei{" "}
              <strong className="text-[#0C2340] font-semibold">mais de 1.000 formuladores</strong>,
              ministrei aulas em congressos nacionais e internacionais, e desenvolvi protocolos que
              hoje rodam em farmácias do Brasil inteiro. Ensinar é como honro o que recebi.
            </p>

            <p className="text-[17px] text-[#374151] leading-relaxed mb-8">
              É essa combinação — <strong className="text-[#0C2340] font-semibold">vivência de
              bancada + ciência atualizada + visão de negócio</strong> — que entrego para farmácias
              e indústrias que querem inovar com segurança, performance e diferenciação real.
            </p>

            {/* CTAs estratégicos */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-3 bg-[#0C2340] text-white px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide hover:bg-[#0a1d36] hover:translate-y-[-2px] transition-all shadow-[0_10px_30px_rgba(12,35,64,0.25)]"
              >
                <FlaskConical className="w-4 h-4" />
                Quero desenvolver com estratégia
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultoria"
                className="group inline-flex items-center justify-center gap-3 border-2 border-[#B8783D] text-[#B8783D] px-7 py-4 rounded-xl font-bold text-[15px] tracking-wide hover:bg-[#B8783D] hover:text-white transition-all"
              >
                Falar com consultoria
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Inovações & criações */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-10 bg-[#B8783D]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#B8783D]">
                Inovações & Criações Autorais
              </span>
              <span className="h-px w-10 bg-[#B8783D]" />
            </div>
            <h3 className="font-serif text-[28px] md:text-[36px] text-[#0C2340] leading-tight tracking-[-0.5px] max-w-[760px] mx-auto text-balance">
              Tecnologias autorais que viraram{" "}
              <em className="italic text-[#B8783D]">padrão de mercado</em>.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {innovations.map((item) => (
              <div
                key={item.title}
                className="group relative bg-white border border-[#0C2340]/10 rounded-2xl p-7 hover:border-[#B8783D]/40 hover:shadow-[0_20px_50px_rgba(12,35,64,0.10)] hover:translate-y-[-4px] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#B8783D]/10 flex items-center justify-center mb-5 group-hover:bg-[#B8783D]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#B8783D]" />
                </div>
                <h4 className="font-serif text-[20px] text-[#0C2340] leading-tight mb-3">
                  {item.title}
                </h4>
                <p className="text-[14.5px] text-[#374151] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marcos de carreira + CTA final */}
        <div className="bg-[#0C2340] rounded-3xl px-8 py-12 lg:px-14 lg:py-16 relative overflow-hidden">
          {/* Decoração */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212,185,140,0.6) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(212,185,140,0.35) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-5">
                <Award className="w-4 h-4 text-[#D4B98C]" />
                <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#D4B98C]">
                  Marcos de carreira
                </span>
              </div>
              <h3 className="font-serif text-[28px] md:text-[36px] text-[#F4EDE0] leading-tight mb-8 tracking-[-0.5px]">
                Experiência que não dá pra terceirizar.
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {milestones.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[#F4EDE0]/95 text-[15px] leading-snug">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[#D4B98C] shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#D4B98C]/15 to-[#D4B98C]/5 border border-[#D4B98C]/30 rounded-2xl p-8 backdrop-blur-sm">
                <GraduationCap className="w-8 h-8 text-[#D4B98C] mb-4" />
                <h4 className="font-serif text-[22px] text-[#F4EDE0] leading-tight mb-3">
                  Pronto para inovar com método?
                </h4>
                <p className="text-[14.5px] text-[#F4EDE0]/85 leading-relaxed mb-6">
                  Vamos desenhar juntos o caminho técnico, comercial e científico para sua farmácia
                  ou indústria crescer com diferenciação real.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/contato"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#a68449] via-[#D4B98C] to-[#a68449] text-[#0C2340] px-6 py-3.5 rounded-xl font-bold text-[14.5px] tracking-wide hover:shadow-[0_0_40px_rgba(212,185,140,0.55)] transition-all"
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    Quero desenvolver com estratégia
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/consultoria"
                    className="group inline-flex items-center justify-center gap-3 bg-transparent text-[#F4EDE0] px-6 py-3.5 rounded-xl font-bold text-[14.5px] tracking-wide border-2 border-[#F4EDE0]/30 hover:bg-[#F4EDE0]/10 hover:border-[#F4EDE0]/55 transition-all"
                  >
                    Falar com consultoria
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
