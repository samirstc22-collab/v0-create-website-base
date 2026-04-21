import { Navbar } from "@/components/navbar"
import { DynamicBanner } from "@/components/dynamic-banner"
import { BigStats } from "@/components/big-stats"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <DynamicBanner />
      <BigStats />
      <HomeAuthority />
      <Footer />
    </main>
  )
}
