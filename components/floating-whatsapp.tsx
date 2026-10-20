"use client"

import { track } from "@vercel/analytics"
import { MessageCircle } from "lucide-react"
import { waUrl } from "@/lib/site"

export function FloatingWhatsApp() {
  return (
    <a
      href={waUrl("Olá! Vi o site da SDZLab e gostaria de saber mais sobre os serviços.")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { label: "whatsapp_floating_button" })}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-ai text-background shadow-lg shadow-black/40 ring-4 ring-background transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
