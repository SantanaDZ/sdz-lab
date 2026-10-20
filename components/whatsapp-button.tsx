"use client"

import { track } from "@vercel/analytics"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { waUrl } from "@/lib/site"

export const buildWhatsAppUrl = waUrl

interface WhatsAppButtonProps {
  message?: string
  label?: string
  trackingLabel?: string
  className?: string
}

export function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre os serviços da SDZLab.",
  label = "Falar no WhatsApp",
  trackingLabel = "whatsapp_cta_generic",
  className,
}: WhatsAppButtonProps) {
  return (
    <a
      href={waUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { label: trackingLabel })}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-serif text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]",
        className
      )}
    >
      {label}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}
