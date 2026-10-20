export const CONTACTS = [
  { display: "(31) 98474-9257", wa: "5531984749257" },
  { display: "(31) 98438-2472", wa: "5531984382472" },
]

export const OWNER = "André Santana"
export const REGION = "BH e região"

export function waUrl(message: string, number = CONTACTS[1].wa) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
