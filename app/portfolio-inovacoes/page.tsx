import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioSpotlightAzelaic } from "@/components/portfolio/portfolio-spotlight-azelaic"
import { PortfolioSpotlightNiacinamide } from "@/components/portfolio/portfolio-spotlight-niacinamide"
import { PortfolioResearch } from "@/components/portfolio/portfolio-research"
import { PortfolioTimeline } from "@/components/portfolio/portfolio-timeline"
import { PortfolioCategories } from "@/components/portfolio/portfolio-categories"
import { PortfolioCta } from "@/components/portfolio/portfolio-cta"

export const metadata = {
  title: "Portfolio de Inovações | Prof. Samir Tannuri",
  description:
    "Seis anos de inovações em formulação dermatológica e cosmetológica. Primeiro peeling azelaico em pasta do mundo, sérum niacinamida 25% + B12, pesquisa USF em fibroblastos e +200 fórmulas originais.",
  openGraph: {
    title: "Portfolio de Inovações | Prof. Samir Tannuri",
    description:
      "Três marcos científicos que criaram mercado: peeling azelaico em pasta (+30,5% Visia®), sérum niacinamida 25% + B12 e pesquisa USF em fatores de crescimento.",
  },
}

export default function PortfolioInovacoesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <PortfolioHero />
      <div id="destaques" />
      <PortfolioSpotlightAzelaic />
      <PortfolioSpotlightNiacinamide />
      <PortfolioResearch />
      <PortfolioTimeline />
      <PortfolioCategories />
      <PortfolioCta />
      <Footer />
    </main>
  )
}
