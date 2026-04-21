import { BeakerIllustration, CircuitPattern } from "../illustrations"

export function ConsultoriaHero() {
  return (
    <section className="pt-36 pb-20 px-6 lg:px-10 bg-gradient-to-br from-navy via-navy-deep to-[#040C18] relative overflow-hidden">
      {/* Decorative Elements */}
      <BeakerIllustration className="absolute top-24 right-[10%] w-40 h-52 text-copper opacity-20" />
      <CircuitPattern className="absolute bottom-10 left-[5%] w-36 h-36 text-teal opacity-15" />
      
      <div className="absolute top-[25%] right-[-8%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(192,133,74,0.15),transparent_60%)] blur-[50px]" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.1),transparent_60%)] blur-[40px]" />

      <div className="max-w-[1320px] mx-auto text-center relative z-10">
        <span className="text-xs font-bold tracking-[3px] uppercase text-copper-light inline-block mb-5">
          Consultoria P&D
        </span>
        <h1 className="font-serif font-normal text-[clamp(42px,6vw,72px)] text-white mb-6 leading-[1.05] tracking-[-1px] text-balance">
          Ciencia aplicada ao seu laboratorio
        </h1>
        <p className="text-xl text-white/50 max-w-[680px] mx-auto leading-relaxed">
          Quatro frentes de atuacao — do diagnostico pontual ao desenvolvimento 
          industrial completo. Cada projeto e unico.
        </p>
      </div>
    </section>
  )
}
