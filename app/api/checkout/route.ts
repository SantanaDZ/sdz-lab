import { NextRequest, NextResponse } from "next/server"
import MercadoPagoConfig, { Preference } from "mercadopago"

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN!,
})

const plans = {
  basico: {
    title: "Plano Básico — SDZ Lab",
    unit_price: 197.0,
  },
  profissional: {
    title: "Plano Profissional — SDZ Lab",
    unit_price: 397.0,
  },
  premium: {
    title: "Plano Premium — SDZ Lab",
    unit_price: 697.0,
  },
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { planId } = body as { planId: string }

  const plan = plans[planId as keyof typeof plans]
  if (!plan) {
    return NextResponse.json({ error: "Plano inválido" }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  try {
    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items: [
          {
            id: planId,
            title: plan.title,
            quantity: 1,
            unit_price: plan.unit_price,
            currency_id: "BRL",
          },
        ],
        back_urls: {
          success: `${baseUrl}/planos/sucesso`,
          failure: `${baseUrl}/planos/falhou`,
          pending: `${baseUrl}/planos/pendente`,
        },
      },
    })

    return NextResponse.json({ init_point: result.init_point })
  } catch (err: unknown) {
    const mpError = err as { status?: number; message?: string }
    console.error("[checkout] MP error:", mpError)
    return NextResponse.json(
      { error: "Erro ao criar preferência de pagamento." },
      { status: 500 }
    )
  }
}
