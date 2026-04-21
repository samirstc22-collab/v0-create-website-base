import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MateriaisHero } from "@/components/materiais/materiais-hero"
import { MateriaisGrid } from "@/components/materiais/materiais-grid"

export const metadata = {
  title: "Materiais | Prof. Samir Tannuri - Clube de Formulas",
  description: "Cursos, eBooks e formularios tecnicos com rigor cientifico. Materiais clinico-prescritivos prontos para aplicacao em consultorio ou laboratorio.",
}

export default function MateriaisPage() {
  return (
    <main>
      <Navbar />
      <MateriaisHero />
      <MateriaisGrid />
      <Footer />
    </main>
  )
}
