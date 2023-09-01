import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import frontendLib from 'frontend-library'
import 'frontend-library/dist/frontend-library.css'

const app = createApp(App)
app.use(frontendLib)
app.use(router)

app.mount('#app')
