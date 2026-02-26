"use client"

import { Globe, MessageSquareText, Zap, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

const mainService = {
  icon: Globe,
  title: "Site Profissional",
  badge: "Produto Principal",
  description:
    "Criamos seu site do zero — moderno, rápido e responsivo. Cada projeto é desenvolvido sob medida com integração nativa ao WhatsApp e e-mail, para que seus clientes te encontrem e entrem em contato com facilidade.",
  features: [
    "Design moderno e responsivo (mobile + desktop)",
    "Integração nativa com WhatsApp",
    "Formulário de contato por e-mail",
    "Otimizado para aparecer no Google (SEO)",
    "Entrega rápida e sem burocracia",
  ],
}

const additionalServices = [
  {
    icon: MessageSquareText,
    title: "Chatbot Inteligente",
    label: "Upsell",
    description:
      "Atendimento automatizado no seu site ou WhatsApp. Responde dúvidas, capta leads e qualifica clientes — 24h por dia, sem precisar de equipe.",
  },
  {
    icon: Zap,
    title: "Automação no WhatsApp",
    label: "Upsell",
    description:
      "Fluxos de mensagens, follow-up automático e respostas programadas. Seu WhatsApp trabalha por você mesmo quando você está ocupado.",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    label: "Upsell",
    description:
      "Campanhas, captação de leads e tráfego pago para seu site decolar. Mais visitantes, mais contatos, mais vendas.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Soluções
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            O que a SDZ oferece
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            O site profissional é a base de tudo. Os demais serviços são adicionados conforme
            o interesse e o orçamento de cada cliente.
          </p>
        </div>

        {/* Main service - featured */}
        <div className="mb-8 group relative rounded-2xl border border-primary/40 bg-card p-8 md:p-10 transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/15">
                  <mainService.icon className="size-7 text-primary" />
                </div>
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {mainService.badge}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-card-foreground">
                {mainService.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                {mainService.description}
              </p>
            </div>
            <ul className="flex flex-col gap-3 md:min-w-64">
              {mainService.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="size-4 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional services */}
        <div className="grid gap-6 md:grid-cols-3">
          {additionalServices.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <service.icon className="size-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {service.label}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm text-pretty">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Saiba mais</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
