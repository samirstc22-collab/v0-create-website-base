import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LevaIAHero } from "@/components/leva-ia/leva-ia-hero"
import { LevaIAFeatures } from "@/components/leva-ia/leva-ia-features"
import { LevaIADemo } from "@/components/leva-ia/leva-ia-demo"
import { LevaIAPricing } from "@/components/leva-ia/leva-ia-pricing"

export const metadata = {
  title: "Leva a IA na Sua | Inteligencia Artificial para Formulacao | ST Farma",
  description:
    "Solucoes de inteligencia artificial para formulacao magistral e cosmetica. Automacao de processos, sugestao de ativos e otimizacao de formulas com IA.",
}

export default function LevaIAPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <LevaIAHero />
      <LevaIAFeatures />
      <LevaIADemo />
      <LevaIAPricing />
      <Footer />
    </main>
  )
}
