"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { track } from "@vercel/analytics"
import { Bot, Send } from "lucide-react"

type Message = {
  id: string
  from: "bot" | "user"
  text: string
}

const botResponses: Record<string, string> = {
  "Vocês fazem chatbot para WhatsApp?":
    "Sim! O chatbot é treinado com as informações da sua empresa, atende 24h com IA, tem menus e transfere para um humano quando precisa.",
  "Quais serviços vocês oferecem?":
    "Três frentes: Tecnologia (sites, e-commerce, automações), Infraestrutura de IA (chatbots, sistemas sob medida, integrações, dashboards) e Design & Marketing (identidade visual, criativos, redes sociais e anúncios).",
  "Como faço um orçamento?":
    "É só chamar no WhatsApp pelo botão verde aqui da página. O orçamento é grátis e sem compromisso.",
}

const quickReplies = Object.keys(botResponses)

const initialMessages: Message[] = [
  {
    id: "1",
    from: "bot",
    text: "Olá! 👋 Sou um exemplo do assistente que a SDZLab cria para empresas. Pode perguntar!",
  },
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-1.5 rounded-full bg-muted-foreground animate-bounce-dot"
          style={{ animationDelay: `${i * 0.16}s` }}
        />
      ))}
    </div>
  )
}

export function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [visibleQuickReplies, setVisibleQuickReplies] = useState(quickReplies)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isTyping])

  const sendMessage = useCallback(
    (text: string, isQuickReply = false) => {
      if (isTyping) return

      setMessages((prev) => [...prev, { id: Date.now().toString(), from: "user", text }])
      setInput("")
      setIsTyping(true)
      setVisibleQuickReplies((prev) => prev.filter((q) => q !== text))
      track("chatbot_message_sent", { trigger: isQuickReply ? "quick_reply" : "manual" })

      const responseText =
        botResponses[text] ||
        "Boa pergunta! No atendimento real, eu responderia com as informações da sua empresa — ou passaria a conversa para um humano. Chama a gente no WhatsApp para ver isso funcionando no seu negócio."

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), from: "bot", text: responseText },
        ])
        setIsTyping(false)
      }, 1100)
    },
    [isTyping]
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage(input.trim())
  }

  return (
    <section className="px-6 pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow text-ai">Demonstração</p>
          <h2 className="mt-5 font-serif text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl">
            Veja um atendimento com IA na prática.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Converse com o assistente ao lado. É assim que seus clientes seriam
            atendidos no WhatsApp — a qualquer hora.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/30">
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-ai/15">
              <Bot className="size-5 text-ai" />
            </div>
            <div>
              <p className="font-serif text-sm font-semibold">Assistente SDZLab</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-ai" />
                Online agora
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex h-[360px] flex-col gap-3 overflow-y-auto p-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex animate-fade-in-up ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "rounded-br-md bg-ai text-background"
                      : "rounded-bl-md bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex animate-fade-in-up justify-start">
                <div className="rounded-2xl rounded-bl-md bg-secondary">
                  <TypingIndicator />
                </div>
              </div>
            )}
          </div>

          {visibleQuickReplies.length > 0 && !isTyping && (
            <div className="flex flex-wrap gap-2 px-5 pb-4">
              {visibleQuickReplies.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply, true)}
                  className="rounded-full border border-input px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-ai/60 hover:text-ai"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex items-center gap-3 border-t border-border p-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-full border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ai/60"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex size-10 items-center justify-center rounded-full bg-ai text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Enviar mensagem"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
