import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MateriaisHero } from "@/components/materiais/materiais-hero"
import { MateriaisCatalog2026 } from "@/components/materiais/materiais-catalog-2026"
import { MateriaisGrid } from "@/components/materiais/materiais-grid"

export const metadata = {
  title: "Materiais — Catálogo Técnico 2026 · Clube de Fórmulas",
  description:
    "Biblioteca clínico-prescritiva com 60+ artefatos em 7 tiers editoriais: 27 protocolos, 13 lâminas A4H, 8 formulários magistrais, 6 sínteses científicas. Rigor clínico, Vancouver, DOI validado.",
}

export default function MateriaisPage() {
  return (
    <main>
      <Navbar />
      <MateriaisHero />
      <MateriaisCatalog2026 />
      <MateriaisGrid />
      <Footer />
    </main>
  )
}
