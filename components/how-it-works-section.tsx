"use client"

import { MessageSquare, Laptop, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Conte sobre o seu negócio",
    description:
      "Conversamos sobre seus objetivos, público-alvo, referências e o que você precisa. Sem formulários complicados — só uma conversa.",
  },
  {
    icon: Laptop,
    step: "02",
    title: "A SDZ cria tudo para você",
    description:
      "Desenvolvemos seu site moderno do zero, com integração nativa ao WhatsApp e e-mail. Você acompanha, aprova e a gente ajusta.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Você vai ao ar e cresce",
    description:
      "Site no ar, leads chegando, atendimento organizado. E conforme seu negócio cresce, você pode adicionar chatbot, automações e marketing.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Processo
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Como a SDZ trabalha
          </h2>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute top-[4.5rem] left-[16.67%] right-[16.67%] hidden h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 md:block" />

          {steps.map((step) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex size-20 items-center justify-center rounded-2xl border-2 border-primary/30 bg-card">
                  <step.icon className="size-9 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {step.step}
                </div>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
