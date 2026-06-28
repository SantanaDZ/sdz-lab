"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
            SDZ
          </span>
          <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">
            |
          </span>
          <span className="hidden sm:inline-block text-xs text-muted-foreground font-medium">
            Sites & Automação Digital
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 px-6 text-primary hover:bg-primary/10"
          >
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-primary px-6 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <a href="#cta-final">Quero meu site</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href="/orcamento"
              className="text-base text-primary transition-colors hover:text-primary/80"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar Orçamento
            </Link>
            <Button
              asChild
              className="mt-2 w-full rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <a href="#cta-final" onClick={() => setMobileOpen(false)}>
                Quero meu site
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
