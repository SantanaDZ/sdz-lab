import Link from "next/link"
import { Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PendentePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Clock className="size-20 text-yellow-500" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Pagamento em processamento
        </h1>
        <p className="text-muted-foreground mb-8 text-pretty">
          Seu pagamento está sendo analisado. Assim que for confirmado, entraremos em contato pelo e-mail cadastrado.
        </p>
        <Button asChild className="rounded-full px-8">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  )
}
