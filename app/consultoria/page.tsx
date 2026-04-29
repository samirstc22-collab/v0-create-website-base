import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria/consultoria-hero"

export const metadata = {
  title: "Consultoria em Formulacao Magistral | ST Farma",
  description:
    "Consultoria sob medida para industrias cosmeticas, farmacias magistrais e marcas. Diagnostico tecnico, reformulacao, transferencia de tecnologia e sourcing internacional.",
}

export default function ConsultoriaPage() {
  return (
    <main className="bg-[#0a1628]">
      <Navbar />
      <ConsultoriaHero />
      <Footer />
    </main>
  )
}
