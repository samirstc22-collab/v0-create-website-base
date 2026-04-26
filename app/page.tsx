import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IALabBanner } from "@/components/ia-lab-banner"
import { InstagramBanner } from "@/components/instagram-banner"
import { ConsultoriaSection } from "@/components/consultoria-section"
import { BigStats } from "@/components/big-stats"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { HomeClubeBanner } from "@/components/home-clube-banner"
import { HomeContentEngine } from "@/components/home-content-engine"
import { Missions } from "@/components/missions"
import { HomeLabPro } from "@/components/home-lab-pro"
import { HomeInnovations } from "@/components/home-innovations"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      {/* 1. HERO — problema + promessa: capta atencao */}
      <HeroSection />
      {/* 2. PROVA RAPIDA — numeros que validam autoridade imediatamente */}
      <BigStats />
      {/* 3. PROBLEMA + IMPLICACAO — abre a dor: 'ativos bons nao bastam' */}
      <HomeDifferentiation />
      {/* 4. AUTORIDADE PRE-VENDA — conteudo tecnico como mecanismo de conversao
             (caso comentado, analise de ativo, racional de combinacao, erro frequente).
             Cada formato abre uma nova curiosidade tecnica antes da oferta comercial. */}
      <HomeContentEngine />
      {/* 5. SOLUCAO DE BAIXO TICKET — Clube: porta de entrada para quem ja foi engajado pelo conteudo */}
      <HomeClubeBanner />
      {/* 6. AUTORIDADE GLOBAL — missoes internacionais validam a inteligencia tecnica */}
      <Missions />
      {/* 7. OFERTAS POR SEGMENTO — consultoria explicita: magistral, industrial, prescritor */}
      <ConsultoriaSection />
      {/* 8. DIFERENCIACAO TECNOLOGICA — IA Lab + LabPro + Inovacoes em escala */}
      <IALabBanner />
      <HomeLabPro />
      <HomeInnovations />
      {/* 9. CONVERSAO FINAL — autoridade + CTA */}
      <HomeAuthority />
      {/* 10. SOCIAL — Instagram como prova viva, fora do funil principal */}
      <InstagramBanner />
      <Footer />
    </main>
  )
}
