/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['uz', 'ru'],
    defaultLocale: 'uz',
  }
}

module.exports = nextConfig