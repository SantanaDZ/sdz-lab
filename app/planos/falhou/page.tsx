import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FalouPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <XCircle className="size-20 text-red-500" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
          Pagamento recusado
        </h1>
        <p className="text-muted-foreground mb-8 text-pretty">
          Não conseguimos processar seu pagamento. Verifique os dados do cartão ou tente outro método de pagamento.
        </p>
        <Button asChild className="rounded-full px-8">
          <Link href="/planos">Tentar novamente</Link>
        </Button>
      </div>
    </main>
  )
}
