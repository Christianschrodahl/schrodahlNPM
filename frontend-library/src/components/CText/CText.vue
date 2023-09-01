<template>
    <component :is="'p'" v-style-setup="$.type, $attrs" class="CText" >
        <slot />
    </component>
</template>
<script setup lang="ts">
import { Component, Ref, computed, inject } from 'vue';

//move this to the global file
interface currentTheme {
  [key: string]: any
}
const {as = 'p'} = defineProps<{as: Component | string}>()

const theme:currentTheme = inject('theme')

type baseStyle = {
    fontSize:string,
    color: string,
    marginBottom: string
}
const baseStyles:baseStyle = {
    fontSize:'16px',
    color: theme?.body?.color,
    marginBottom: theme.spaces.sm
}
</script>
<style scoped >
.CText{
    width: 100%;
    font-size: v-bind('baseStyles.fontSize');
    margin-bottom: v-bind('baseStyles.marginBottom');

}
</style>