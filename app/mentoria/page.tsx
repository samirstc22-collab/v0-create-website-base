import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MentoriaHero } from "@/components/mentoria/mentoria-hero"
import { MentoriaSessions } from "@/components/mentoria/mentoria-sessions"
import { MentoriaPlans } from "@/components/mentoria/mentoria-plans"
import { MentoriaExclusivity } from "@/components/mentoria/mentoria-exclusivity"

export const metadata = {
  title: "Mentoria Premium | Consultoria Tecnica Exclusiva | ST Farma",
  description:
    "Pacote exclusivo de mentoria com 4 sessoes de consultoria tecnica direcionadas para industria cosmetica e farmacias magistrais. Planos mensais com suporte dedicado e materiais exclusivos.",
}

export default function MentoriaPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <MentoriaHero />
      <MentoriaSessions />
      <MentoriaPlans />
      <MentoriaExclusivity />
      <Footer />
    </main>
  )
}
