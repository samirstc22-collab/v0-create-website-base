import type { Metadata } from "next"
import { PageLayout } from "@/components/page-layout"
import { GmHero } from "@/components/guia-marca/gm-hero"
import { GmLogos } from "@/components/guia-marca/gm-logos"
import { GmTypography } from "@/components/guia-marca/gm-typography"
import { GmColors } from "@/components/guia-marca/gm-colors"
import { GmHierarchy } from "@/components/guia-marca/gm-hierarchy"
import { GmComponents } from "@/components/guia-marca/gm-components"
import { GmAccessibility } from "@/components/guia-marca/gm-accessibility"
import { GmRules } from "@/components/guia-marca/gm-rules"
import { GmImplementation } from "@/components/guia-marca/gm-implementation"

export const metadata: Metadata = {
  title:
    "Guia de Marca · Tipografia & Logotipo | Tannuri Brand System v1.0",
  description:
    "Manual operacional de aplicação visual para o ecossistema Samir Tannuri Consultoria, Clube de Fórmulas e IA Formulator. Tipografia, logotipo, paleta cromática, componentes e diretrizes de acessibilidade para implementação web.",
  keywords:
    "tannuri brand system, guia de marca, manual de identidade, tipografia editorial, logotipo, samir tannuri, sistema cromático, design system",
  openGraph: {
    title: "Guia de Marca · Tannuri Brand System v1.0",
    description:
      "Documento operacional para desenvolvimento web — fontes, hierarquia, paleta, logotipo e acessibilidade.",
    type: "article",
  },
}

export default function GuiaDeMarcaPage() {
  return (
    <PageLayout>
      <GmHero />
      <GmLogos />
      <GmTypography />
      <GmColors />
      <GmHierarchy />
      <GmComponents />
      <GmAccessibility />
      <GmRules />
      <GmImplementation />
    </PageLayout>
  )
}
