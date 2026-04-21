import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SobreHero } from "@/components/sobre/sobre-hero"
import { SobreAbout } from "@/components/sobre/sobre-about"
import { DualExpertise } from "@/components/dual-expertise"
import { Missions } from "@/components/missions"
import { Science } from "@/components/science"
import { Speaker } from "@/components/speaker"

export const metadata = {
  title: "Sobre | Prof. Samir Tannuri - Clube de Formulas",
  description: "Conheca a trajetoria do Prof. Samir Tannuri, pesquisador CNPq na UNICAMP, consultor industrial e speaker com mais de 24 anos de experiencia em P&D cosmetico.",
}

export default function SobrePage() {
  return (
    <main>
      <Navbar />
      <SobreHero />
      <SobreAbout />
      <DualExpertise />
      <Missions />
      <Science />
      <Speaker />
      <Footer />
    </main>
  )
}
