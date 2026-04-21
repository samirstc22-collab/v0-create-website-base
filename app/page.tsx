import { Navbar } from "@/components/navbar"
import { HomeHeroLight } from "@/components/home-hero-light"
import { BigStats } from "@/components/big-stats"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"
import { SectionTransition } from "@/components/section-transition"

export default function Home() {
  return (
    <main className="bg-[#0a1628]">
      <Navbar />
      <HomeHeroLight />
      <BigStats />
      {/* Transição branca → navy escuro (wave) */}
      <SectionTransition from="#ffffff" to="#0a1628" variant="wave" height={110} />
      <HomeAuthority />
      <Footer />
    </main>
  )
}
