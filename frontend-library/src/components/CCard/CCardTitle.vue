<template>
    <component :is="'h3'" v-style-setup="$.type, $attrs" class="CCardTitle" >
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
.CCardTitle{
    width: 100%;
    font-weight: v-bind('baseStyles.fontWeight');
    font-size: v-bind('baseStyles.fontSize');
}
</style>