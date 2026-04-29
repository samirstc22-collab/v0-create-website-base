import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioShowcase } from "@/components/portfolio/portfolio-showcase"
import { PortfolioCtaFinal } from "@/components/portfolio/portfolio-cta-final"

export const metadata: Metadata = {
  title: "Portfólio — +20 Fórmulas Autorais · ST Farma",
  description:
    "Vitrine de mais de 20 fórmulas e produtos desenvolvidos por Samir Tannuri para indústria cosmética Grau I e II, marcas próprias e farmácias magistrais — em P&D, criação de produto e formulação de matéria-prima.",
  openGraph: {
    title: "Portfólio · ST Farma",
    description:
      "+20 fórmulas autorais entregues a marcas líderes em pesquisa, desenvolvimento, inovação, criação de produto e formulação de matéria-prima.",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PortfolioHero />
      <PortfolioShowcase />
      <PortfolioCtaFinal />
      <Footer />
    </main>
  )
}
