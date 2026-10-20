import { Logo } from "@/components/logo"
import { OWNER, REGION } from "@/lib/site"

const footerLinks = [
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "IA", href: "#ia" },
  { label: "Design & Marketing", href: "#design" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">
            Tecnologia, IA e design para empresas · {REGION}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} SDZLab · {OWNER}. Todos os direitos reservados.
      </p>
    </footer>
  )
}
