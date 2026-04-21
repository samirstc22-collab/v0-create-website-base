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
  title: "Sobre — Prof. Samir Tannuri · Clube de Fórmulas",
  description:
    "Conheça a trajetória do Prof. Samir Tannuri — pesquisador CNPq na UNICAMP, consultor industrial e palestrante com mais de 24 anos em P&D cosmético. Redes sociais oficiais: LinkedIn, Instagram @cienciadapele e Currículo Lattes.",
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
