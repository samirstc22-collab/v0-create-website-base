import { ExternalLink } from "lucide-react"

export function Science() {
  return (
    <section className="py-[110px] px-8 bg-gradient-to-b from-navy to-navy-deep overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-teal-light inline-block mb-3.5">
            Produção Científica
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-white mb-4 leading-[1.15] tracking-[-0.5px]">
            Pesquisa publicada, resultado comprovado
          </h2>
          <p className="text-[15px] text-white/50 max-w-[580px] mx-auto leading-[1.7]">
            Publicação peer-reviewed com DOI indexado e inovações magistrais apresentadas em
            congressos nacionais.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-7 max-md:grid-cols-1">
          {/* Publication Card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-[22px] p-10 px-9 transition-all relative hover:bg-white/[0.07] hover:border-[rgba(192,133,74,0.25)]">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center font-serif text-[16px] font-bold bg-[rgba(10,143,158,0.15)] text-teal-light border border-[rgba(10,143,158,0.3)]">
                P
              </div>
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-teal-light">
                Peer-Reviewed
              </span>
            </div>
            <h3 className="font-serif text-[24px] text-white mb-3.5 leading-[1.25] font-normal">
              Protetor Solar para Peles Negras — Fitzpatrick V–VI
            </h3>
            <p className="text-[13px] text-white/50 leading-[1.7] mb-[22px] italic">
              Revista Ensaios Pioneiros v.6 n.2 · DOI: 10.24933/rep.v6i2.281
            </p>
            <div className="flex gap-5 flex-wrap mb-6">
              <div className="text-left">
                <span className="font-serif text-[26px] text-teal-light leading-none block">
                  FPS 30,5
                </span>
                <span className="text-[10.5px] text-white/40 mt-1 tracking-[1px] uppercase block">
                  Fator solar
                </span>
              </div>
              <div className="text-left">
                <span className="font-serif text-[26px] text-teal-light leading-none block">
                  FPUVA 10,3
                </span>
                <span className="text-[10.5px] text-white/40 mt-1 tracking-[1px] uppercase block">
                  Proteção UVA
                </span>
              </div>
              <div className="text-left">
                <span className="font-serif text-[26px] text-teal-light leading-none block">
                  λc 378,3nm
                </span>
                <span className="text-[10.5px] text-white/40 mt-1 tracking-[1px] uppercase block">
                  Comprimento crítico
                </span>
              </div>
            </div>
            <a
              href="https://doi.org/10.24933/rep.v6i2.281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[rgba(10,143,158,0.18)] border border-[rgba(10,143,158,0.35)] rounded-[10px] py-3 px-[22px] text-teal-light text-[13.5px] font-semibold hover:bg-[rgba(10,143,158,0.25)] hover:translate-y-[-1px] transition-all tracking-[0.3px]"
            >
              Acessar DOI <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Innovation Card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-[22px] p-10 px-9 transition-all relative hover:bg-white/[0.07] hover:border-[rgba(192,133,74,0.25)]">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center font-serif text-[16px] font-bold bg-[rgba(192,133,74,0.15)] text-copper-light border border-[rgba(192,133,74,0.3)]">
                I
              </div>
              <span className="text-[11px] font-bold tracking-[1.5px] uppercase text-copper-light">
                Inovação Magistral
              </span>
            </div>
            <h3 className="font-serif text-[24px] text-white mb-3.5 leading-[1.25] font-normal">
              1° Peeling de Ácido Azelaico em Pasta Anidra
            </h3>
            <p className="text-[13px] text-white/50 leading-[1.7] mb-[22px] italic">
              Congresso Saúde Estética 2024 · Estudo Visia® documentado
            </p>
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-[14px] p-5 px-4 text-center">
                <span className="font-serif text-[32px] text-copper-light leading-none block mb-1.5">
                  32%
                </span>
                <span className="text-[10px] text-white/45 tracking-[0.5px] leading-[1.3]">
                  Redução manchas
                </span>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-[14px] p-5 px-4 text-center">
                <span className="font-serif text-[32px] text-copper-light leading-none block mb-1.5">
                  28%
                </span>
                <span className="text-[10px] text-white/45 tracking-[0.5px] leading-[1.3]">
                  Melhora textura
                </span>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-[14px] p-5 px-4 text-center">
                <span className="font-serif text-[32px] text-copper-light leading-none block mb-1.5">
                  4
                </span>
                <span className="text-[10px] text-white/45 tracking-[0.5px] leading-[1.3]">
                  Sessões protoc.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
