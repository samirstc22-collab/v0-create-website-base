"use client"

import { motion } from "framer-motion"
import { Sparkles, Shield, Droplets, Zap, FlaskConical, FileCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogNiacinamideB12() {
  const mechanisms = [
    {
      icon: Sparkles,
      title: "Bloqueio de Melanossomos",
      description: "Niacinamida 25% inibe ate 68% da transferencia de melanossomos para queratinocitos",
      color: "#E07390",
    },
    {
      icon: Shield,
      title: "Inibicao da Tirosinase",
      description: "Alfa-arbutin 0,25% compete pelo sitio ativo da tirosinase, bloqueando a melanogenese",
      color: "#C8529B",
    },
    {
      icon: Zap,
      title: "Protecao Mitocondrial",
      description: "Vitamina B12 (0,04%) protege DNA mitocondrial contra dano oxidativo UV-induzido",
      color: "#9B4D96",
    },
    {
      icon: Droplets,
      title: "Hidratacao Multinivel",
      description: "Acido hialuronico + glicerina 8% + pantenol para reparo completo de barreira",
      color: "#E07390",
    },
  ]

  const composition = [
    { component: "Niacinamide", concentration: "25%", function: "Bloqueio melanossomos, barreira, sebocorrecao" },
    { component: "Glycerin", concentration: "8%", function: "Umectante, co-solvente" },
    { component: "Microcare SB", concentration: "1%", function: "Sistema conservante" },
    { component: "Alpha-Arbutin", concentration: "0.25%", function: "Inibicao competitiva de tirosinase" },
    { component: "Xanthan Gum", concentration: "0.25%", function: "Espessante nao-ionico" },
    { component: "Panthenol", concentration: "0.10%", function: "Hidratante, reparo de barreira" },
    { component: "Hyaluronic Acid", concentration: "0.10%", function: "Hidratacao multinivel" },
    { component: "Cyanocobalamin", concentration: "0.04%", function: "Antioxidante mitocondrial, anti-eritema" },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#fdf2f4] to-[#fce7eb]" id="niacinamida-b12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header with rose theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-[#E07390] to-[#C8529B] text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Formula Exclusiva — Registro #1200
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C2340] mb-6 text-balance">
            Serum NiacinaMax 25% + <span className="text-[#C8529B]">B12</span>
          </h2>
          <p className="text-lg text-[#0C2340]/70 max-w-3xl mx-auto text-pretty">
            Primeira formulacao do mundo com niacinamida 25% estabilizada em sistema multifuncional
            com vitamina B12, acido hialuronico e alfa-arbutin.
          </p>
        </motion.div>

        {/* Visual highlight - B12 rose color explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="bg-gradient-to-br from-[#C8529B] via-[#E07390] to-[#F4A6B8] rounded-3xl p-1">
            <div className="bg-white rounded-[22px] p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Rose visual */}
                <div className="relative">
                  <div className="aspect-square max-w-md mx-auto relative">
                    {/* Animated rose gradient circles */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-[#E07390]/30 to-[#C8529B]/30 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1.05, 1, 1.05], opacity: [0.4, 0.6, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      className="absolute inset-8 bg-gradient-to-br from-[#E07390]/40 to-[#C8529B]/40 rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute inset-16 bg-gradient-to-br from-[#E07390]/50 to-[#C8529B]/50 rounded-full"
                    />
                    <div className="absolute inset-24 bg-gradient-to-br from-[#E07390] to-[#C8529B] rounded-full flex items-center justify-center shadow-2xl shadow-[#E07390]/30">
                      <div className="text-center text-white">
                        <p className="text-5xl font-bold">B12</p>
                        <p className="text-sm opacity-80 mt-1">Cianocobalamina</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: B12 explanation */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0C2340] mb-6">
                    A cor rose e a assinatura da <span className="text-[#C8529B]">Vitamina B12</span>
                  </h3>
                  <div className="space-y-4 text-[#0C2340]/80">
                    <p>
                      A cianocobalamina (vitamina B12) confere ao serum sua caracteristica coloracao rosada natural.
                      Essa pigmentacao e um indicador visual da presenca do ativo em sua forma pura.
                    </p>
                    <p>
                      A B12 atua como scavenger de especies reativas de oxigenio (ROS) intramitocondrial,
                      protetor de DNA celular e modulador de eritema — com perfil anti-inflamatorio
                      documentado em dermatite atopica e rosacea.
                    </p>
                    <p>
                      A concentracao de 0,04% esta dentro da janela de eficacia topica (0,007–0,07%)
                      descrita na literatura, incluindo uso em protocolos pos-procedimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Four mechanisms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#0C2340] mb-10 text-center">
            Quatro Mecanismos Sinergicos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanisms.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#E07390]/20 shadow-lg shadow-[#E07390]/5 hover:shadow-xl hover:shadow-[#E07390]/10 transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="text-lg font-bold text-[#0C2340] mb-2">{item.title}</h4>
                <p className="text-sm text-[#0C2340]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Composition table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl border border-[#E07390]/20 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#E07390] to-[#C8529B] p-6">
              <div className="flex items-center gap-3">
                <FlaskConical className="w-6 h-6 text-white" />
                <h3 className="text-xl font-bold text-white">Composicao Completa</h3>
              </div>
              <p className="text-white/80 text-sm mt-1">Registro tecnico #1200 — Junho 2023</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#fdf2f4]">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-[#0C2340]">Componente (INCI)</th>
                    <th className="text-center p-4 text-sm font-semibold text-[#0C2340]">Concentracao</th>
                    <th className="text-left p-4 text-sm font-semibold text-[#0C2340]">Funcao Farmacotecnica</th>
                  </tr>
                </thead>
                <tbody>
                  {composition.map((item, i) => (
                    <tr key={item.component} className={i % 2 === 0 ? "bg-white" : "bg-[#fdf2f4]/50"}>
                      <td className="p-4 text-[#0C2340] font-medium">{item.component}</td>
                      <td className="p-4 text-center">
                        <span className="bg-[#E07390]/10 text-[#C8529B] px-3 py-1 rounded-full text-sm font-semibold">
                          {item.concentration}
                        </span>
                      </td>
                      <td className="p-4 text-[#0C2340]/70 text-sm">{item.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-[#fdf2f4] border-t border-[#E07390]/10">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#E07390] rounded-full" />
                  <span className="text-[#0C2340]/70">pH final: 5,5–6,5</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C8529B] rounded-full" />
                  <span className="text-[#0C2340]/70">Forma: Serum aquoso gelificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#9B4D96] rounded-full" />
                  <span className="text-[#0C2340]/70">Coloracao: Rosada (B12)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why 25%? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#0C2340] to-[#0a1c33] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Por que 25% e nao 5%?
                </h3>
                <div className="space-y-4 text-white/80">
                  <p>
                    A maioria dos estudos clinicos utiliza niacinamida entre 2% e 5%. No entanto,
                    a relacao dose-resposta e dose-dependente e nao apresenta plato clinico ate pelo menos 10%.
                  </p>
                  <p>
                    O CIR (Cosmetic Ingredient Review, 2005) avaliou a seguranca da niacinamida e concluiu
                    que e segura como usada em cosmeticos. Testes HRIPT com cremes de niacinamida a 20%
                    nao demonstraram sensibilizacao.
                  </p>
                  <p>
                    A formulacao a 25% foi submetida a estudo de citotoxicidade em cultura de queratinocitos
                    e fibroblastos humanos, demonstrando ausencia de efeito citotoxico na diluicao de uso.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#E07390] to-[#C8529B]">
                    5x
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-white/60 text-sm">acima da concentracao padrao</span>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-3 bg-white/10 rounded-2xl p-4">
                  <FileCheck className="w-8 h-8 text-[#3DAA8D]" />
                  <div>
                    <p className="font-semibold">Estudo de Citotoxicidade</p>
                    <p className="text-sm text-white/60">Validado em queratinocitos e fibroblastos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Uniqueness statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#E07390]/10 via-[#C8529B]/10 to-[#E07390]/10 rounded-3xl p-8 md:p-12 border border-[#E07390]/20">
            <h3 className="text-xl md:text-2xl font-bold text-[#0C2340] mb-4">
              Formulacao Inedita no Mercado
            </h3>
            <p className="text-[#0C2340]/70 max-w-3xl mx-auto mb-8">
              Nenhuma formulacao registrada em bases de dados publicas (ANVISA, FDA, COSMILE, Mintel GNPD)
              ate junho de 2023 associa, em um unico serum aquoso topico: niacinamida a 25%, vitamina B12,
              acido hialuronico e alfa-arbutin.
            </p>
            <Link
              href="/contato?assunto=NiacinaMax25"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E07390] to-[#C8529B] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-[#E07390]/30 transition-all"
            >
              Solicitar Informacoes Tecnicas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
