import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProtocolosHero } from "@/components/protocolos/protocolos-hero"
import { ProtocolosServices } from "@/components/protocolos/protocolos-services"
import { ProtocolosProcess } from "@/components/protocolos/protocolos-process"
import { ProtocolosCTA } from "@/components/protocolos/protocolos-cta"

export const metadata = {
  title: "Protocolos Clinicos | Consultoria para Dermatologia | ST Farma",
  description:
    "Desenvolvimento de protocolos clinicos inovadores para clinicas de dermatologia e prescritores. Abordagem cutting-edge com ativos de ultima geracao e evidencia cientifica.",
}

export default function ProtocolosPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ProtocolosHero />
      <ProtocolosServices />
      <ProtocolosProcess />
      <ProtocolosCTA />
      <Footer />
    </main>
  )
}
