/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['uzb', 'rus'],
    defaultLocale: 'uzb',
  }
}

module.exports = nextConfig