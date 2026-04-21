import { DNAHelix, MoleculeIllustration } from "../illustrations"

export function SobreHero() {
  return (
    <section className="pt-36 pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy via-navy-deep to-[#040C18] relative overflow-hidden">
      {/* Decorative Elements */}
      <MoleculeIllustration className="absolute top-20 right-[8%] w-48 h-48 text-teal opacity-20" />
      <DNAHelix className="absolute bottom-0 left-[5%] w-16 h-48 text-copper opacity-15" />
      
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.15),transparent_60%)] blur-[50px]" />
      <div className="absolute bottom-[-20%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(192,133,74,0.1),transparent_60%)] blur-[40px]" />

      <div className="max-w-[1320px] mx-auto text-center relative z-10">
        <span className="text-xs font-bold tracking-[3px] uppercase text-copper-light inline-block mb-5">
          Trajetoria & Expertise
        </span>
        <h1 className="font-serif font-normal text-[clamp(42px,6vw,72px)] text-white mb-6 leading-[1.05] tracking-[-1px] text-balance">
          Quem e Samir Tannuri
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] mx-auto leading-relaxed">
          Farmaceutico, pesquisador CNPq, consultor industrial e speaker. 
          Mais de duas decadas transformando ciencia em resultados clinicos.
        </p>
      </div>
    </section>
  )
}
