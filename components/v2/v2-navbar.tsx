"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export function V2Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#home", label: "Home" },
    { href: "#autoridade", label: "Autoridade" },
    { href: "#metodo", label: "Método" },
    { href: "#ciencia", label: "Ciência" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f5f1e8]/85 backdrop-blur-xl border-b border-[#1a3d2e]/10 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/paleta-alternativa" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-[#1a3d2e] flex items-center justify-center border border-[#c9a961]/30 group-hover:border-[#c9a961] transition-colors">
            <span className="font-serif text-[#c9a961] text-lg italic">S</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-[#0f2419] text-lg tracking-tight">
              Clube de Fórmulas
            </span>
            <span className="text-[10px] uppercase tracking-[2.5px] text-[#1a3d2e]/55 font-semibold">
              Prof. Samir Tannuri
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#0f2419]/75 hover:text-[#1a3d2e] transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-[2px] text-[#1a3d2e]/60 hover:text-[#1a3d2e] font-semibold"
          >
            Ver versão original
          </Link>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-[#1a3d2e] text-[#f5f1e8] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#0f2419] transition-all shadow-[0_6px_22px_rgba(26,61,46,0.22)]"
          >
            Agendar conversa
          </a>
        </div>

        <button
          className="lg:hidden text-[#0f2419] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#f5f1e8] border-b border-[#1a3d2e]/10 shadow-lg">
          <nav className="flex flex-col py-4 px-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[#0f2419] font-medium border-b border-[#1a3d2e]/10 last:border-b-0"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/"
              className="py-3 text-[#1a3d2e]/60 text-sm uppercase tracking-wider font-semibold"
            >
              Ver versão original
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
