import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LojaHero } from "@/components/loja/loja-hero"
import { LojaFeatured } from "@/components/loja/loja-featured"
import { LojaCatalog } from "@/components/loja/loja-catalog"
import { LojaCta } from "@/components/loja/loja-cta"

export const metadata = {
  title: "Loja · Ebooks, Formulários & Lâminas Técnicas — Clube de Fórmulas",
  description:
    "Vitrine editorial completa do Clube de Fórmulas: 60+ artefatos técnico-científicos em 7 tiers — formulários integrados, protocolos clínicos, compêndios, lâminas dupla-face e sínteses de pesquisa peer-reviewed. Entrega imediata via Hotmart.",
}

export default function LojaPage() {
  return (
    <main>
      <Navbar />
      <LojaHero />
      <LojaFeatured />
      <LojaCatalog />
      <LojaCta />
      <Footer />
    </main>
  )
}
