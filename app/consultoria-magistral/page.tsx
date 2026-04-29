import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaMagistralHero } from "@/components/consultoria/consultoria-magistral-hero"
import { ConsultoriaMagistralServices } from "@/components/consultoria/consultoria-magistral-services"
import { ConsultoriaMagistralCTA } from "@/components/consultoria/consultoria-magistral-cta"
import { LeadQuiz } from "@/components/lead-quiz"

export const metadata = {
  title: "Consultoria Magistral | Formulas Exclusivas para Farmacias | ST Farma",
  description:
    "Consultoria especializada para farmacias de manipulacao. Portfolio autoral, protocolos diferenciados e narrativa tecnica para sair da disputa por preco.",
}

export default function ConsultoriaMagistralPage() {
  return (
    <main>
      <Navbar />
      <ConsultoriaMagistralHero />
      <ConsultoriaMagistralServices />
      <ConsultoriaMagistralCTA />
      <LeadQuiz />
      <Footer />
    </main>
  )
}
