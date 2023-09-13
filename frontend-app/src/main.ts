import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import frontendLib from 'frontend-library'
import 'frontend-library/dist/frontend-library.css'
import {store} from '@/vuex/store'


const app = createApp(App)
app.use(frontendLib, {
    colorMode: 'dark',
    customTheme:{
        light:{
            layout:{
                background: "red"
              },
            CMainBar:{
                background: 'blue'
            }
        }
    }
})
app.use(router)
app.use(store)
app.mount('#app')
