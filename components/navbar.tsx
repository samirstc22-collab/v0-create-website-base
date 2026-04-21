"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#expertise", label: "Expertise" },
    { href: "#missions", label: "Internacional" },
    { href: "#consultoria", label: "Consultoria" },
    { href: "#products", label: "Materiais" },
    { href: "#authority", label: "Conteúdos" },
    { href: "#contact", label: "Contato" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        isScrolled
          ? "bg-white/96 backdrop-blur-[20px] saturate-[1.2] border-b border-border py-3"
          : "py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        <Link href="#hero" className="flex items-center gap-3.5 cursor-pointer">
          <div
            className={`w-[42px] h-[42px] rounded-[10px] border-2 flex items-center justify-center font-serif text-[22px] transition-all ${
              isScrolled
                ? "border-copper text-copper bg-[rgba(192,133,74,0.15)]"
                : "border-white/40 text-white bg-white/[0.04]"
            }`}
          >
            Cf
          </div>
          <div>
            <div
              className={`font-serif text-[18px] leading-tight tracking-[0.3px] transition-colors ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              Clube de Fórmulas
            </div>
            <div
              className={`text-[10px] tracking-[2px] uppercase font-medium mt-0.5 transition-colors ${
                isScrolled ? "text-muted" : "text-white/55"
              }`}
            >
              Prof. Samir Tannuri
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-[30px] items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`bg-transparent border-none text-[13.5px] font-medium opacity-80 hover:opacity-100 transition-all tracking-[0.2px] ${
                isScrolled ? "text-navy" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://pay.hotmart.com/A105091762I"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-copper to-copper-deep border-none rounded-lg py-[11px] px-6 text-white font-semibold text-[13px] shadow-[0_4px_20px_rgba(192,133,74,0.3)] hover:translate-y-[-1px] hover:shadow-[0_6px_24px_rgba(192,133,74,0.4)] transition-all tracking-[0.3px]"
          >
            Acessar Materiais
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden bg-transparent border-none p-1 ${
            isScrolled ? "text-navy" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white p-5 px-8 pb-7 border-b border-border shadow-[0_12px_40px_rgba(0,0,0,0.1)] flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-transparent border-none text-navy text-[15.5px] text-left py-1 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
