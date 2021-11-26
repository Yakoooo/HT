import { createApp } from 'vue'
import rootapp from './App.vue'
import router from './router/index'
import store from './store'
import { elemenplusapp } from './global'
import '@/assets/css/index.less'
import 'normalize.css'

const rootvue = createApp(rootapp)

elemenplusapp(rootvue)
rootvue.use(router)
rootvue.use(store)
rootvue.mount('#app')
