<template>
    <component :is="as" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CIcon"><slot/></component>
</template>
<script setup lang="ts">
import { Component, defineAsyncComponent, ref, shallowRef } from 'vue';
import generateRandomUniqueID from '@/utils/uniqueID';

const {as= 'i', space= 'auto', ...props} = defineProps<{as: string|Component, space?: string }>() 

const uniqueCompId = generateRandomUniqueID()
//let dynamicComponent = shallowRef(null)//typeof as === 'string'  ? import(`@phosphor-icons/vue`)[as] : 'i'

/*import(`@phosphor-icons/vue`).then(module =>{
    if(typeof as === 'string' ){
        const currentIcon = module[as]
        dynamicComponent.value = currentIcon
    }else{
        dynamicComponent.value = as
    }
    
    
}).catch(error=>{
    console.log(`Failed to load dynamic component: ${as}`)
    dynamicComponent.value = 'i'
})*/
</script>
<style scoped>
.CIcon{}
</style>