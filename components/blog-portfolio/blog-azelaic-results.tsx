"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Microscope, BarChart3, Users, Calendar } from "lucide-react"

export function BlogAzelaicResults() {
  const improvements = [
    { param: "Pigmentacao marrom", value: 30.5, color: "#E07350" },
    { param: "Textura", value: 21.1, color: "#3DAA8D" },
    { param: "Manchas UV", value: 19.9, color: "#3B82F6" },
    { param: "Clareamento geral", value: 15.3, color: "#C8963E" },
    { param: "Poros", value: 14.2, color: "#0096B4" },
    { param: "Area vermelha", value: 12.3, color: "#E07390" },
    { param: "Rugas", value: 5.3, color: "#9CA3AF" },
  ]

  return (
    <section className="py-24 bg-white" id="peeling-azelaico">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E07350]/10 text-[#E07350] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Estudo Clinico Documentado
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C2340] mb-6 text-balance">
            Peeling Azelaico em Pasta
          </h2>
          <p className="text-lg text-[#0C2340]/70 max-w-3xl mx-auto text-pretty">
            Primeiro peeling azelaico em pasta do mundo. Resultados mensurados por analise
            Visia em protocolo prospectivo com 15 dias de acompanhamento.
          </p>
        </motion.div>

        {/* Study methodology cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Users, label: "Pacientes", value: "n=4", desc: "Serie de casos" },
            { icon: Calendar, label: "Duracao", value: "15 dias", desc: "T0, T1, T2" },
            { icon: Microscope, label: "Analise", value: "Visia", desc: "8 parametros" },
            { icon: BarChart3, label: "Resultado", value: "100%", desc: "Melhora geral" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f8f9fa] rounded-2xl p-5 text-center"
            >
              <div className="w-12 h-12 bg-[#0C2340]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-[#0C2340]" />
              </div>
              <p className="text-2xl font-bold text-[#0C2340]">{item.value}</p>
              <p className="text-sm text-[#0C2340]/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Main results grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Animated bar chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0C2340] to-[#0a1c33] rounded-3xl p-8 text-white"
          >
            <h3 className="text-xl font-bold mb-2">Ranking de Melhora</h3>
            <p className="text-white/60 text-sm mb-8">Todos os parametros Visia</p>
            
            <div className="space-y-5">
              {improvements.map((item, i) => (
                <motion.div
                  key={item.param}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/80">{item.param}</span>
                    <span className="text-lg font-bold" style={{ color: item.color }}>
                      {item.value}%
                    </span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.value / 35) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Consolidated results chart image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="bg-white rounded-3xl border border-[#0C2340]/10 shadow-lg overflow-hidden flex-1">
              <div className="p-6 border-b border-[#0C2340]/10">
                <h3 className="text-xl font-bold text-[#0C2340]">Resultados Consolidados</h3>
                <p className="text-[#0C2340]/60 text-sm">Peeling Azelaico em Pasta (n=4, Visia)</p>
              </div>
              <div className="p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFICO_01_RESULTADOS_CONSOLIDADOS-76ZSZC0ERrmI52DwlGwkuDsEWNfB0S.png"
                  alt="Grafico de resultados consolidados mostrando melhora em pigmentacao marrom 30.5%, textura 21.1%, manchas UV 19.9% e clareamento geral 15.3%"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Patient evolution section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0C2340] mb-3">
              Evolucao Individual por Paciente
            </h3>
            <p className="text-[#0C2340]/60">
              Comparativo T0 (basal) vs T2 (dia 15) — pigmentacao marrom
            </p>
          </div>

          <div className="bg-[#f8f9fa] rounded-3xl p-6 md:p-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFICO_02_MANCHA_MARROM_PACIENTES-TEMFpCxvZE0omkY6VZWxoNxVRsymo8.png"
              alt="Evolucao da pigmentacao marrom por paciente: P#001 de 78 para 81 (+3), P#002 de 45 para 69 (+24), P#003 de 67 para 75 (+8), P#004 de 92 para 93 (+1)"
              width={1200}
              height={600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.div>

        {/* Multi-parameter evolution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Radar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-[#0C2340]/10 shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-[#0C2340]/10">
              <h3 className="text-xl font-bold text-[#0C2340]">Perfil Visia — T0 vs T2</h3>
              <p className="text-[#0C2340]/60 text-sm">Comparativo radar das medias do grupo</p>
            </div>
            <div className="p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFICO_04_RADAR_T0_vs_T2-dCaIaBGW8Tcn2EMzW9Ku7rJXqoDe92.png"
                alt="Grafico radar comparando T0 basal vs T2 dia 15 em textura, pigmentacao marrom, clareamento geral e manchas UV"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* 8 parameters evolution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl border border-[#0C2340]/10 shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-[#0C2340]/10">
              <h3 className="text-xl font-bold text-[#0C2340]">Evolucao Multiparametrica</h3>
              <p className="text-[#0C2340]/60 text-sm">Medias do grupo em 8 parametros (T0, T1, T2)</p>
            </div>
            <div className="p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFICO_03_EVOLUCAO_GRUPO_8PARAMS-9sxsIrgBvPenYQWgCEHbbgpj9vr7ZW.png"
                alt="Evolucao multiparametrica do grupo em manchas, rugas, textura, poros, manchas UV, mancha marrom, area vermelha e porfirinas"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Full ranking chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#0C2340] to-[#0a1c33] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ranking Completo de Melhora
              </h3>
              <p className="text-white/60">
                Todos os parametros Visia ordenados por percentual de melhora
              </p>
            </div>
            <div className="bg-white rounded-2xl p-4 md:p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRAFICO_05_RANKING_MELHORA-3aAaBZEEBR5JQK3E2G3weJCdGuas4H.png"
                alt="Ranking de melhora em todos os parametros Visia: Mancha marrom 30.5%, Textura 21.1%, Manchas UV 19.9%, Clareamento 15.3%, Poros 14.2%, Area vermelha 12.3%, Rugas 5.3%"
                width={1400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Key findings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-[#0C2340] mb-8 text-center">
            Principais Achados do Estudo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Melhora em 100% dos parametros analisados",
              "Maior resultado em pigmentacao marrom (30,5%)",
              "Sem hiperpigmentacao pos-inflamatoria",
              "Textura com 21,1% de melhora media",
              "Reducao significativa em manchas UV (19,9%)",
              "Tolerabilidade adequada em todos os casos",
            ].map((finding, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#3DAA8D] flex-shrink-0 mt-0.5" />
                <p className="text-[#0C2340]/80">{finding}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
