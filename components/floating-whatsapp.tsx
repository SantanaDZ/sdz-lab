"use client"

import { track } from "@vercel/analytics"
import { MessageCircle } from "lucide-react"
import { buildWhatsAppUrl } from "@/components/whatsapp-button"

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(
    "Olá! Vi o site da SDZ e gostaria de saber mais sobre os serviços."
  )

  const handleClick = () => {
    track("whatsapp_click", { label: "whatsapp_floating_button" })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center size-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
