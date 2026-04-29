import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ConsultoriaHero } from "@/components/consultoria/consultoria-hero"
import { ConsultoriaPains } from "@/components/consultoria/consultoria-pains"
import { ConsultoriaTransformation } from "@/components/consultoria/consultoria-transformation"
import { ConsultoriaDeliverables } from "@/components/consultoria/consultoria-deliverables"
import { ConsultoriaMethodSteps } from "@/components/consultoria/consultoria-method-steps"
import { ConsultoriaResults } from "@/components/consultoria/consultoria-results"
import { ConsultoriaFAQ } from "@/components/consultoria/consultoria-faq"
import { ConsultoriaLeadForm } from "@/components/consultoria/consultoria-lead-form"

export const metadata = {
  title: "Consultoria em Formulacao Magistral | Samir Tannuri",
  description:
    "Diagnostico gratuito de 30 min para mapear pontos criticos da sua operacao. Consultoria sob medida para farmacias magistrais, industria cosmetica e marcas proprias.",
}

export default function ConsultoriaPage() {
  return (
    <main className="bg-[#0a1628]">
      <Navbar />
      {/* 1. HERO — promessa + CTA primario */}
      <ConsultoriaHero />
      {/* 2. DOR — qualificacao por sintomas reconheciveis */}
      <ConsultoriaPains />
      {/* 3. TRANSFORMACAO — antes x depois concreto */}
      <ConsultoriaTransformation />
      {/* 4. ENTREGAVEIS — modalidades com escopo claro */}
      <ConsultoriaDeliverables />
      {/* 5. METODO — como o trabalho acontece */}
      <ConsultoriaMethodSteps />
      {/* 6. RESULTADOS — prova social numerica */}
      <ConsultoriaResults />
      {/* 7. FAQ — quebra de objecao */}
      <ConsultoriaFAQ />
      {/* 8. LEAD FORM — captura qualificada */}
      <ConsultoriaLeadForm />
      <Footer />
    </main>
  )
}
