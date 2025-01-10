// https://nuxt.com/docs/api/configuration/nuxt-config


import dotenv from 'dotenv';

dotenv.config({ path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env' });



export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com"
        },
        {
          href: "https://fonts.gstatic.com"
        },
        {
            rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        }
      ],
      script: [
        /*    {
                src: 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js',
            },
            {
                src: 'https://cdn.jsdelivr.net/npm/@teipublisher/pb-components/dist/pb-components-bundle.js',
                type: 'module'
            },
             {
              src: '/custom-web-components/pb-extension-bundle.js',
              type: 'module'
          },
        */
          {
              src: 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs/webcomponents-loader.js',
          },
          {
              src: 'https://cdn.jsdelivr.net/npm/@teipublisher/pb-components@2.24.3/dist/pb-components-bundle.js',
              type: 'module'
          },
        ]
    },
  },
    runtimeConfig: {
        // Public keys that are exposed to the client
        public: {
            apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080/exist/apps/DEFrAG/index.html',
        },
    },
  css: [
      '@fortawesome/fontawesome-svg-core/styles.css',
      '~/assets/styles/main.scss',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@morev/vue-transitions/nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
    i18n: {
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'it',
                name: 'Italiano'
            },
            {
                code: 'en',
                name: 'English'
            },
        ],
        defaultLocale: 'it',
    },
  vueTransitions: {
    // The same options as in the plugin itself.
    // You will get an autocomplete using Nuxt 3.
  },
  build: {
      transpile: ['@fortawesome/vue-fontawesome']
  },
})