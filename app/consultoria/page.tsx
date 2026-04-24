import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria/consultoria-hero"
import { ConsultoriaMethod } from "@/components/consultoria/consultoria-method"
import { ConsultoriaEnvironment } from "@/components/consultoria/consultoria-environment"
import { ConsultoriaTiers } from "@/components/consultoria/consultoria-tiers"
import { Industries } from "@/components/industries"
import { PersonalPitch } from "@/components/personal-pitch"

export const metadata = {
  title: "Consultoria em Tecnologia Farmacêutica | ST Farma",
  description:
    "Consultoria sob medida para indústrias cosméticas, farmácias magistrais e marcas em desenvolvimento de portfólio. Diagnóstico técnico, reformulação, transferência de tecnologia e sourcing internacional.",
}

export default function ConsultoriaPage() {
  return (
    <main>
      <Navbar />
      <ConsultoriaHero />
      <ConsultoriaMethod />
      <ConsultoriaEnvironment />
      <ConsultoriaTiers />
      <PersonalPitch />
      <Industries />
      <Footer />
    </main>
  )
}
