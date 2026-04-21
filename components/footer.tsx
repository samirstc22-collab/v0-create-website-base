import Link from "next/link"
import { Instagram, Linkedin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-navy-deep py-16 px-6 lg:px-10 border-t border-copper/10">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex justify-between flex-wrap gap-14 mb-14">
          {/* Brand */}
          <div className="max-w-[320px]">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl border-2 border-copper/40 flex items-center justify-center font-serif text-2xl text-copper-light">
                Cf
              </div>
              <span className="font-serif text-xl text-white">Clube de Fórmulas</span>
            </div>
            <p className="text-base text-white/40 leading-relaxed">
              Prof. Samir Tannuri Cerveira
              <br />
              Pesquisador · Consultor Industrial · Palestrante
              <br />
              Metapharma · CNPJ 00.246.124/0001-51
              <br />
              Goiânia — GO · Brasil
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16 flex-wrap">
            <div>
              <div className="text-xs font-bold text-white/25 tracking-[2.5px] uppercase mb-5">
                Navegacao
              </div>
              <Link
                href="/"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Home
              </Link>
              <Link
                href="/sobre"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/cursos"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Cursos
              </Link>
              <Link
                href="/consultoria"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Consultoria
              </Link>
              <Link
                href="/blog"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Blog Científico
              </Link>
              <Link
                href="/materiais"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Materiais
              </Link>
              <Link
                href="/conteudos"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Conteúdos
              </Link>
              <Link
                href="/contato"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                Contato
              </Link>
            </div>

            <div>
              <div className="text-xs font-bold text-white/25 tracking-[2.5px] uppercase mb-5">
                Social & Links
              </div>
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                <Instagram className="w-4 h-4" />
                Instagram | 25K+
              </a>
              <a
                href="https://linkedin.com/in/samir-tannuri-58480816b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn | 7,7K
              </a>
              <a
                href="https://researchgate.net/profile/Samir-Cerveira"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                ResearchGate
              </a>
              <a
                href="https://pay.hotmart.com/A105091762I"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Hotmart
              </a>
            </div>

            <div>
              <div className="text-xs font-bold text-white/25 tracking-[2.5px] uppercase mb-5">
                Cientifico
              </div>
              <a
                href="https://doi.org/10.24933/rep.v6i2.281"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/50 text-base mb-3 hover:text-copper-light transition-colors"
              >
                DOI: 10.24933/rep.v6i2.281
              </a>
              <span className="block text-white/50 text-base mb-3">Lattes ID: K2699008D8</span>
              <span className="block text-white/50 text-base mb-3">
                Revista Ensaios Pioneiros v.6 n.2
              </span>
              <span className="block text-white/50 text-base mb-3">CNPq Bolsista | UNICAMP</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between flex-wrap gap-4 pt-8 border-t border-white/[0.08]">
          <span className="text-sm text-white/20">
            2026 Clube de Formulas | Metapharma | Todos os direitos reservados.
          </span>
          <span className="text-sm text-white/20">@samir_farma | Abril 2026</span>
        </div>
      </div>
    </footer>
  )
}
