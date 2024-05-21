// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      baseApiUrl: `${process.env.BASE_URL}/frontApi`,
    },
  },
  app: {
    head: {
      title: "AR.CHI",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  css: ["@/assets/scss/index.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;',
        },
      },
    },
  },
  modules: [
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [400, 600],
          "Playfair Display": [400, 700],
        },
        display: "swap",
        subsets: ["latin"],
        preload: true,
      },
    ],
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
});
