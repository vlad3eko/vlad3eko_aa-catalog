import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', 'shadcn-nuxt', 'nuxt-swiper', '@nuxtjs/color-mode', '@pinia/nuxt'],
        app: {
            head: {
                title: 'New',
                meta: [
                    {name: 'description', content: 'Everything about Nuxt 3'}
                ],
                link: [
                    {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    },
                    {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"},
                    {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
                ],
                script: [
                    {src: "https://telegram.org/js/telegram-web-app.js?59"}
                ]
            }
        },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ]
    },
    colorMode: {
        classSuffix: '',
    },
    shadcn: {
        prefix: 'V',
        componentDir: '@/components/ui'
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
    },

})
