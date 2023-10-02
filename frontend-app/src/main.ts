import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import frontendLib from 'frontend-library'
import 'frontend-library/dist/frontend-library.css'
import {store} from '@/vuex/store'


const app = createApp(App)
const darkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
app.use(frontendLib, {
    colorMode: darkMode ? 'light': 'light',
    customTheme:{
        dark:{
            body:{
                backgroundColor: '#121A12',
                color: '#E7EAED'
            },
            layout:{
                background: "red"
              },
            CMainBar:{
                background: '#1D211D'
            },
            CDraw:{
                
            },
            CButton:{
                unstyled:{
                    font:{
                        base: '#E7DAFF',
                        _active: 'white',
                        _hover: 'white',
                        _focused: 'white'
                    }
                }
                
            }
        },
        light:{
            CDraw:{
                
            },
        }
    }
})
app.use(router)
app.use(store)
app.mount('#app')
