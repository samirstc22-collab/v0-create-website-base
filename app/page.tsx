import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustMarquee } from "@/components/trust-marquee"
import { BigStats } from "@/components/big-stats"
import { About } from "@/components/about"
import { DualExpertise } from "@/components/dual-expertise"
import { Missions } from "@/components/missions"
import { Science } from "@/components/science"
import { Speaker } from "@/components/speaker"
import { Consultoria } from "@/components/consultoria"
import { Industries } from "@/components/industries"
import { Products } from "@/components/products"
import { Authority } from "@/components/authority"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <BigStats />
      <About />
      <DualExpertise />
      <Missions />
      <Science />
      <Speaker />
      <Consultoria />
      <Industries />
      <Products />
      <Authority />
      <Contact />
      <Footer />
    </main>
  )
}
