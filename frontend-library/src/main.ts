import type { App } from 'vue';
import {ref, reactive, watch} from 'vue'
import components from "@/components";
import lightTheme from './customTheme/lightTheme'
import darkTheme from './customTheme/darkTheme'
import globalTheme from './customTheme/theme'
import deepMerge from './utils/deepMerge'
import { setCustomStyleFromAttr, themeSetup, settingUpGlobalStyles } from './customTheme/utils/styles';
import { VCol, VRow } from './directives/grid';
import CThemeProvider from '@/components/CThemeProvider/CThemeProvider.vue'

interface appOptions{
  customTheme?:  Record<string, any>,
  colorMode?: 'light' | 'dark'
}

export default {
  install: (app: App, options: appOptions) => {
    const themeMode = ref(options?.colorMode ? options.colorMode : 'dark');
    let theme = reactive(deepMerge(globalTheme, themeMode.value === 'dark' ? darkTheme : lightTheme))

    if(options.customTheme){
      try {

        //If default exist, use default
        if(options.customTheme.hasOwnProperty('default')){
          theme = deepMerge(theme, options.customTheme.default)
        }

        //if custom theme exist in the project
        theme = deepMerge(theme, options.customTheme[themeMode.value])
        console.log(theme)
      } catch (error) {
        console.error(error)
      }
      
    }
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
    app.config.globalProperties.$colorMode = themeMode
    //component styleSetup
    const vStyleSetup = {
      beforeMount(el:HTMLElement, binding) {  
        setCustomStyleFromAttr(`data-id="${binding.modifiers ?? binding.value?.__scopeId}"`, el.tagName.toLowerCase(), binding.arg, el, themeMode.value)
      },
      beforeUpdate(el, binding) {
        //WE MIGHT NEED TO CHANGE THIS BECAUSE THIS WILL TRIGGER FROM PARENT EVENT
        setCustomStyleFromAttr(`data-id="${binding.modifiers ?? binding.value?.__scopeId}"`, el.tagName.toLowerCase(), binding.arg, el, themeMode.value)
      },
    }
    app.directive("styleSetup", vStyleSetup)
    app.directive("row", VRow)
    app.directive("col", VCol)
    
    //components

    app.component('CThemeProvider',CThemeProvider)
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
