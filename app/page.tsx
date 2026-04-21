import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustMarquee } from "@/components/trust-marquee"
import { BigStats } from "@/components/big-stats"
import { HomeAboutPreview } from "@/components/home-about-preview"
import { PersonalPitch } from "@/components/personal-pitch"
import { HomeServicesPreview } from "@/components/home-services-preview"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustMarquee />
      <BigStats />
      <HomeAboutPreview />
      <PersonalPitch />
      <HomeServicesPreview />
      <Footer />
    </main>
  )
}
