import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursosHero } from "@/components/cursos/cursos-hero"
import { CursosFeatured } from "@/components/cursos/cursos-featured"
import { CursosGrid } from "@/components/cursos/cursos-grid"
import { CursosTestimonials } from "@/components/cursos/cursos-testimonials"
import { CursosCTA } from "@/components/cursos/cursos-cta"

export const metadata = {
  title: "Cursos | Clube de Fórmulas — Prof. Samir Tannuri",
  description:
    "Cursos de cosmetologia aplicada, manipulação avançada e gestão farmacêutica com o Prof. Samir Tannuri. Conhecimento internacional, aplicação imediata no seu balcão.",
}

export default function CursosPage() {
  return (
    <main>
      <Navbar />
      <CursosHero />
      <CursosFeatured />
      <CursosGrid />
      <CursosTestimonials />
      <CursosCTA />
      <Footer />
    </main>
  )
}
