import Link from "next/link"
import { Linkedin, Instagram, FileText, ArrowUpRight, Beaker } from "lucide-react"

export function LPFooter() {
  const socials = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samirtannuri",
    },
    {
      icon: Instagram,
      label: "@cienciadapele",
      href: "https://instagram.com/cienciadapele",
    },
    {
      icon: FileText,
      label: "Currículo Lattes",
      href: "http://lattes.cnpq.br/samirtannuri",
    },
  ]

  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Cursos", href: "/cursos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050508] py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c9a227]/20">
                <Beaker className="h-5 w-5 text-[#c9a227]" />
              </div>
              <span className="font-serif text-xl text-white">Clube de Fórmulas</span>
            </div>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/40">
              Prof. Samir Tannuri Cerveira
              <br />
              Pesquisador · Consultor Industrial · Palestrante
              <br />
              Metapharma · CNPJ 00.246.124/0001-51
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-white/60 transition-all hover:border-[#c9a227]/30 hover:bg-[#c9a227]/5 hover:text-[#c9a227]"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-[#c9a227]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/70">
              Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#consultoria-industrial"
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-[#c9a227]"
                >
                  P&D Industrial
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="#consultoria-magistral"
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-[#4a9eff]"
                >
                  P&D Magistral
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="#formulator-ai"
                  className="group flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-[#c9a227]"
                >
                  Formulator AI
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Clube de Fórmulas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            Nota: As fotos utilizadas sao originais do Prof. Samir Tannuri.
          </p>
        </div>
      </div>
    </footer>
  )
}
