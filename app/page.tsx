import { Navbar } from "@/components/navbar"
import { HomeHeroLight } from "@/components/home-hero-light"
import { BigStats } from "@/components/big-stats"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#f1f5f9]">
      <Navbar />
      <HomeHeroLight />
      <BigStats />
      <HomeAuthority />
      <Footer />
    </main>
  )
}
