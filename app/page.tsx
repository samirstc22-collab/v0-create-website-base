import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { InstagramBanner } from "@/components/instagram-banner"
import { ConsultoriaSection } from "@/components/consultoria-section"
import { BigStats } from "@/components/big-stats"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { HomeLabPro } from "@/components/home-lab-pro"
import { HomeInnovations } from "@/components/home-innovations"
import { VetDermKnowledge } from "@/components/vet-derm-knowledge"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      <HeroSection />
      <InstagramBanner />
      <ConsultoriaSection />
      <BigStats />
      <HomeDifferentiation />
      <HomeLabPro />
      <HomeInnovations />
      <VetDermKnowledge />
      <HomeAuthority />
      <Footer />
    </main>
  )
}
