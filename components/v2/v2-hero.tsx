import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function V2Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-24 overflow-hidden bg-[#f5f1e8]"
    >
      {/* Subtle botanical backdrop */}
      <svg
        className="absolute top-20 right-0 w-[620px] h-[620px] text-[#1a3d2e]/[0.05] pointer-events-none"
        viewBox="0 0 400 400"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M200 40c-60 40-90 110-90 180s30 140 90 140 90-70 90-140-30-140-90-180z" />
        <path d="M200 40v320M140 90c30 20 50 55 60 100M260 90c-30 20-50 55-60 100M120 180c40 10 60 40 80 80M280 180c-40 10-60 40-80 80" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>

      {/* Grid of small dots */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a3d2e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_1fr] gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2.5 bg-[#1a3d2e]/8 border border-[#1a3d2e]/15 rounded-full px-5 py-2.5 mb-9">
            <Sparkles className="w-3.5 h-3.5 text-[#c9a961]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#1a3d2e]">
              Edição Esmeralda · Paleta Alternativa
            </span>
          </div>

          <h1 className="font-serif text-[#0f2419] text-[clamp(44px,6.8vw,84px)] leading-[0.98] tracking-[-0.02em] mb-8">
            A farmácia magistral,{" "}
            <em className="text-[#1a3d2e]">reescrita</em> em{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ciência</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#c9a961]/40 -z-0" />
            </span>
            .
          </h1>

          <p className="text-lg md:text-xl text-[#0f2419]/70 leading-[1.7] max-w-[580px] mb-10">
            Vinte e quatro anos de bancada, vinte indústrias atendidas, três continentes
            percorridos.{" "}
            <span className="text-[#0f2419]">
              Um método autoral que traduz evidência científica em lucro previsível
            </span>{" "}
            — do gral de porcelana ao caixa do fim do mês.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 bg-[#1a3d2e] text-[#f5f1e8] px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-[#0f2419] transition-all shadow-[0_10px_32px_rgba(26,61,46,0.28)]"
            >
              Agendar conversa reservada
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 text-[#1a3d2e] font-semibold text-sm border-b-2 border-[#c9a961] pb-1 hover:border-[#1a3d2e] transition-colors"
            >
              Conhecer o método
            </a>
          </div>

          {/* Signature row */}
          <div className="mt-14 pt-8 border-t border-[#1a3d2e]/12 flex flex-wrap items-center gap-x-10 gap-y-4">
            {[
              { n: "26", l: "capitais visitadas" },
              { n: "15+", l: "países em missão" },
              { n: "12k", l: "alunos formados" },
              { n: "4k+", l: "fórmulas validadas" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-[#1a3d2e] leading-none">
                  {s.n}
                </div>
                <div className="text-[11px] uppercase tracking-[1.8px] text-[#0f2419]/55 mt-1.5 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="absolute -inset-6 bg-[#c9a961]/25 rounded-[32px] blur-2xl" />
          <div className="relative rounded-[28px] overflow-hidden border border-[#1a3d2e]/15 aspect-[4/5] shadow-[0_30px_80px_rgba(15,36,25,0.25)]">
            <Image
              src="/images/samir-portrait-stool.jpg"
              alt="Prof. Samir Tannuri"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2419]/30 via-transparent to-transparent" />
          </div>

          {/* Credential tags */}
          <div className="absolute -left-4 md:-left-8 bottom-14 bg-[#f5f1e8] border border-[#1a3d2e]/12 rounded-2xl px-5 py-4 shadow-xl">
            <div className="text-[10px] uppercase tracking-[2px] text-[#1a3d2e]/60 font-bold">
              Pesquisador associado
            </div>
            <div className="font-serif text-xl text-[#0f2419] mt-1">
              CNPq · UNICAMP
            </div>
          </div>
          <div className="absolute -right-4 md:-right-8 top-16 bg-[#1a3d2e] text-[#f5f1e8] rounded-2xl px-5 py-4 shadow-xl">
            <div className="text-[10px] uppercase tracking-[2px] text-[#c9a961] font-bold">
              Publicação indexada
            </div>
            <div className="font-serif text-xl mt-1 italic">Peer-reviewed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
