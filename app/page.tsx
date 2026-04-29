import { Navbar } from "@/components/navbar"
import { HeroPremium } from "@/components/hero-premium"
import { FeaturedProducts } from "@/components/featured-products"
import { BigStats } from "@/components/big-stats"
import { TeachingShowcase } from "@/components/teaching-showcase"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { LeadCaptureSection } from "@/components/lead-capture-section"
import { LeadQuiz } from "@/components/lead-quiz"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      {/* 1. HERO PREMIUM — foto grande do Samir + video animado + frase de impacto */}
      <HeroPremium />
      {/* 2. PRODUTOS EM DESTAQUE — cursos especiais, formularios e ebooks */}
      <FeaturedProducts />
      {/* 3. PROVA RAPIDA — numeros que validam autoridade */}
      <BigStats />
      {/* 3.5 ENSINO & PALESTRAS — autoridade visual em cena (Samir lecionando) */}
      <TeachingShowcase />
      {/* 4. DIFERENCIACAO — problema + implicacao */}
      <HomeDifferentiation />
      {/* 5. CAPTACAO DE LEADS — formulario Clube da Formula */}
      <LeadCaptureSection />
      {/* 6. QUIZ DE QUALIFICACAO — captura leads qualificados */}
      <LeadQuiz />
      {/* 7. CONVERSAO FINAL — autoridade + CTA */}
      <HomeAuthority />
      <Footer />
    </main>
  )
}
