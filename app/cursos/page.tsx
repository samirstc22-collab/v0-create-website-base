import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CursosHero } from "@/components/cursos/cursos-hero"
import { CursosGrid } from "@/components/cursos/cursos-grid"
import { CursosCTA } from "@/components/cursos/cursos-cta"
import { LeadCaptureSection } from "@/components/lead-capture-section"

export const metadata = {
  title: "Cursos | Clube de Formulas — Samir Tannuri",
  description:
    "Cursos de cosmetologia aplicada, manipulacao avancada e gestao magistral. Conhecimento internacional com aplicacao pratica imediata.",
}

export default function CursosPage() {
  return (
    <main>
      <Navbar />
      <CursosHero />
      <CursosGrid />
      <LeadCaptureSection />
      <CursosCTA />
      <Footer />
    </main>
  )
}
