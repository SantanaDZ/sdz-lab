/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Página de planos temporariamente desativada — orçamento via WhatsApp/formulário
      { source: "/planos", destination: "/#cta-final", permanent: false },
    ]
  },
}

export default nextConfig
