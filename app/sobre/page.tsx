import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SobreHero } from "@/components/sobre/sobre-hero"
import { SobreAbout } from "@/components/sobre/sobre-about"
import { SobreSocials } from "@/components/sobre/sobre-socials"
import { DualExpertise } from "@/components/dual-expertise"
import { Missions } from "@/components/missions"
import { Science } from "@/components/science"
import { Speaker } from "@/components/speaker"

export const metadata = {
  title: "Sobre — Samir Tannuri · ST Farma",
  description:
    "Conheça a trajetória de Samir Tannuri — consultor em tecnologia magistral com seis anos coordenando P&D no maior grupo magistral do Brasil, delegado técnico In-Cosmetics Global Paris 2025 e coautor de paper peer-reviewed.",
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
      <SobreSocials />
      <Footer />
    </main>
  )
}
