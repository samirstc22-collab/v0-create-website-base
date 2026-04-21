import { FlaskIllustration, MoleculeIllustration } from "../illustrations"

export function MateriaisHero() {
  return (
    <section className="pt-36 pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy via-navy-deep to-[#040C18] relative overflow-hidden">
      {/* Decorative Elements */}
      <FlaskIllustration className="absolute top-24 right-[8%] w-36 h-44 text-teal opacity-20" />
      <MoleculeIllustration className="absolute bottom-10 left-[5%] w-40 h-40 text-copper opacity-15" />

      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.15),transparent_60%)] blur-[50px]" />
      <div className="absolute bottom-[-20%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(192,133,74,0.1),transparent_60%)] blur-[40px]" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8a87c] animate-pulse" />
            <span className="text-[10px] tracking-[3px] uppercase text-[#e8a87c] font-bold">
              Catálogo Técnico 2026 · Edição Expandida
            </span>
          </div>
          <h1 className="font-serif font-normal text-[clamp(42px,6vw,76px)] text-white mb-6 leading-[1.02] tracking-[-1.5px] text-balance">
            Biblioteca Clínico-Prescritiva{" "}
            <em className="text-[#e8a87c]">Clube de Fórmulas.</em>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-[720px] mx-auto leading-[1.65] mb-12">
            Sessenta e dois artefatos técnico-científicos — protocolos, formulários, lâminas e
            sínteses de pesquisa — organizados em sete tiers editoriais por grau de complexidade.
            Cada peça escrita com rigor clínico, referência Vancouver e DOI validado.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { num: "60+", label: "Artefatos Totais" },
              { num: "27", label: "Protocolos Clínicos" },
              { num: "13", label: "Lâminas A4H" },
              { num: "450+", label: "Páginas Editoriais" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white/[0.04] border border-white/10 p-5 backdrop-blur-sm"
              >
                <div className="font-serif text-3xl md:text-4xl text-white mb-1 tracking-tight">
                  {stat.num}
                </div>
                <div className="text-[10px] tracking-[1.5px] uppercase text-white/50 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
