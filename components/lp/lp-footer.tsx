import Link from "next/link"
import { Linkedin, Instagram, FileText, ArrowUpRight } from "lucide-react"

export function LPFooter() {
  const socials = [
    { icon: Linkedin, label: "LinkedIn", meta: "/in/samirtannuri", href: "#" },
    { icon: Instagram, label: "Instagram", meta: "@cienciadapele", href: "#" },
    { icon: FileText, label: "Lattes ·", meta: "Currículo acadêmico", href: "#" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050710]">
      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,210,230,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,210,230,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        {/* Top editorial */}
        <div className="grid gap-12 border-b border-white/[0.06] pb-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c9a961]/25 bg-[#c9a961]/[0.06] font-serif text-xl text-[#c9a961]">
                Cf
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg text-white">Clube de Fórmulas</span>
                <span className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/40">
                  Samir Tannuri
                </span>
              </div>
            </div>
            <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-white/50">
              Consultoria científica em P&amp;D cosmético — para indústrias Grau 1 e 2, marcas
              independentes e farmácias magistrais de excelência. Pesquisa, publicação
              peer-reviewed indexada e missões técnicas em três continentes.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
              Landing Page
            </div>
            <ul className="space-y-2 text-[14px]">
              {[
                { href: "#missoes", label: "Missões &amp; Formação" },
                { href: "#industrial", label: "Consultoria Industrial" },
                { href: "#magistral", label: "Consultoria Magistral" },
                { href: "#lab-pro", label: "Formulator AI Lab Pro" },
                { href: "#contato", label: "Contato" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 transition-colors hover:text-white"
                    dangerouslySetInnerHTML={{ __html: l.label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
              Redes oficiais
            </div>
            <ul className="space-y-2">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all hover:border-white/15 hover:bg-white/[0.04]"
                    >
                      <Icon className="h-4 w-4 text-white/60 transition-colors group-hover:text-[#c9a961]" />
                      <div className="flex-1 leading-tight">
                        <div className="text-[13px] text-white/90">{s.label}</div>
                        <div className="text-[10px] text-white/40">{s.meta}</div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9a961]" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
            © {new Date().getFullYear()} · Metapharma · CNPJ 00.246.124/0001-51
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-white/70 transition-all hover:border-white/20 hover:text-white"
            >
              Ir ao site principal
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
