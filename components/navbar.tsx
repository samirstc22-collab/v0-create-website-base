"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, ShoppingBag } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/cursos", label: "Cursos" },
    { href: "/consultoria", label: "Consultoria" },
    { href: "/lp", label: "Lab Pro", highlight: true },
    { href: "/blog", label: "Blog" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.04)] py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div
            className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center font-serif text-2xl transition-all duration-300 ${
              isScrolled
                ? "border-copper text-copper bg-copper/10 group-hover:bg-copper group-hover:text-white"
                : "border-white/40 text-white bg-white/5 group-hover:border-copper-light group-hover:bg-white/10"
            }`}
          >
            Cf
          </div>
          <div>
            <div
              className={`font-serif text-xl leading-tight tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              Clube de Fórmulas
            </div>
            <div
              className={`text-xs tracking-[2.5px] uppercase font-medium mt-0.5 transition-colors duration-300 ${
                isScrolled ? "text-muted" : "text-white/50"
              }`}
            >
              Prof. Samir Tannuri
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => {
            if (link.highlight) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                    isScrolled
                      ? "text-[#4a9eff] bg-[#4a9eff]/10 hover:bg-[#4a9eff]/15 border border-[#4a9eff]/20"
                      : "text-[#7eb8ff] bg-white/5 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
                  </span>
                  {link.label}
                </Link>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-copper bg-copper/10"
                      : "text-copper-light bg-white/10"
                    : isScrolled
                      ? "text-navy/80 hover:text-copper hover:bg-copper/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-copper rounded-full" />
                )}
              </Link>
            )
          })}
          <Link
            href="/loja"
            className="ml-4 bg-gradient-to-br from-copper to-copper-deep border-none rounded-xl py-3 px-7 text-white font-bold text-sm shadow-[0_4px_20px_rgba(192,133,74,0.35)] hover:translate-y-[-2px] hover:shadow-[0_8px_28px_rgba(192,133,74,0.45)] transition-all duration-300 tracking-wide flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Loja
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-all ${
            isScrolled 
              ? "text-navy hover:bg-navy/5" 
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          <div className="max-w-[1320px] mx-auto p-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.href)
                    ? "bg-copper/10 text-copper"
                    : "text-navy hover:bg-off-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <ChevronRight className={`w-5 h-5 ${isActive(link.href) ? "text-copper" : "text-muted"}`} />
              </Link>
            ))}
            <Link
              href="/loja"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-gradient-to-br from-copper to-copper-deep rounded-xl py-4 px-6 text-white font-bold text-base text-center shadow-[0_4px_20px_rgba(192,133,74,0.3)] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Loja · 60+ Artefatos
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
