// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  // vite: {
  //   plugins: [ ElementPlus()]
  // }
})
