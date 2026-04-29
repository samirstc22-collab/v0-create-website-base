"use client"

import { useState, useEffect, useRef } from "react"
import { Send, Bot, User, Sparkles, Beaker, FlaskConical, CheckCircle2 } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  message: string
  highlights?: string[]
}

const conversations: Message[][] = [
  [
    {
      role: "user",
      message: "Qual o melhor veiculo para vitamina C 15%?",
    },
    {
      role: "assistant",
      message:
        "Para vitamina C 15% (acido ascorbico), recomendo um serum aquoso com pH entre 2.5-3.5 para maxima estabilidade e penetracao. Use propilenoglicol (5-10%) para solubilizacao e adicione acido ferulico (0.5%) para sinergismo antioxidante. Evite emulsoes cremosas que aceleram a oxidacao.",
      highlights: ["pH 2.5-3.5", "Propilenoglicol 5-10%", "Acido ferulico 0.5%"],
    },
    {
      role: "user",
      message: "Posso associar com niacinamida?",
    },
    {
      role: "assistant",
      message:
        "Sim, mas com cuidado tecnico. Para uso topico: 1) Mantenha pH abaixo de 3.5 para a vitamina C, 2) Use niacinamida a 4-5% (nao mais), 3) Adicione antioxidantes secundarios. A formacao de nicotinamida adenina e mais relevante em altas temperaturas — em formulacoes magistrais bem feitas, a associacao funciona excelentemente.",
      highlights: ["Niacinamida 4-5%", "Estabilidade termica", "Antioxidantes"],
    },
  ],
  [
    {
      role: "user",
      message: "Como formular um peeling para hiperpigmentacao pos-inflamatoria?",
    },
    {
      role: "assistant",
      message:
        "Para PIH, recomendo combinar acido azelaico 15% + acido tranexamico 5% + niacinamida 4% em base creme com pH 4.5-5.0. Aplicar 3x por semana inicialmente. O acido azelaico inibe tirosinase, o tranexamico bloqueia ativacao melanocitaria e a niacinamida reduz transferencia de melanossomos.",
      highlights: ["Azelaico 15%", "Tranexamico 5%", "pH 4.5-5.0"],
    },
  ],
]

