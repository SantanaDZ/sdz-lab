"use client"

import { useEffect, useRef } from "react"
import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, MessageCircle, Mail, CheckCircle } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 229, 196, ${p.opacity})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.offsetWidth) p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1
      })

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 229, 196, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 size-full pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  )
}

function SiteMockup() {
  return (
    <div className="animate-float relative w-full max-w-sm">
      <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/60" />
          <span className="size-3 rounded-full bg-yellow-400/60" />
          <span className="size-3 rounded-full bg-emerald-400/60" />
          <div className="ml-2 flex-1 rounded-full bg-secondary px-3 py-1">
            <p className="text-xs text-muted-foreground truncate">seusite.com.br</p>
          </div>
        </div>

        {/* Site content mockup */}
        <div className="p-5 space-y-4">
          {/* Header mockup */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-primary/40" />
            <div className="flex gap-2">
              <div className="h-2 w-10 rounded-full bg-muted-foreground/20" />
              <div className="h-2 w-10 rounded-full bg-muted-foreground/20" />
            </div>
          </div>

          {/* Hero mockup */}
          <div className="rounded-xl bg-primary/10 p-4 space-y-2">
            <div className="h-4 w-3/4 rounded-full bg-primary/50" />
            <div className="h-2.5 w-full rounded-full bg-muted-foreground/20" />
            <div className="h-2.5 w-5/6 rounded-full bg-muted-foreground/20" />
            <div className="mt-3 flex gap-2">
              <div className="h-7 w-24 rounded-full bg-primary/70" />
              <div className="h-7 w-20 rounded-full bg-secondary" />
            </div>
          </div>

          {/* Cards mockup */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-border bg-background/40 p-3 space-y-1.5">
              <div className="h-3 w-3/4 rounded-full bg-muted-foreground/30" />
              <div className="h-2 w-full rounded-full bg-muted-foreground/15" />
            </div>
            <div className="rounded-lg border border-border bg-background/40 p-3 space-y-1.5">
              <div className="h-3 w-3/4 rounded-full bg-muted-foreground/30" />
              <div className="h-2 w-full rounded-full bg-muted-foreground/15" />
            </div>
          </div>
        </div>

        {/* WhatsApp badge */}
        <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-card px-3 py-1.5 shadow-lg">
          <MessageCircle className="size-3.5 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-400">WhatsApp incluso</span>
        </div>
      </div>

      {/* Email badge */}
      <div className="absolute -top-3 -left-3 flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-3 py-1.5 shadow-lg">
        <Mail className="size-3.5 text-primary" />
        <span className="text-xs font-semibold text-primary">E-mail incluso</span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 flex items-center">
      <Particles />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <Globe className="size-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Presença digital profissional
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Seu site profissional,{" "}
            <span className="text-primary">pronto para vender</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl text-pretty mx-auto lg:mx-0">
            Criamos sites modernos do zero, com integração nativa ao WhatsApp e
            e-mail — para pequenas e médias empresas que querem profissionalizar
            sua presença online e vender mais.
          </p>

          <ul className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground max-w-xs mx-auto lg:mx-0">
            {[
              "Site moderno e responsivo",
              "WhatsApp e e-mail já integrados",
              "Entrega rápida e sem complicação",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <WhatsAppButton
              message="Olá! Vi o site da SDZ e quero um site profissional para meu negócio. Pode me ajudar?"
              label="Falar no WhatsApp agora"
              trackingLabel="whatsapp_hero_cta"
              className="px-8 py-6 text-base"
            />
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => track("hero_secondary_cta_click")}
            >
              <a href="#como-funciona">Como funciona?</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <SiteMockup />
        </div>
      </div>
    </section>
  )
}
