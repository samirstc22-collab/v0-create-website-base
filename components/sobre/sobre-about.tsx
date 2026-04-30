import Image from "next/image"
import { Quote } from "lucide-react"

export function SobreAbout() {
  return (
    <section id="sobre" className="relative bg-[#F8F6F2] py-24 lg:py-32 px-6 lg:px-10">
      {/* Padrão sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.6) 1px, transparent 0)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-[1180px] mx-auto">
        {/* Eyebrow */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B8783D]/25 bg-[#B8783D]/8 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
              Sobre · Manifesto
            </span>
          </div>
        </div>

        {/* Frase de abertura — destaque editorial */}
        <h2 className="font-serif font-normal text-[clamp(30px,4.2vw,50px)] text-[#0C2340] leading-[1.12] tracking-[-1px] text-center max-w-[940px] mx-auto text-balance mb-20">
          Ensinar o que amo é minha missão. Compartilhar conhecimento, provocar reflexões,{" "}
          <em className="italic text-[#B8783D]">traduzir ciência em prática</em> — isso me move.
        </h2>

        {/* Bloco principal: foto + texto narrativo */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Foto */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative mx-auto max-w-[420px]">
              <div className="absolute -inset-3 rounded-3xl border-2 border-[#B8783D]/25" aria-hidden />
              <div
                aria-hidden
                className="absolute -inset-10 rounded-full opacity-35 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(184,120,61,0.30) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-[0_30px_70px_rgba(12,35,64,0.22)] bg-[#0C2340]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2000.11.30-UkIMWFmpL5lZ3gn4blX8ZmP2oSU9L6.jpeg"
                  alt="Prof. Samir Tannuri — professor, pesquisador e consultor"
                  fill
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div
                className="absolute -bottom-3 -right-3 w-20 h-20 border-b-[3px] border-r-[3px] border-[#B8783D]/55 rounded-br-2xl"
                aria-hidden
              />
              <div
                className="absolute -top-3 -left-3 w-20 h-20 border-t-[3px] border-l-[3px] border-[#B8783D]/55 rounded-tl-2xl"
                aria-hidden
              />
            </div>
          </div>

          {/* Texto narrativo — fiel ao manifesto */}
          <div className="lg:col-span-7">
            <p className="text-[18px] leading-[1.8] text-[#374151] mb-6">
              Sou{" "}
              <strong className="text-[#0C2340] font-semibold">
                professor, pesquisador e consultor da indústria
              </strong>
              . Minha trajetória começou nos laboratórios de pesquisa da{" "}
              <strong className="text-[#0C2340] font-semibold">FCF-UNICAMP</strong>, onde aprendi
              que rigor científico e curiosidade caminham juntos. Depois vieram os{" "}
              <strong className="text-[#0C2340] font-semibold">
                fibroblastos humanos na Universidade São Francisco
              </strong>
              , os{" "}
              <strong className="text-[#0C2340] font-semibold">
                polímeros odontológicos na FOP-UNICAMP
              </strong>
              , e dezenas de cursos, palestras e aulas que ministrei desde então.
            </p>

            <p className="text-[18px] leading-[1.8] text-[#374151] mb-6">
              Cada sala de aula, cada bancada, cada protocolo desenvolvido reforça uma certeza:{" "}
              <strong className="text-[#0C2340] font-semibold">
                conhecimento existe para circular
              </strong>
              . Eu aprendo ensinando. Ensino aprendendo. E nisso encontro propósito.
            </p>

            <p className="text-[18px] leading-[1.8] text-[#374151] mb-10">
              Essa lógica aplico na docência e na consultoria:{" "}
              <strong className="text-[#0C2340] font-semibold">
                não entrego fórmulas mágicas. Entrego fundamentos. Evidências
              </strong>
              . Caminhos para que médicos, farmacêuticos e profissionais da saúde tomem decisões
              clínicas{" "}
              <span className="font-semibold text-[#B8783D]">
                conscientes, seguras e personalizadas
              </span>
              .
            </p>

            {/* Citação destacada — Cora Coralina */}
            <figure className="relative my-12 rounded-2xl border-l-[4px] border-[#B8783D] bg-white px-8 py-8 shadow-[0_15px_40px_rgba(12,35,64,0.08)]">
              <Quote
                className="absolute -top-4 left-6 w-9 h-9 text-[#B8783D] bg-[#F8F6F2] rounded-full p-1.5"
                aria-hidden
              />
              <blockquote className="font-serif italic text-[22px] md:text-[26px] leading-[1.4] text-[#0C2340] tracking-[-0.3px] mb-3">
                &ldquo;Feliz aquele que transfere o que sabe e aprende o que ensina.&rdquo;
              </blockquote>
              <figcaption className="text-[12px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
                — Cora Coralina
              </figcaption>
            </figure>

            <p className="text-[19px] leading-[1.7] text-[#0C2340] font-serif italic mb-12">
              É exatamente isso que faço.{" "}
              <strong className="not-italic font-bold text-[#B8783D]">
                E é exatamente por isso que sigo.
              </strong>
            </p>

            {/* Assinatura */}
            <div className="border-t border-[#0C2340]/15 pt-8">
              <div className="font-serif text-[28px] text-[#0C2340] tracking-[-0.5px] mb-2">
                Samir Tannuri
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-bold uppercase tracking-[2px] text-[#B8783D] mb-3">
                <span>Professor</span>
                <span className="text-[#B8783D]/40">|</span>
                <span>Pesquisador</span>
                <span className="text-[#B8783D]/40">|</span>
                <span>Consultor</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#374151]">
                <span>Dermatologia Clínica Aplicada</span>
                <span className="text-[#0C2340]/30">|</span>
                <span>Desenvolvimento de Formulações</span>
                <span className="text-[#0C2340]/30">|</span>
                <span>Educação Científica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
