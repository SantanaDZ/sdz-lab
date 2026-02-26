"use client"

import { useRef } from "react"
import { EyeOff, TrendingDown, Clock } from "lucide-react"

const painPoints = [
  {
    icon: EyeOff,
    title: "Seu negócio é invisível online",
    description:
      "Clientes buscam por você no Google, nas redes, no WhatsApp — e encontram o concorrente. Sem um site profissional, você fica de fora.",
  },
  {
    icon: TrendingDown,
    title: "Site amador afasta clientes",
    description:
      "Um site desatualizado, lento ou sem aparência profissional passa insegurança. O cliente fecha a aba e vai embora antes mesmo de entrar em contato.",
  },
  {
    icon: Clock,
    title: "Atendimento manual não escala",
    description:
      "Responder cliente por cliente no WhatsApp, perder mensagens, deixar leads sem resposta — tudo isso custa vendas todos os dias.",
  },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Sua empresa merece uma presença digital à altura do que você entrega
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary/10">
                <point.icon className="size-7 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-card-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center">
          <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary/50 to-primary" />
          <div className="mt-4 rounded-full border border-primary/30 bg-primary/10 px-8 py-3">
            <p className="font-serif text-lg font-bold text-primary sm:text-xl">
              A SDZ resolve isso por você.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
