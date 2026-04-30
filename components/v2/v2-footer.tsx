import Link from "next/link"
import { Instagram, Linkedin, BookOpen } from "lucide-react"

export function V2Footer() {
  return (
    <footer className="relative bg-[#0f2419] text-[#f5f1e8] py-16">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 pb-12 border-b border-[#c9a961]/15">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-[#c9a961] flex items-center justify-center">
                <span className="font-serif text-[#0f2419] text-lg italic">S</span>
              </div>
              <span className="font-serif text-xl">Clube de Fórmulas</span>
            </div>
            <p className="text-[#f5f1e8]/55 text-sm leading-[1.8]">
              Samir Tannuri Cerveira
              <br />
              Pesquisador · Consultor Industrial · Palestrante
              <br />
              ST Farma · Campinas — SP · Brasil
            </p>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-5">
              Navegação
            </div>
            <div className="space-y-3 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#autoridade", label: "Autoridade" },
                { href: "#metodo", label: "Método" },
                { href: "#ciencia", label: "Ciência" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-[#f5f1e8]/65 hover:text-[#c9a961] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-5">
              Redes oficiais
            </div>
            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="flex items-center gap-3 text-[#f5f1e8]/65 hover:text-[#c9a961] transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn · /in/samirtannuri
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[#f5f1e8]/65 hover:text-[#c9a961] transition-colors"
              >
                <Instagram className="w-4 h-4" /> Instagram · @cienciadapele
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[#f5f1e8]/65 hover:text-[#c9a961] transition-colors"
              >
                <BookOpen className="w-4 h-4" /> Lattes ·
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-[#f5f1e8]/40 tracking-wide">
            © {new Date().getFullYear()} Clube de Fórmulas · Paleta Esmeralda & Marfim
          </p>
          <Link
            href="/"
            className="text-xs uppercase tracking-[2.5px] text-[#c9a961]/75 hover:text-[#c9a961] font-bold"
          >
            ← Voltar para a versão original
          </Link>
        </div>
      </div>
    </footer>
  )
}
