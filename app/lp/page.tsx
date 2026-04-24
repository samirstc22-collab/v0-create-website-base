import { Metadata } from "next"
import { LPHero } from "@/components/lp/lp-hero"
import { LPMissions } from "@/components/lp/lp-missions"
import { LPIndustrial } from "@/components/lp/lp-industrial"
import { LPMagistral } from "@/components/lp/lp-magistral"
import { LPFormulatorAI } from "@/components/lp/lp-formulator-ai"
import { LPContact } from "@/components/lp/lp-contact"
import { LPFooter } from "@/components/lp/lp-footer"

export const metadata: Metadata = {
  title: "Consultoria Premium — Samir Tannuri · ST Farma",
  description:
    "Consultoria em Tecnologia Farmacêutica: P&D industrial, consultoria magistral, transferência de tecnologia e sourcing internacional. Prática industrial real, aplicada ao seu portfólio.",
  openGraph: {
    title: "Consultoria Premium — ST Farma",
    description:
      "Consultoria técnica de alta performance em tecnologia farmacêutica magistral e industrial.",
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
