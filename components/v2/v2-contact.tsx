import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react"

export function V2Contact() {
  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 bg-[#f5f1e8] overflow-hidden"
    >
      {/* Terracotta accent */}
      <div className="absolute top-1/2 -left-40 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#c97a5e]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#c9a961]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 text-center">
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#1a3d2e] font-bold mb-6">
          <span className="w-8 h-px bg-[#c9a961]" />
          Vamos conversar
          <span className="w-8 h-px bg-[#c9a961]" />
        </div>

        <h2 className="font-serif text-5xl md:text-7xl text-[#0f2419] leading-[1.02] tracking-[-0.02em]">
          Transforme sua farmácia em um{" "}
          <em className="text-[#1a3d2e]">projeto insubstituível</em>.
        </h2>

        <p className="mt-7 text-lg md:text-xl text-[#0f2419]/70 leading-[1.65] max-w-2xl mx-auto">
          Agende uma conversa reservada de 30 minutos com o Prof. Samir. Sem fórmulas
          prontas, sem discurso padrão — apenas escuta, leitura do seu cenário e desenho
          inicial de rota.
        </p>

        {/* CTA card */}
        <div className="mt-14 bg-[#1a3d2e] text-[#f5f1e8] rounded-[32px] p-10 md:p-14 text-left max-w-4xl mx-auto shadow-[0_30px_80px_rgba(15,36,25,0.25)]">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-3">
                Primeira consulta · sem compromisso
              </div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                Diagnóstico inicial com o Prof. Samir em pessoa.
              </h3>
              <p className="mt-4 text-[#f5f1e8]/70 leading-[1.7]">
                Responda em até 24 horas. Atendemos farmácias magistrais, drogarias e
                indústrias cosméticas em todo o Brasil.
              </p>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-3 bg-[#c9a961] text-[#0f2419] px-8 py-4 rounded-full font-bold tracking-wide hover:bg-[#f5f1e8] transition-all whitespace-nowrap justify-self-start md:justify-self-end"
            >
              Agendar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Socials line */}
          <div className="mt-10 pt-8 border-t border-[#c9a961]/20 flex flex-wrap gap-6 items-center">
            <span className="text-[11px] uppercase tracking-[2.5px] text-[#f5f1e8]/50 font-bold">
              Canais diretos
            </span>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Mail, label: "contato@clubedeformulas.com.br" },
                { icon: Instagram, label: "@cienciadapele" },
                { icon: Linkedin, label: "/in/samirtannuri" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-2.5 text-sm text-[#f5f1e8]/80 hover:text-[#c9a961] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