export function IADemo() {
  const [conversationIdx, setConversationIdx] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const currentConversation = conversations[conversationIdx]

  useEffect(() => {
    const totalMessages = currentConversation.length

    if (visibleMessages >= totalMessages) {
      // Reset apos terminar
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0)
        setTypedText("")
        setConversationIdx((prev) => (prev + 1) % conversations.length)
      }, 4000)
      return () => clearTimeout(resetTimer)
    }

    const currentMsg = currentConversation[visibleMessages]
    const isAssistant = currentMsg.role === "assistant"
    const delay = isAssistant ? 1500 : 1000

    const timer = setTimeout(() => {
      if (isAssistant) {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          // Efeito de digitacao para a resposta
          let i = 0
          const fullText = currentMsg.message
          const typeInterval = setInterval(() => {
            if (i < fullText.length) {
              setTypedText(fullText.substring(0, i + 1))
              i += 3
            } else {
              setTypedText(fullText)
              clearInterval(typeInterval)
              setVisibleMessages((prev) => prev + 1)
              setTypedText("")
            }
          }, 20)
        }, 1200)
      } else {
        setVisibleMessages((prev) => prev + 1)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [visibleMessages, conversationIdx, currentConversation])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [visibleMessages, typedText, isTyping])

  return (
    <section
      id="demo"
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#f5f8fb] to-white overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-20 left-[5%] w-72 h-72 bg-[#0db5c8]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-[#B8783D]/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0db5c8]/10 border border-[#0db5c8]/30 text-[#0db5c8] text-[11px] font-bold uppercase tracking-[2.5px] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Demonstracao Ao Vivo
          </span>
          <h2 className="font-serif text-[clamp(36px,5vw,56px)] text-[#0C2340] tracking-[-1.5px] leading-[1.05] mb-4">
            Veja a IA <em className="italic text-[#0db5c8]">conversando</em> em tempo real
          </h2>
          <p className="text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Respostas tecnicas precisas, fundamentadas em literatura cientifica e na experiencia pratica de bancada.
          </p>
        </div>

        {/* Chat demo */}
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(12,35,64,0.18)] border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0C2340] via-[#1a3a5f] to-[#0C2340] px-6 py-5 flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center shadow-[0_0_20px_rgba(13,181,200,0.5)]">
                <Bot className="w-6 h-6 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0C2340]" />
              </div>
              <div className="flex-1">
                <div className="text-white font-bold text-[15px] flex items-center gap-2">
                  IA Lab Formulador
                  <span className="px-2 py-0.5 rounded-full bg-[#5eead4]/20 text-[#5eead4] text-[9px] font-bold uppercase tracking-[1.5px]">
                    Beta
                  </span>
                </div>
                <div className="text-white/60 text-[12px] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online · Treinada por Samir Tannuri
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-5 min-h-[480px] max-h-[480px] overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white">
              {/* Mensagem inicial do bot */}
              <div className="flex gap-3 animate-fade-in-up">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0 shadow-md">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-to-br from-[#0db5c8]/10 to-[#5eead4]/10 border border-[#0db5c8]/20 text-gray-700 rounded-2xl rounded-tl-sm px-5 py-3.5 max-w-[80%]">
                  <p className="text-[14px] leading-relaxed font-medium">
                    Ola! Sou a IA Lab. Posso te ajudar com formulas, ativos, incompatibilidades e protocolos. Como posso te ajudar hoje?
                  </p>
                </div>
              </div>

              {currentConversation.slice(0, visibleMessages).map((msg, i) => (
                <div
                  key={`${conversationIdx}-${i}`}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3.5 ${
                      msg.role === "user"
                        ? "bg-[#0C2340] text-white rounded-tr-sm shadow-md"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-sm"
                    }`}
                  >
                    <p className="text-[14px] leading-relaxed">{msg.message}</p>
                    {msg.highlights && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-100">
                        {msg.highlights.map((h, j) => (
                          <span
                            key={j}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0db5c8]/10 text-[#0db5c8] text-[11px] font-bold"
                          >
                            <Beaker className="w-3 h-3" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-9 h-9 rounded-full bg-[#B8783D] flex items-center justify-center flex-shrink-0 shadow-md">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {/* Resposta sendo digitada */}
              {typedText && (
                <div className="flex gap-3 animate-fade-in-up">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white text-gray-700 rounded-2xl rounded-tl-sm px-5 py-3.5 border border-gray-100 shadow-sm max-w-[80%]">
                    <p className="text-[14px] leading-relaxed">
                      {typedText}
                      <span className="inline-block w-1 h-4 bg-[#0db5c8] ml-1 animate-pulse" />
                    </p>
                  </div>
                </div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-fade-in-up">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-5 py-3.5 border border-gray-100 shadow-sm">
                    <div className="flex gap-1.5 items-center">
                      <span
                        className="w-2 h-2 rounded-full bg-[#0db5c8] animate-bounce"
                        style={{ animationDelay: "0s" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-[#0db5c8] animate-bounce"
                        style={{ animationDelay: "0.15s" }}
                      />
                      <span
                        className="w-2 h-2 rounded-full bg-[#0db5c8] animate-bounce"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <span className="text-[11px] text-gray-400 ml-2 font-medium">
                        IA pensando...
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-4 py-3 opacity-60">
                <FlaskConical className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pergunte sobre ativos, formulas, protocolos..."
                  className="flex-1 bg-transparent outline-none text-gray-500 text-[13px]"
                  disabled
                />
                <button
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0db5c8] to-[#5eead4] flex items-center justify-center"
                  disabled
                  aria-label="Enviar"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                <p className="text-center text-[11px] text-gray-500 font-semibold">
                  Disponivel em breve · Entre na lista de espera para acesso antecipado
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0db5c8]/15 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B8783D]/15 rounded-full blur-2xl" />
        </div>

        {/* Indicador de conversa */}
        <div className="flex justify-center gap-2 mt-8">
          {conversations.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === conversationIdx ? "w-8 bg-[#0db5c8]" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
