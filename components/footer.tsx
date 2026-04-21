import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-navy-deep py-[60px] px-8 pb-8 border-t border-[rgba(192,133,74,0.12)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between flex-wrap gap-11 mb-11">
          {/* Brand */}
          <div className="max-w-[300px]">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-9 h-9 rounded-[10px] border-[1.5px] border-[rgba(192,133,74,0.35)] flex items-center justify-center font-serif text-[17px] text-copper-light">
                Cf
              </div>
              <span className="font-serif text-[17px] text-white">Clube de Fórmulas</span>
            </div>
            <p className="text-[13px] text-white/35 leading-[1.8]">
              Prof. Samir Tannuri Cerveira
              <br />
              Pesquisador · Consultor Industrial · Speaker
              <br />
              Metapharma · CNPJ 00.246.124/0001-51
              <br />
              Goiânia — GO · Brasil
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <div className="text-[10.5px] font-bold text-white/[0.28] tracking-[2px] uppercase mb-3.5">
                Social & Links
              </div>
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Instagram · 25K+
              </a>
              <a
                href="https://linkedin.com/in/samir-tannuri-58480816b"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                LinkedIn · 7,7K
              </a>
              <a
                href="https://researchgate.net/profile/Samir-Cerveira"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                ResearchGate
              </a>
              <a
                href="https://pay.hotmart.com/A105091762I"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Hotmart
              </a>
              <span className="block text-white/50 text-[13px] mb-2">Lattes CNPq</span>
            </div>

            <div>
              <div className="text-[10.5px] font-bold text-white/[0.28] tracking-[2px] uppercase mb-3.5">
                Científico
              </div>
              <a
                href="https://doi.org/10.24933/rep.v6i2.281"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                DOI: 10.24933/rep.v6i2.281
              </a>
              <span className="block text-white/50 text-[13px] mb-2">Lattes ID: K2699008D8</span>
              <span className="block text-white/50 text-[13px] mb-2">
                Revista Ensaios Pioneiros v.6 n.2
              </span>
              <span className="block text-white/50 text-[13px] mb-2">CNPq Bolsista · UNICAMP</span>
            </div>

            <div>
              <div className="text-[10.5px] font-bold text-white/[0.28] tracking-[2px] uppercase mb-3.5">
                Navegação
              </div>
              <Link
                href="#about"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#expertise"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Expertise P&D
              </Link>
              <Link
                href="#missions"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Missões Internacionais
              </Link>
              <Link
                href="#consultoria"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Consultoria
              </Link>
              <Link
                href="#products"
                className="block text-white/50 text-[13px] mb-2 hover:text-copper-light transition-colors"
              >
                Materiais
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
          <span className="text-[11.5px] text-white/[0.22]">
            © 2026 Clube de Fórmulas · Metapharma · Todos os direitos reservados.
          </span>
          <span className="text-[11.5px] text-white/[0.22]">@samir_farma · Abril 2026</span>
        </div>
      </div>
    </footer>
  )
}
