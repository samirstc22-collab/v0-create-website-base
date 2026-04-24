import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioSpotlightAzelaic } from "@/components/portfolio/portfolio-spotlight-azelaic"
import { PortfolioClinicalResults } from "@/components/portfolio/portfolio-clinical-results"
import { PortfolioLhaPeel } from "@/components/portfolio/portfolio-lha-peel"
import { PortfolioSpotlightNiacinamide } from "@/components/portfolio/portfolio-spotlight-niacinamide"
import { PortfolioResearch } from "@/components/portfolio/portfolio-research"
import { PortfolioTimeline } from "@/components/portfolio/portfolio-timeline"
import { PortfolioCategories } from "@/components/portfolio/portfolio-categories"
import { PortfolioCta } from "@/components/portfolio/portfolio-cta"

export const metadata = {
  title: "Portfolio de Inovacoes | Prof. Samir Tannuri",
  description:
    "Seis anos de inovacoes em formulacao dermatologica e cosmetologica. Primeiro peeling azelaico em pasta do mundo, serum niacinamida 25% + B12, protocolo LHA La Peel e +200 formulas originais.",
  openGraph: {
    title: "Portfolio de Inovacoes | Prof. Samir Tannuri",
    description:
      "Marcos cientificos que criaram mercado: peeling azelaico em pasta (+30,5% Visia), serum niacinamida 25% + B12, protocolo LHA La Peel integrado.",
  },
}

export default function PortfolioInovacoesPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <PortfolioHero />
      <div id="destaques" />
      <PortfolioSpotlightAzelaic />
      <PortfolioClinicalResults />
      <PortfolioLhaPeel />
      <PortfolioSpotlightNiacinamide />
      <PortfolioResearch />
      <PortfolioTimeline />
      <PortfolioCategories />
      <PortfolioCta />
      <Footer />
    </main>
  )
}
