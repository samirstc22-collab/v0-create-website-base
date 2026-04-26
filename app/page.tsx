import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IALabBanner } from "@/components/ia-lab-banner"
import { InstagramBanner } from "@/components/instagram-banner"
import { ConsultoriaSection } from "@/components/consultoria-section"
import { BigStats } from "@/components/big-stats"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { HomeClubeBanner } from "@/components/home-clube-banner"
import { Missions } from "@/components/missions"
import { HomeLabPro } from "@/components/home-lab-pro"
import { HomeInnovations } from "@/components/home-innovations"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      <HeroSection />
      {/* 1. Prova de autoridade - numeros que validam */}
      <BigStats />
      {/* 2. Clube de Formulas — produto-chave cedo no funil para captura imediata */}
      <HomeClubeBanner />
      {/* 3. Dores + Solucao comparativa */}
      <HomeDifferentiation />
      {/* 4. Missoes Internacionais — autoridade global antes da decisao de compra */}
      <Missions />
      {/* 5. Ofertas explicitas por segmento */}
      <ConsultoriaSection />
      {/* 6. Tecnologia / Inovacao */}
      <IALabBanner />
      <HomeLabPro />
      <HomeInnovations />
      {/* 7. Autoridade final + CTA */}
      <HomeAuthority />
      {/* 8. Social (menos prioritario) */}
      <InstagramBanner />
      <Footer />
    </main>
  )
}
