import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContatoHero } from "@/components/contato/contato-hero"
import { ContatoForm } from "@/components/contato/contato-form"

export const metadata = {
  title: "Contato | ST Farma — Consultoria em Formulação Magistral",
  description: "Fale com a ST Farma sobre consultoria técnica para indústria, magistral ou marca. Atendimento restrito a empresas. Resposta em até 48h úteis.",
}

export default function ContatoPage() {
  return (
    <main>
      <Navbar />
      <ContatoHero />
      <ContatoForm />
      <Footer />
    </main>
  )
}
