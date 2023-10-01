# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


# setup
1. Go to you Main file and import library
   `import norUI from '@christiansch/nor-ui'`
   `import '@christiansch/nor-ui/dist/frontend-library.css'`
2. use the new library and create your own theme 
   ```app.use(norUI, {
         colorMode: 'light',
         customTheme:{
            dark: {
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
            },
            light: {
               ...
            }
         }
      })
   ```

# How to use components:

`<c-button variant="primary">CLICK</c-button>`

If you need custom styling where you use it you can assign it by writing CSS directly to the component.
it will not be inline css
`<c-text color="red" padding="2rem">some text</c-text>`

You can also assign darkmode styling.
This library use lightmode as default so if you want to have different styling on darkmode you need use the "dark" attribute
`<c-text color="red" padding="2rem" :dark="{ color: 'blue', padding: '2px'}">some text</c-text>`

You can alose override default element type for each component. 
`<c-text as="p">some text</c-text>`
`<c-text as="span">some text</c-text>`
# forms
How to use form with validation

```
<template>
<c-form ref="form">
            <c-input v-model="input" label="email" type="email" :rules="[v => !!v && v.length ==2 || 'field required']"/>
            <c-button variant="primary" @click="submit">submit</c-button>
        </c-form>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const input = ref('')
const form = ref(null)
function submit(){
    if(await form.value.validation() === true){
       console.log("SUCCESS", input)
    }
}
</script>
```




