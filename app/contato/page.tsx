import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContatoHero } from "@/components/contato/contato-hero"
import { ContatoForm } from "@/components/contato/contato-form"

export const metadata = {
  title: "Contato | Prof. Samir Tannuri - Clube de Formulas",
  description: "Entre em contato com o Prof. Samir Tannuri para consultoria em P&D cosmetico, palestras ou parcerias.",
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
