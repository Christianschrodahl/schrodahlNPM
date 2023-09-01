/// <reference types="vite/client" />
/*declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  declare module '@globals' {
    const globalsPath: string;
    export default globalsPath;
  }*/
declare module '*.vue'
declare module '@globals'
declare module '@chakra-ui/vue-next';