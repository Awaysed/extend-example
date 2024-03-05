import { ElTable ,ElButton} from 'element-plus'
// import ElementPlus from 'element-plus'
import ElementPlus from 'element-plus/dist/index.full'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus)
    
    // nuxtApp.vueApp.use(ElementPlus)
})
