"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  ShoppingBag,
  User,
  GraduationCap,
  FileText,
  Briefcase,
  Sparkles,
  BookOpen,
  Mail,
  Store,
  Instagram
} from "lucide-react"

interface NavLink {
  href: string
  label: string
  icon?: React.ElementType
  highlight?: boolean
  children?: { href: string; label: string; description: string; icon: React.ElementType }[]
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre", icon: User },
    { 
      href: "#", 
      label: "Aprender",
      icon: GraduationCap,
      children: [
        { href: "/cursos", label: "Cursos", description: "Formacao completa em formulacao", icon: GraduationCap },
        { href: "/formularios", label: "Formularios", description: "60+ artefatos tecnicos", icon: FileText },
        { href: "/blog", label: "Blog Cientifico", description: "Artigos e pesquisas", icon: BookOpen },
      ]
    },
    { 
      href: "#", 
      label: "Servicos",
      icon: Briefcase,
      children: [
        { href: "/consultoria", label: "Consultoria", description: "Magistral e industrial", icon: Briefcase },
        { href: "/formulator-ai", label: "Formulator AI", description: "IA de formulacao", icon: Sparkles },
      ]
    },
    { href: "/loja", label: "Loja", icon: Store },
    { href: "/contato", label: "Contato", icon: Mail },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "#") return false
    return pathname.startsWith(href)
  }

  const isChildActive = (children?: NavLink["children"]) => {
    if (!children) return false
    return children.some(child => pathname.startsWith(child.href))
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-[#0C2340]/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-2"
          : "bg-[#0a1628]/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Logo variant={isScrolled ? "dark" : "light"} size="md" />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {navLinks.map((link) => {
            if (link.children) {
              const isDropdownOpen = openDropdown === link.label
              const hasActiveChild = isChildActive(link.children)
              
              return (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                      hasActiveChild
                        ? isScrolled
                          ? "text-[#B8783D] bg-[#B8783D]/10"
                          : "text-[#e8a87c] bg-white/10"
                        : isScrolled
                          ? "text-[#0C2340]/80 hover:text-[#B8783D] hover:bg-[#B8783D]/5"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-[0_20px_60px_rgba(12,35,64,0.15)] border border-[#0C2340]/10 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="p-2">
                        {link.children.map((child) => {
                          const Icon = child.icon
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-150 ${
                                isActive(child.href)
                                  ? "bg-[#B8783D]/10 text-[#B8783D]"
                                  : "hover:bg-[#f8fafc] text-[#0C2340]"
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                isActive(child.href) ? "bg-[#B8783D]/20" : "bg-[#0C2340]/5"
                              }`}>
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="font-semibold text-sm">{child.label}</div>
                                <div className="text-xs text-[#64748b] mt-0.5">{child.description}</div>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            }
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? isScrolled
                      ? "text-[#B8783D] bg-[#B8783D]/10"
                      : "text-[#e8a87c] bg-white/10"
                    : isScrolled
                      ? "text-[#0C2340]/80 hover:text-[#B8783D] hover:bg-[#B8783D]/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#B8783D] rounded-full" />
                )}
              </Link>
            )
          })}
          
          {/* Formulator AI Highlight Button */}
          <Link
            href="/formulator-ai"
            className={`ml-2 flex items-center gap-2 px-4 py-2.5 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
              isScrolled
                ? "text-[#4a9eff] bg-[#4a9eff]/10 hover:bg-[#4a9eff]/15 border border-[#4a9eff]/20"
                : "text-[#7eb8ff] bg-white/5 hover:bg-white/10 border border-white/10"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
            </span>
            AI Lab
          </Link>

          {/* Instagram */}
          <a
            href="https://instagram.com/samir_farma"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-1 p-2.5 rounded-lg transition-all duration-200 ${
              isScrolled
                ? "text-[#0C2340]/60 hover:text-[#E1306C] hover:bg-[#E1306C]/10"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          
          {/* Loja CTA */}
          <Link
            href="/loja"
            className="ml-3 bg-gradient-to-br from-[#B8783D] to-[#8a5729] border-none rounded-xl py-2.5 px-5 text-white font-bold text-sm shadow-[0_4px_16px_rgba(184,120,61,0.35)] hover:translate-y-[-1px] hover:shadow-[0_6px_24px_rgba(184,120,61,0.45)] transition-all duration-300 tracking-wide flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Loja
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2.5 rounded-xl transition-all ${
            isScrolled 
              ? "text-[#0C2340] hover:bg-[#0C2340]/5" 
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#0C2340]/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-5 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="mb-2">
                    <div className="px-4 py-2 text-xs font-bold tracking-[1.5px] uppercase text-[#64748b]">
                      {link.label}
                    </div>
                    <div className="flex flex-col gap-1">
                      {link.children.map((child) => {
                        const Icon = child.icon
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                              isActive(child.href)
                                ? "bg-[#B8783D]/10 text-[#B8783D]"
                                : "text-[#0C2340] hover:bg-[#f8fafc]"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <Icon className="w-5 h-5" />
                            {child.label}
                            <ChevronRight className={`w-4 h-4 ml-auto ${isActive(child.href) ? "text-[#B8783D]" : "text-[#94a3b8]"}`} />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                    isActive(link.href)
                      ? "bg-[#B8783D]/10 text-[#B8783D]"
                      : "text-[#0C2340] hover:bg-[#f8fafc]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {link.label}
                  <ChevronRight className={`w-4 h-4 ml-auto ${isActive(link.href) ? "text-[#B8783D]" : "text-[#94a3b8]"}`} />
                </Link>
              )
            })}
            
            {/* Formulator AI Mobile */}
            <Link
              href="/formulator-ai"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold bg-[#4a9eff]/10 text-[#4a9eff] border border-[#4a9eff]/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Sparkles className="w-5 h-5" />
              Formulator AI Lab
              <span className="ml-auto relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a9eff]" />
              </span>
            </Link>
            
            {/* Instagram Mobile */}
            <a
              href="https://instagram.com/samir_farma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold text-[#0C2340] hover:bg-[#f8fafc]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram className="w-5 h-5" />
              @samir_farma
              <ChevronRight className="w-4 h-4 ml-auto text-[#94a3b8]" />
            </a>
            
            {/* Loja Mobile CTA */}
            <Link
              href="/loja"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 bg-gradient-to-br from-[#B8783D] to-[#8a5729] rounded-xl py-4 px-6 text-white font-bold text-base text-center shadow-[0_4px_20px_rgba(184,120,61,0.3)] flex items-center justify-center gap-2"
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
