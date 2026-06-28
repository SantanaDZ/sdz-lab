"use client"

import { useState, FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle2, ArrowLeft } from "lucide-react"

const SERVICOS = [
  "Landing Page",
  "Site completo",
  "Loja virtual",
  "Integração WhatsApp",
  "Chatbot inteligente",
  "Automações com IA",
]

export default function OrcamentoPage() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    servicos: [] as string[],
    descricao: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const formatWhatsApp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11)
    if (d.length <= 2) return `(${d}`
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
  }

  const toggleServico = (s: string) =>
    setForm((f) => ({
      ...f,
      servicos: f.servicos.includes(s) ? f.servicos.filter((x) => x !== s) : [...f.servicos, s],
    }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL!
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">SDZ</span>
            <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">|</span>
            <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">
              Sites & Automação Digital
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            100% gratuito e sem compromisso
          </span>
          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Solicite seu orçamento
          </h1>
          <p className="mt-3 text-muted-foreground text-pretty">
            Preencha o formulário e entraremos em contato em até 24 horas com uma proposta personalizada.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle2 className="size-14 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">Orçamento recebido!</h2>
              <p className="text-muted-foreground max-w-sm text-pretty">
                Obrigado! Analisaremos seu pedido e entraremos em contato em breve pelo WhatsApp ou
                e-mail informado.
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  className="mt-4 rounded-full border-primary/40 text-primary hover:bg-primary/10"
                >
                  Voltar para o site
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="nome">
                  Nome completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nome"
                  required
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="whatsapp">
                  WhatsApp <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="whatsapp"
                  required
                  placeholder="(XX) XXXXX-XXXX"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, whatsapp: formatWhatsApp(e.target.value) }))
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>

              <div className="flex flex-col gap-3">
                <Label>
                  O que você precisa? <span className="text-destructive">*</span>
                </Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {SERVICOS.map((s) => (
                    <label
                      key={s}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <Checkbox
                        id={s}
                        checked={form.servicos.includes(s)}
                        onCheckedChange={() => toggleServico(s)}
                      />
                      <span className="text-sm text-foreground">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="descricao">
                  Conte um pouco sobre seu negócio{" "}
                  <span className="text-xs font-normal text-muted-foreground">(opcional)</span>
                </Label>
                <Textarea
                  id="descricao"
                  rows={4}
                  placeholder="Ex: tenho uma clínica odontológica e quero atrair mais pacientes pela internet..."
                  value={form.descricao}
                  onChange={(e) => setForm((f) => ({ ...f, descricao: e.target.value }))}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive">
                  Não foi possível enviar o formulário. Tente novamente ou entre em contato pelo
                  WhatsApp.
                </p>
              )}

              <Button
                type="submit"
                disabled={status === "loading" || form.servicos.length === 0}
                className="w-full rounded-full bg-primary py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Solicitar orçamento grátis"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Seus dados estão seguros. Não enviamos spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
