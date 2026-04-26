import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IALabBanner } from "@/components/ia-lab-banner"
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
      {/* 1. Prova de autoridade - numeros que validam */}
      <BigStats />
      {/* 2. Dores + Solucao comparativa */}
      <HomeDifferentiation />
      {/* 3. Ofertas explicitas por segmento */}
      <ConsultoriaSection />
      {/* 4. Tecnologia / Inovacao */}
      <IALabBanner />
      <HomeLabPro />
      <HomeInnovations />
      <VetDermKnowledge />
      {/* 5. Autoridade final + CTA */}
      <HomeAuthority />
      {/* 6. Social (menos prioritario) */}
      <InstagramBanner />
      <Footer />
    </main>
  )
}
