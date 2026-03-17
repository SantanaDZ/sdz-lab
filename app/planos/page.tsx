"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Loader2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    id: "basico",
    name: "Básico",
    tagline: "RECOMENDADO",
    description: "Para quem quer começar com o pé direito online.",
    setup: "R$ 197",
    monthly: "R$ 59/mês",
    features: [
      "Site com até 20 produtos",
      "Integração com WhatsApp",
      "Design responsivo (mobile)",
      "Domínio .com.br incluído",
      "Hospedagem incluída",
      "1 atualização de produtos/mês",
    ],
    highlighted: true,
    badge: "⭐ Recomendado",
  },
  {
    id: "profissional",
    name: "Profissional",
    tagline: "MAIS COMPLETO",
    description: "Para quem quer mais alcance e recursos avançados.",
    setup: "R$ 397",
    monthly: "R$ 119/mês",
    features: [
      "Site com até 50 produtos",
      "Filtros por categoria de produto",
      "Google Ads ready",
      "3 atualizações de produtos/mês",
      "Relatório mensal de acessos",
      "Suporte via WhatsApp",
    ],
    highlighted: false,
    badge: "Mais Completo",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "MÁXIMA ESCALA",
    description: "Para quem quer crescer com automação e escala total.",
    setup: "R$ 697",
    monthly: "R$ 197/mês",
    features: [
      "Produtos ilimitados",
      "Automação de atendimento",
      "Feed do Instagram integrado",
      "Google Ads configurado",
      "Atualizações ilimitadas",
      "Suporte prioritário",
    ],
    highlighted: false,
    badge: undefined as string | undefined,
  },
]

export default function PlanosPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  async function handleComprar(planId: string) {
    setLoadingId(planId)
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      })
      const data = await res.json()
      if (data.init_point) {
        window.location.href = data.init_point
      } else {
        alert("Erro ao iniciar pagamento. Tente novamente.")
      }
    } catch {
      alert("Erro ao iniciar pagamento. Tente novamente.")
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          Voltar ao início
        </Link>

        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Planos
          </span>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
            Escolha o plano ideal para o seu negócio
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Pagamento seguro via Mercado Pago. Cartão, PIX ou boleto.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-xl shadow-primary/10 scale-[1.02]"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="font-serif text-xl font-bold text-card-foreground">
                  {plan.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                  Setup único
                </p>
                <span className="text-3xl font-bold text-foreground">
                  {plan.setup}
                </span>
                <div className="mt-1 text-sm text-primary font-medium">
                  + {plan.monthly}
                </div>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div
                      className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted ? "bg-primary/20" : "bg-primary/10"
                      }`}
                    >
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="text-sm text-card-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleComprar(plan.id)}
                disabled={loadingId !== null}
                className={`w-full py-5 font-semibold rounded-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {loadingId === plan.id ? (
                  <>
                    <Loader2 className="size-4 animate-spin mr-2" />
                    Aguarde...
                  </>
                ) : (
                  "Comprar agora"
                )}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          Pagamento processado com segurança pelo{" "}
          <span className="font-semibold text-primary">Mercado Pago</span>.
          Seus dados estão protegidos.
        </p>
      </div>
    </main>
  )
}
