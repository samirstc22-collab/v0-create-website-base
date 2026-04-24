import { Metadata } from "next"
import { LPHero } from "@/components/lp/lp-hero"
import { LPMissions } from "@/components/lp/lp-missions"
import { LPIndustrial } from "@/components/lp/lp-industrial"
import { LPMagistral } from "@/components/lp/lp-magistral"
import { LPFormulatorAI } from "@/components/lp/lp-formulator-ai"
import { LPContact } from "@/components/lp/lp-contact"
import { LPFooter } from "@/components/lp/lp-footer"

export const metadata: Metadata = {
  title: "Lab Pro — Samir Tannuri · Laboratório de Alta Performance",
  description:
    "Jornal científico de luxo encontra interface SaaS. Consultoria P&D Industrial, Magistral e o Formulator AI Lab Pro — infraestrutura inteligente de formulação treinada sobre 4.000+ fórmulas validadas.",
  openGraph: {
    title: "Lab Pro — Samir Tannuri",
    description:
      "P&D cosmético de alta performance + Formulator AI Lab Pro.",
    type: "website",
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#070A11] text-white">
      <LPHero />
      <LPMissions />
      <LPIndustrial />
      <LPMagistral />
      <LPFormulatorAI />
      <LPContact />
      <LPFooter />
    </main>
  )
}
