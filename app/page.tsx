import { Navbar } from "@/components/navbar"
import { HomeHeroLight } from "@/components/home-hero-light"
import { BigStats } from "@/components/big-stats"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { HomeLabPro } from "@/components/home-lab-pro"
import { HomeInnovations } from "@/components/home-innovations"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HomeHeroLight />
      <BigStats />
      <HomeDifferentiation />
      <HomeLabPro />
      <HomeInnovations />
      <HomeAuthority />
      <Footer />
    </main>
  )
}
