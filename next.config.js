/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // next/image serve AVIF/WebP automaticamente e faz lazy-load por padrão.
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
