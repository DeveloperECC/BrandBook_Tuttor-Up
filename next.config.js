/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 'export' genera la carpeta 'out' con HTML estático
  output: 'export',
  // Importante: Si tu repo se llama 'BrandBook_Tuttor-Up', ponlo aquí.
  // Si estás en local (npm run dev), esto no afecta.
  basePath: process.env.NODE_ENV === 'production' ? '/BrandBook_Tuttor-Up' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig