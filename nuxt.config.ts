
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', '@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],
    shadcn: {
        prefix: 'V',
        componentDir: '@/components/ui'
    },
})
