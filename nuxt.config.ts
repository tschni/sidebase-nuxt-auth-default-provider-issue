// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@sidebase/nuxt-auth'],

  auth: {
    provider: {
      type: 'authjs',
      defaultProvider: 'haeckerb2c',
    },
    baseURL: 'http://localhost:3000/api/auth',
    globalAppMiddleware: true,
  },
})
