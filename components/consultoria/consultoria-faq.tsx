"use client"

import { useState } from "react"
import { HelpCircle, Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "A consultoria funciona para farmacia magistral pequena ou so para industria?",
    a: "Funciona para os dois cenarios — e a metodologia e a mesma. A diferenca esta na escala dos entregaveis. Atendo desde farmacias com 1 unidade ate industrias com pipeline nacional. O diagnostico inicial define qual modalidade faz sentido para o seu momento.",
  },
  {
    q: "Em quanto tempo eu vejo resultado concreto?",
    a: "O primeiro relatorio estrategico sai em 7 dias. Os primeiros prototipos validados em 30 dias. Resultado em ticket medio e indicacao de prescritor costuma aparecer entre 60 e 90 dias, dependendo do estagio inicial da operacao.",
  },
  {
    q: "Voce trabalha presencial ou online?",
    a: "Os dois formatos. Mentoria Premium e 100% online com sessoes intensivas de 2h. A modalidade In Loco inclui visitas quinzenais ou mensais ao seu laboratorio para hands-on com a equipe. Voce escolhe.",
  },
  {
    q: "Existe algum tipo de garantia?",
    a: "Sim. Se na primeira sessao apos o diagnostico voce sentir que o caminho nao faz sentido para sua operacao, devolvemos 100% do investimento da modalidade. Sem perguntas. Em 6 anos isso aconteceu apenas duas vezes.",
  },
  {
    q: "Voce assina NDA? Como fica a confidencialidade das formulas?",
    a: "Assino NDA antes de qualquer informacao sensivel ser compartilhada. Toda formula desenvolvida durante a consultoria e propriedade exclusiva da sua operacao — eu nao replico para concorrentes nem uso em outros projetos. Isso esta em contrato.",
  },
  {
    q: "Qual o investimento minimo para comecar?",
    a: "O Diagnostico Tecnico (formato de entrada) parte de um valor fixo divulgado na primeira conversa. A Mentoria Premium tem investimento a partir de R$ 12.000 para 3 meses. A Consultoria 360 e proposta sob medida. O diagnostico inicial de 30 minutos e gratuito.",
  },
  {
    q: "Eu nao sei qual modalidade escolher. Como descubro?",
    a: "Justamente para isso existe o diagnostico gratuito de 30 minutos. Conversamos sobre seu momento, suas dores e suas metas — e eu te indico o caminho mais curto. Se nao for nenhuma das modalidades, eu te digo isso tambem. Sem empurrar pacote.",
  },
]

export function ConsultoriaFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative overflow-hidden bg-[#fbf7f1] py-20 md:py-28">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0a1628]/15 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0a1628]">
            <HelpCircle className="h-3.5 w-3.5" />
            Perguntas frequentes
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-[#0a1628] md:text-5xl">
            As 7 duvidas que{" "}
            <em className="text-[#b87333]">todo cliente faz antes de fechar.</em>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-white ring-1 transition-all ${
                  isOpen
                    ? "ring-[#b87333]/40 shadow-[0_15px_40px_rgba(184,115,51,0.08)]"
                    : "ring-[#0a1628]/8"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
                >
                  <span
                    className={`text-[15px] font-semibold leading-snug md:text-base ${
                      isOpen ? "text-[#b87333]" : "text-[#0a1628]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-[#b87333] text-white" : "bg-[#0a1628]/5 text-[#0a1628]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-[#0a1628]/70 md:px-7">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tail CTA */}
        <div className="mt-10 text-center">
          <p className="text-[15px] text-[#0a1628]/65">
            Tem outra duvida especifica?{" "}
            <a
              href="https://wa.me/5511981403000"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#b87333] underline-offset-4 hover:underline"
            >
              Pergunte direto no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
