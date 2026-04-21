import { Check, Instagram } from "lucide-react"

export function LojaCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0C2340] via-[#0a1d36] to-[#071528] py-20 lg:py-28">
      {/* Orbs */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.2), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#B8783D]" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#e8a87c] font-bold">
                § Garantias do Clube
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-[-0.02em] mb-6">
              Compre com a <em className="italic text-[#e8a87c]">tranquilidade</em> de quem já vende
              ciência há <em className="italic text-[#66d9e8]">24 anos</em>.
            </h2>

            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-xl">
              Todo material do Clube de Fórmulas é liberado{" "}
              <strong className="text-white">na hora</strong>, via área de membros Hotmart, com
              acesso <strong className="text-white">vitalício</strong> e atualizações periódicas
              inclusas. Zero upsell, zero pegadinha.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Acesso imediato após confirmação do pagamento",
                "Material em PDF + DOCX editável (para sua papelaria)",
                "Atualizações editoriais vitalícias, sem cobrança adicional",
                "Garantia incondicional de 7 dias — reembolso 100%",
                "Suporte direto via WhatsApp do professor",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-white/85">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#B8783D]/20 border border-[#B8783D]/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#e8a87c]" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://pay.hotmart.com/A105091762I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_30px_rgba(184,120,61,0.4)] hover:translate-y-[-2px] transition-transform"
              >
                Entrar no Catálogo Completo
              </a>
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-7 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @samir_farma
              </a>
            </div>
          </div>

          {/* Right — Testimonial card */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#B8783D]/20 via-transparent to-[#0096B4]/20" />

            <blockquote className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="font-serif text-6xl text-[#B8783D] leading-none mb-4">"</div>
              <p className="font-serif text-xl lg:text-2xl text-white leading-[1.4] mb-6">
                O Formulário de Peptídeos virou a <em className="text-[#e8a87c]">bíblia</em> da minha
                farmácia. É o único material que eu abro na frente do médico{" "}
                <em className="text-[#66d9e8]">sem medo de errar</em>.
              </p>
              <div className="pt-6 border-t border-white/10">
                <div className="font-serif text-base text-white">Dra. Camila Fonseca</div>
                <div className="text-[11px] tracking-[1.5px] uppercase text-white/50 font-semibold mt-1">
                  Farmacêutica Magistral · Curitiba – PR
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
