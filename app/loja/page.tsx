import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LojaHero } from "@/components/loja/loja-hero"
import { LojaCursosVitrine } from "@/components/loja/loja-cursos-vitrine"
import { LojaFeatured } from "@/components/loja/loja-featured"
import { LojaCatalog } from "@/components/loja/loja-catalog"
import { LojaCta } from "@/components/loja/loja-cta"

export const metadata = {
  title: "Loja Oficial · Cursos, Formularios & E-books — Samir Tannuri",
  description:
    "Vitrine completa: cursos premium, formularios magistrais e e-books tecnicos. Materiais exclusivos para profissionais que buscam diferenciacao tecnica em farmacia magistral.",
}

export default function LojaPage() {
  return (
    <main>
      <Navbar />
      <LojaHero />
      <LojaCursosVitrine />
      <LojaFeatured />
      <LojaCatalog />
      <LojaCta />
      <Footer />
    </main>
  )
}
