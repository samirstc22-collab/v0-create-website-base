import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursosHero } from "@/components/cursos/cursos-hero"
import { CursosFeatured } from "@/components/cursos/cursos-featured"
import { CursosGrid } from "@/components/cursos/cursos-grid"
import { CursosTestimonials } from "@/components/cursos/cursos-testimonials"
import { CursosCTA } from "@/components/cursos/cursos-cta"

export const metadata = {
  title: "Cursos & Imersões | ST Farma — Samir Tannuri",
  description:
    "Cursos de cosmetologia aplicada, manipulação avançada e tecnologia farmacêutica com Samir Tannuri. Prática industrial real, aplicação imediata no seu portfólio.",
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
