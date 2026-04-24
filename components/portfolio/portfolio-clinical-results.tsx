"use client"

import Image from "next/image"
import { TrendingUp, Award, Users, BarChart3 } from "lucide-react"

const results = [
  { label: "Pigmentacao Marrom", value: 30.5, color: "#D85A30" },
  { label: "Textura", value: 21.1, color: "#1D9E75" },
  { label: "Manchas UV", value: 19.9, color: "#378ADD" },
  { label: "Clareamento Geral", value: 15.3, color: "#BA7517" },
]

const parameters = [
  { param: "Poros", value: "14,2%" },
  { param: "Rugas", value: "5,3%" },
  { param: "Area Vermelha", value: "12,3%" },
  { param: "Porfirinas", value: "modulacao" },
]

export function PortfolioClinicalResults() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a1628] via-[#0C2340] to-[#0a1628] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0096B4]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#d4af37] mb-6">
            <BarChart3 className="h-4 w-4" />
            Estudo Clinico Visia
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] text-balance">
            Resultados comprovados em{" "}
            <em className="text-[#0096B4]">avaliacao multiparametrica</em>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70 leading-relaxed">
            Serie de casos clinicos com avaliacao Visia em 4 pacientes, demonstrando melhora
            expressiva em todos os parametros analisados apos aplicacao unica do peeling azelaico em pasta.
          </p>
        </div>

        {/* Main results grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {results.map((result) => (
            <div
              key={result.label}
              className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center group hover:border-white/20 transition-all"
            >
              <div className="text-sm text-white/60 mb-2">{result.label}</div>
              <div
                className="text-5xl font-bold"
                style={{ color: result.color }}
              >
                {result.value}%
              </div>
              <div className="mt-2 text-xs text-white/50">melhora media</div>
              {/* Bar indicator */}
              <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${(result.value / 35) * 100}%`,
                    backgroundColor: result.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Clinical images showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Visia analysis image - Patient evaluation */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4780.png-vLKnEJL8hahtIiQsfn0IrZXwnMjXav.jpeg"
              alt="Avaliacao clinica Visia - Paciente #002 mostrando 8 parametros de analise facial antes e depois do tratamento"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium mb-2">
                <Award className="h-4 w-4" />
                Evolucao Clinica — Paciente #002
              </div>
              <p className="text-white/80 text-sm">
                Avaliacao Final: 8 parametros Visia mostrando melhora em manchas, textura, poros e uniformizacao do tom
              </p>
            </div>
          </div>

          {/* Second patient / monitor view */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9551-QMS8v6ndCtnPiVsc6OMsFtLjaq7IPN.jpeg"
              alt="Monitor de analise Visia em ambiente clinico mostrando avaliacao multiparametrica do paciente"
              width={800}
              height={1000}
              className="w-full h-[400px] object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 text-[#0096B4] text-sm font-medium mb-2">
                <TrendingUp className="h-4 w-4" />
                Sistema de Avaliacao Digital
              </div>
              <p className="text-white/80 text-sm">
                Tecnologia Visia de alta precisao para documentacao objetiva da evolucao clinica
              </p>
            </div>
          </div>
        </div>

        {/* Results presentation images */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Stage presentation - Results */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5440-kapz3lau48NJq7I5ohRPe2zmObl0xj.jpeg"
              alt="Prof. Samir Tannuri apresentando resultados consolidados do estudo no Clinic Day"
              width={800}
              height={500}
              className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-[#d4af37] font-medium mb-1">Clinic Day 2024</div>
              <div className="text-white font-medium text-sm">Apresentacao dos resultados consolidados</div>
            </div>
          </div>

          {/* Intermediate evaluation */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5200-KALUyFn9kvI3uzuAYUiOyo0qtqTMgm.jpeg"
              alt="Avaliacao intermediaria Visia em notebook mostrando evolucao clinica do paciente"
              width={800}
              height={1000}
              className="w-full h-[280px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-[#0096B4] font-medium mb-1">Avaliacao Intermediaria</div>
              <div className="text-white font-medium text-sm">Monitoramento continuo T0 → T1 → T2</div>
            </div>
          </div>

          {/* Initial evaluation */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4776-aJ6dpVlmUSYdprPFJb7N1Svq97LBCG.png"
              alt="Avaliacao inicial Visia - Paciente #002 com 8 parametros de analise baseline"
              width={1200}
              height={600}
              className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-white/60 font-medium mb-1">Avaliacao Inicial (T0)</div>
              <div className="text-white font-medium text-sm">Baseline para comparacao de eficacia</div>
            </div>
          </div>
        </div>

        {/* Secondary parameters */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-5 w-5 text-[#0096B4]" />
            <h3 className="text-lg font-semibold text-white">Parametros Secundarios</h3>
            <span className="text-sm text-white/50">(n=4 pacientes)</span>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {parameters.map((p) => (
              <div key={p.param} className="text-center">
                <div className="text-2xl font-bold text-white/90">{p.value}</div>
                <div className="text-sm text-white/50 mt-1">{p.param}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-white/60 leading-relaxed">
              <strong className="text-white/80">Formula de eficacia:</strong> % melhora = (T2 − T0) / (100 − T0) × 100. 
              Seguimento de 15 dias apos aplicacao unica. Avaliacao por sistema Visia (Canfield Scientific).
              Ausencia de hiperpigmentacao pos-inflamatoria em todos os casos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
