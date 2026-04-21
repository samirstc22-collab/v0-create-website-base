import Link from "next/link"
import { Instagram, Linkedin, ExternalLink, Sparkles, ShoppingBag, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#070f1e] py-20 px-6 lg:px-10 border-t border-[#B8783D]/15">
      <div className="max-w-[1400px] mx-auto">
        {/* Top CTA Strip */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 mb-12 border-b border-white/[0.06]">
          <div>
            <h3 className="font-serif text-2xl text-white mb-2">
              Pronto para transformar sua farmacia?
            </h3>
            <p className="text-white/50 text-base">
              Fale conosco ou acesse a loja com 60+ artefatos tecnicos.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contato
            </Link>
            <Link
              href="/loja"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(184,120,61,0.3)]"
            >
              <ShoppingBag className="w-4 h-4" />
              Acessar Loja
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl border-2 border-[#B8783D]/40 flex items-center justify-center font-serif text-xl text-[#e8a87c]">
                Cf
              </div>
              <span className="font-serif text-lg text-white">Clube de Formulas</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Prof. Samir Tannuri Cerveira
              <br />
              Pesquisador · Consultor · Palestrante
              <br />
              Metapharma · CNPJ 00.246.124/0001-51
              <br />
              Goiania — GO · Brasil
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-[#E1306C] hover:bg-[#E1306C]/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/samir-tannuri-58480816b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5562999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Principal */}
          <div>
            <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-5">
              Principal
            </div>
            <Link href="/" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Home
            </Link>
            <Link href="/sobre" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Contato
            </Link>
            <Link href="/loja" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Loja
            </Link>
          </div>

          {/* Aprender */}
          <div>
            <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-5">
              Aprender
            </div>
            <Link href="/cursos" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Cursos
            </Link>
            <Link href="/formularios" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Formularios
            </Link>
            <Link href="/blog" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Blog Cientifico
            </Link>
            <Link href="/materiais" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Materiais
            </Link>
          </div>

          {/* Servicos */}
          <div>
            <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-5">
              Servicos
            </div>
            <Link href="/consultoria" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Consultoria
            </Link>
            <Link href="/formulator-ai" className="flex items-center gap-1.5 text-white/50 text-sm mb-3 hover:text-[#4a9eff] transition-colors">
              <Sparkles className="w-3.5 h-3.5" />
              Formulator AI
            </Link>
            <Link href="/lp" className="block text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors">
              Lab Pro
            </Link>
          </div>

          {/* Cientifico */}
          <div>
            <div className="text-[10px] font-bold text-white/25 tracking-[2px] uppercase mb-5">
              Cientifico
            </div>
            <a
              href="https://doi.org/10.24933/rep.v6i2.281"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              DOI Publicacao
            </a>
            <a
              href="http://lattes.cnpq.br/K2699008D8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Curriculo Lattes
            </a>
            <a
              href="https://researchgate.net/profile/Samir-Cerveira"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/50 text-sm mb-3 hover:text-[#e8a87c] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              ResearchGate
            </a>
            <span className="block text-white/40 text-sm">CNPq Bolsista | UNICAMP</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/[0.06]">
          <span className="text-xs text-white/25 text-center sm:text-left">
            2026 Clube de Formulas | Metapharma | Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <span>@samir_farma</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Abril 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
