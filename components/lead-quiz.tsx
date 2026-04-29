"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building2, FlaskConical, GraduationCap } from "lucide-react"

type QuizStep = {
  question: string
  options: {
    label: string
    value: string
    icon: React.ElementType
  }[]
}

const quizSteps: QuizStep[] = [
  {
    question: "Qual e o seu perfil?",
    options: [
      { label: "Farmacia magistral", value: "magistral", icon: FlaskConical },
      { label: "Industria cosmetica", value: "industria", icon: Building2 },
      { label: "Profissional de saude", value: "prescritor", icon: GraduationCap },
    ],
  },
  {
    question: "Qual sua maior necessidade agora?",
    options: [
      { label: "Diferenciar meu portfolio", value: "diferenciacao", icon: Sparkles },
      { label: "Desenvolver produto novo", value: "desenvolvimento", icon: FlaskConical },
      { label: "Capacitar minha equipe", value: "capacitacao", icon: GraduationCap },
    ],
  },
  {
    question: "Qual seu prazo para comecar?",
    options: [
      { label: "Agora, e urgente", value: "urgente", icon: ArrowRight },
      { label: "Proximo mes", value: "breve", icon: CheckCircle2 },
      { label: "Estou pesquisando", value: "pesquisa", icon: Building2 },
    ],
  },
]

export function LeadQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value })

    if (currentStep < quizSteps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300)
    } else {
      setTimeout(() => setShowForm(true), 300)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio da API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Lead qualificado:", { ...formData, ...answers })
    setIsSuccess(true)
  }

  const progress = ((currentStep + 1) / (quizSteps.length + 1)) * 100

  if (isSuccess) {
    return (
      <section className="py-20 bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0C2340] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
          </div>
          <h3 className="font-serif text-[32px] text-white mb-4">Perfeito! Recebemos suas respostas</h3>
          <p className="text-white/70 text-[18px] mb-8">
            Em ate 24 horas, um especialista entrara em contato com uma proposta personalizada para suas necessidades.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-[14px]">
            <Sparkles className="w-4 h-4 text-[#B8783D]" />
            Fique de olho no seu WhatsApp
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0C2340] via-[#1a3a5c] to-[#0C2340] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B8783D]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#0db5c8]/10 rounded-full blur-[80px]" />

      <div className="max-w-[700px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8783D]/15 border border-[#B8783D]/30 text-[12px] font-bold uppercase tracking-[2px] text-[#d4a574] mb-6">
            <Sparkles className="w-4 h-4" />
            Descubra a solucao ideal
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] text-white leading-[1.1] mb-4">
            {showForm ? "Finalize seu cadastro" : "Responda 3 perguntas rapidas"}
          </h2>
          <p className="text-white/70 text-[17px]">
            {showForm
              ? "Preencha seus dados para receber uma proposta personalizada"
              : "Vamos entender suas necessidades para oferecer a melhor solucao"}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-[12px] text-white/60 mb-2">
            <span>
              {showForm ? "Ultimo passo" : `Pergunta ${currentStep + 1} de ${quizSteps.length}`}
            </span>
            <span>{Math.round(showForm ? 100 : progress)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#B8783D] to-[#d4a574] rounded-full transition-all duration-500"
              style={{ width: `${showForm ? 100 : progress}%` }}
            />
          </div>
        </div>

        {showForm ? (
          /* Form final */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome completo"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8783D] focus:bg-white/15 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Seu melhor e-mail"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8783D] focus:bg-white/15 transition-all"
              />
            </div>
            <div>
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="WhatsApp (com DDD)"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#B8783D] focus:bg-white/15 transition-all"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-[2] px-6 py-4 rounded-xl bg-[#B8783D] text-white font-bold hover:bg-[#a66a32] transition-all shadow-[0_8px_24px_rgba(184,120,61,0.4)] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quero minha proposta
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[12px] text-white/50 mt-4">
              Seus dados estao protegidos. Nao enviamos spam.
            </p>
          </form>
        ) : (
          /* Quiz options */
          <div>
            <h3 className="text-[20px] text-white font-semibold mb-6 text-center">
              {quizSteps[currentStep].question}
            </h3>

            <div className="space-y-3">
              {quizSteps[currentStep].options.map((option) => {
                const Icon = option.icon
                const isSelected = answers[currentStep] === option.value

                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center gap-4 group ${
                      isSelected
                        ? "border-[#B8783D] bg-[#B8783D]/20"
                        : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-[#B8783D]" : "bg-white/10 group-hover:bg-white/20"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${isSelected ? "text-white" : "text-white/70"}`} />
                    </div>
                    <span className={`text-[17px] font-medium ${isSelected ? "text-white" : "text-white/80"}`}>
                      {option.label}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-5 h-5 text-[#B8783D] ml-auto" />
                    )}
                  </button>
                )
              })}
            </div>

            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 text-white/60 hover:text-white text-[14px] flex items-center gap-2 mx-auto transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar a pergunta anterior
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
