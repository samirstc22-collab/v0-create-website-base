import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SobreHero } from "@/components/sobre/sobre-hero"
import { SobreAbout } from "@/components/sobre/sobre-about"
import { SobreSocials } from "@/components/sobre/sobre-socials"
import { HomeTrajectory } from "@/components/home-trajectory"
import { DualExpertise } from "@/components/dual-expertise"
import { Missions } from "@/components/missions"
import { Science } from "@/components/science"
import { Speaker } from "@/components/speaker"

export const metadata = {
  title: "Sobre — Samir Tannuri · Professor, Pesquisador e Consultor",
  description:
    "Samir Tannuri atua na interface entre dermatologia clínica aplicada, desenvolvimento de formulações e educação científica — com base sólida em pesquisa pela UNICAMP, USF e FOP, rigor metodológico e aplicabilidade real no balcão e na bancada.",
}

export default function SobrePage() {
  return (
    <main>
      <Navbar />
      <SobreHero />
      {/* Bloco Portfólio · Trajetória — agora no início do Sobre */}
      <HomeTrajectory />
      <SobreAbout />
      <DualExpertise />
      <Missions />
      <Science />
      <Speaker />
      <SobreSocials />
      <Footer />
    </main>
  )
}
