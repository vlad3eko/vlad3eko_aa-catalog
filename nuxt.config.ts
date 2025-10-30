import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
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
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"},
                {rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
            ]
        }
    },
    modules: ['@vueuse/nuxt', '@nuxt/image', ''],
    experimental: {asyncContext: true},
})
