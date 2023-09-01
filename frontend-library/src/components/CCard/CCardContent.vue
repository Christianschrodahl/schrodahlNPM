<template>
    <component :is="'div'" v-style-setup="$.type, $attrs" class="CCardContent" >
        <slot />
    </component>
</template>
<script setup lang="ts">
import { Component, Ref, computed, inject } from 'vue';

//move this to the global file
interface currentTheme {
  [key: string]: any
}
const {as = 'div'} = defineProps<{as: Component | string}>()

const theme:currentTheme = inject('theme')

type baseStyle = {
    fontWeight: string,
    fontSize:string
}
const baseStyles:baseStyle = {
    fontWeight: "900",
    fontSize:'18px'
}

</script>
<style scoped>
.CCardContent{
    width: 100%;
    display: flex;
}
</style>