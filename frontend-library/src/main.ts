import type { App } from 'vue';
import {ref, reactive, watch, nextTick} from 'vue'
import components from "@/components";
import lightTheme from './customTheme/lightTheme'
import darkTheme from './customTheme/darkTheme'
import globalTheme from './customTheme/theme'
import deepMerge from './utils/deepMerge'
import { setCustomStyleFromAttr, themeSetup, settingUpGlobalStyles } from './customTheme/utils/styles';
export default {
  install: (app: App) => {
    const themeMode = ref('dark');
    let theme = reactive(deepMerge(globalTheme, darkTheme))
    //setting up default theme
    themeSetup(theme)
    // Toggle function to switch between light and dark themes
    function toggleTheme() {
      if (themeMode.value === 'light') {
        themeMode.value = 'dark';
        console.log("darkmode")
        theme = Object.assign(theme, {...darkTheme});
        
      } else {
        console.log("lightMode")
        themeMode.value = 'light';
        theme= Object.assign(theme, {...lightTheme});
      }
    }
   
    //Change theme mode
    watch(themeMode, (v)=>{
      // Apply the global styles
      themeSetup(theme)
    })

    app.provide('theme', theme );
    app.provide('colorMode', themeMode );
    app.config.globalProperties.$toggleTheme = (mode)=>toggleTheme()
    //component styleSetup
    const vStyleSetup = {
      beforeMount(el:HTMLElement, binding) {  
        console.log("BINDING", binding)
        setCustomStyleFromAttr(binding.value.__scopeId, el.tagName.toLowerCase(), binding.arg, el)
      },
    }
    app.directive("styleSetup", vStyleSetup)

    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        
        //Setting up component styling from theme styling
        if(theme[component.__name]){
          settingUpGlobalStyles(theme, document.head, component)
        }
        app.component(component.__name ?? prop, component)
      }
    }
  }
};
//We can list all global components here to have easy access when importing them when needed. 
// EXAMPLE: import {CText} from '@globals'
//const { CMainBar,CMain, CButton, CCard} = components
//export { CMainBar,CMain, CButton, CCard}
