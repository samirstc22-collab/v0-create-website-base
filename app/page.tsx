import { Navbar } from "@/components/navbar"
import { HeroVideo } from "@/components/hero-video"
import { BigStats } from "@/components/big-stats"
import { HomeDifferentiation } from "@/components/home-differentiation"
import { CoursesCarousel } from "@/components/courses-carousel"
import { LeadCaptureSection } from "@/components/lead-capture-section"
import { ConsultoriaSection } from "@/components/consultoria-section"
import { LeadQuiz } from "@/components/lead-quiz"
import { HomeAuthority } from "@/components/home-authority"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />
      {/* 1. HERO COM VIDEO — impacto visual maximo + moleculas 3D */}
      <HeroVideo />
      {/* 2. PROVA RAPIDA — numeros que validam autoridade imediatamente */}
      <BigStats />
      {/* 3. DIFERENCIACAO — problema + implicacao: 'ativos bons nao bastam' */}
      <HomeDifferentiation />
      {/* 4. CARROSSEL DE CURSOS — destaque comercial com precos e CTAs */}
      <CoursesCarousel />
      {/* 5. CAPTACAO DE LEADS — formulario Clube da Formula */}
      <LeadCaptureSection />
      {/* 6. OFERTAS POR SEGMENTO — consultoria: magistral, industrial, prescritor */}
      <ConsultoriaSection />
      {/* 7. QUIZ DE QUALIFICACAO — captura leads qualificados */}
      <LeadQuiz />
      {/* 8. CONVERSAO FINAL — autoridade + CTA */}
      <HomeAuthority />
      <Footer />
    </main>
  )
}
