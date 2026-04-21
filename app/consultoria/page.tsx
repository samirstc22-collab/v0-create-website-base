import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria/consultoria-hero"
import { ConsultoriaMethod } from "@/components/consultoria/consultoria-method"
import { ConsultoriaEnvironment } from "@/components/consultoria/consultoria-environment"
import { ConsultoriaTiers } from "@/components/consultoria/consultoria-tiers"
import { Industries } from "@/components/industries"
import { PersonalPitch } from "@/components/personal-pitch"

export const metadata = {
  title: "Consultoria Personalizada | Prof. Samir Tannuri",
  description:
    "A primeira consultoria farmacêutica 100% personalizada do Brasil. Diagnóstico, plano sob medida e lucratividade comprovada para a sua farmácia ou drogaria.",
}

export default function ConsultoriaPage() {
  return (
    <main>
      <Navbar />
      <ConsultoriaHero />
      <ConsultoriaMethod />
      <ConsultoriaEnvironment />
      <ConsultoriaTiers />
      <PersonalPitch />
      <Industries />
      <Footer />
    </main>
  )
}
