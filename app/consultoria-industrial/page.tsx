import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaIndustrialHero } from "@/components/consultoria/consultoria-industrial-hero"
import { ConsultoriaIndustrialServices } from "@/components/consultoria/consultoria-industrial-services"
import { ConsultoriaIndustrialCTA } from "@/components/consultoria/consultoria-industrial-cta"
import { LeadQuiz } from "@/components/lead-quiz"

export const metadata = {
  title: "Consultoria Industrial | P&D para Industrias Cosmeticas | ST Farma",
  description:
    "Consultoria em P&D para industrias cosmeticas e farmaceuticas. Prototipos com sensorial refinado, claims defensaveis e suporte do conceito a escala.",
}

export default function ConsultoriaIndustrialPage() {
  return (
    <main>
      <Navbar />
      <ConsultoriaIndustrialHero />
      <ConsultoriaIndustrialServices />
      <ConsultoriaIndustrialCTA />
      <LeadQuiz />
      <Footer />
    </main>
  )
}
