"use client"

import { track } from "@vercel/analytics"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WA_NUMBER = "5511999999999"

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

interface WhatsAppButtonProps {
  message?: string
  label?: string
  trackingLabel?: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline" | "ghost"
}

export function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre os serviços da SDZ.",
  label = "Falar no WhatsApp",
  trackingLabel = "whatsapp_cta_generic",
  className,
  size = "lg",
  variant = "default",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message)

  const handleClick = () => {
    track("whatsapp_click", { label: trackingLabel })
  }

  return (
    <Button
      asChild
      size={size}
      variant={variant}
      className={cn(
        variant === "default" &&
          "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25",
        variant === "outline" &&
          "border-emerald-500/50 text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950/30",
        "rounded-full font-semibold gap-2",
        className
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <MessageCircle className="size-5" />
        {label}
      </a>
    </Button>
  )
}
