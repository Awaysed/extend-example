// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'
export default defineNuxtConfig({
  srcDir: 'src',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  // vite: {
  //   plugins: [ ElementPlus()]
  // }
})
