<template>
    <component :is="as" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" v-if="renderComponent" class="CText" >
        <slot />
    </component>
</template>
<script setup lang="ts">
import generateRandomUniqueID from '@/utils/uniqueID';
import { Component, Ref, inject, nextTick, ref, watch } from 'vue';
import {forceRerender, renderComponent} from '@/utils/forceRerender'
//move this to the global file
interface currentTheme {
  [key: string]: any
}
const {as = 'p'} = defineProps<{as?: Component | string}>()

const theme:currentTheme = inject('theme')
const colorMode:Ref<string> = inject('colorMode')
type baseStyle = {
    fontSize:string,
    color: string,
    marginBottom: string
}

const baseStyles = ref<baseStyle>({
    fontSize:'16px',
    color: theme?.body?.color,
    marginBottom: theme.spaces.sm
})
watch(()=>colorMode.value,(v)=>{
    forceRerender()
})


const uniqueCompId = generateRandomUniqueID()
</script>
<style scoped >
.CText{
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 100%;
    font-size: v-bind('baseStyles.fontSize');
    margin-bottom: v-bind('baseStyles.marginBottom');

}
</style>