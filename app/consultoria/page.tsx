import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria/consultoria-hero"
import { ConsultoriaTiers } from "@/components/consultoria/consultoria-tiers"
import { Industries } from "@/components/industries"

export const metadata = {
  title: "Consultoria | Prof. Samir Tannuri - Clube de Formulas",
  description: "Consultoria em P&D cosmetico para farmacias magistrais e industrias. Diagnostico tecnico, reformulacao de portfolio e desenvolvimento industrial.",
}

export default function ConsultoriaPage() {
  return (
    <main>
      <Navbar />
      <ConsultoriaHero />
      <ConsultoriaTiers />
      <Industries />
      <Footer />
    </main>
  )
}
