import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FormulariosHero } from "@/components/formularios/formularios-hero"
import { FormulariosGrid } from "@/components/formularios/formularios-grid"
import { FormulariosCta } from "@/components/formularios/formularios-cta"

export const metadata = {
  title: "Formulários & Protocolos — Catálogo Técnico 2026 · Clube de Fórmulas",
  description:
    "60+ artefatos técnicos de dermatologia magistral organizados por complexidade. Protocolos, formulários, lâminas e compêndios validados em 24 anos de bancada.",
}

export default function FormulariosPage() {
  return (
    <main>
      <Navbar />
      <FormulariosHero />
      <FormulariosGrid />
      <FormulariosCta />
      <Footer />
    </main>
  )
}
