import { ExternalLink } from "lucide-react"
import { DNAHelix, MoleculeIllustration } from "./illustrations"

export function Science() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-b from-navy to-navy-deep overflow-hidden relative">
      {/* Decorative Elements */}
      <DNAHelix className="absolute top-20 right-[5%] w-16 h-48 text-teal opacity-15" />
      <MoleculeIllustration className="absolute bottom-20 left-[5%] w-32 h-32 text-copper opacity-10" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-teal-light inline-block mb-4">
            Producao Cientifica
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-white mb-5 leading-[1.1] tracking-[-0.5px]">
            Pesquisa publicada, resultado comprovado
          </h2>
          <p className="text-lg text-white/50 max-w-[620px] mx-auto leading-relaxed">
            Publicacao peer-reviewed com DOI indexado e inovacoes magistrais apresentadas em
            congressos nacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Publication Card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all relative hover:bg-white/[0.07] hover:border-teal/30">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl font-bold bg-teal/15 text-teal-light border border-teal/30">
                P
              </div>
              <span className="text-xs font-bold tracking-[2px] uppercase text-teal-light">
                Peer-Reviewed
              </span>
            </div>
            
            <h3 className="font-serif text-3xl text-white mb-4 leading-tight">
              Protetor Solar para Peles Negras — Fitzpatrick V-VI
            </h3>
            
            <p className="text-base text-white/50 leading-relaxed mb-7 italic">
              Revista Ensaios Pioneiros v.6 n.2 · DOI: 10.24933/rep.v6i2.281 · Em colaboração com pesquisadores da UNICAMP
            </p>
            
            <div className="flex gap-8 flex-wrap mb-8">
              <div className="text-left">
                <span className="font-serif text-4xl text-teal-light leading-none block">
                  FPS 30,5
                </span>
                <span className="text-xs text-white/40 mt-2 tracking-[1.5px] uppercase block">
                  Fator solar
                </span>
              </div>
              <div className="text-left">
                <span className="font-serif text-4xl text-teal-light leading-none block">
                  FPUVA 10,3
                </span>
                <span className="text-xs text-white/40 mt-2 tracking-[1.5px] uppercase block">
                  Protecao UVA
                </span>
              </div>
              <div className="text-left">
                <span className="font-serif text-4xl text-teal-light leading-none block">
                  Lc 378,3nm
                </span>
                <span className="text-xs text-white/40 mt-2 tracking-[1.5px] uppercase block">
                  Comprimento critico
                </span>
              </div>
            </div>
            
            <a
              href="https://doi.org/10.24933/rep.v6i2.281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 rounded-xl py-4 px-7 text-teal-light text-base font-bold hover:bg-teal/30 hover:translate-y-[-2px] transition-all tracking-wide"
            >
              Acessar DOI <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Innovation Card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-10 transition-all relative hover:bg-white/[0.07] hover:border-copper/30">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center font-serif text-xl font-bold bg-copper/15 text-copper-light border border-copper/30">
                I
              </div>
              <span className="text-xs font-bold tracking-[2px] uppercase text-copper-light">
                Inovacao Magistral
              </span>
            </div>
            
            <h3 className="font-serif text-3xl text-white mb-4 leading-tight">
              1o Peeling de Acido Azelaico em Pasta Anidra
            </h3>
            
            <p className="text-base text-white/50 leading-relaxed mb-7 italic">
              Congresso Saude Estetica 2024 | Estudo Visia documentado
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center">
                <span className="font-serif text-4xl text-copper-light leading-none block mb-2">
                  32%
                </span>
                <span className="text-xs text-white/45 tracking-wide leading-tight">
                  Reducao manchas
                </span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center">
                <span className="font-serif text-4xl text-copper-light leading-none block mb-2">
                  28%
                </span>
                <span className="text-xs text-white/45 tracking-wide leading-tight">
                  Melhora textura
                </span>
              </div>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 text-center">
                <span className="font-serif text-4xl text-copper-light leading-none block mb-2">
                  4
                </span>
                <span className="text-xs text-white/45 tracking-wide leading-tight">
                  Sessoes protoc.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
