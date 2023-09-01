<template>
    <component :is="'div'" v-style-setup="$.type, $attrs" class="CCard" >
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
    borderRadius: string
}
const baseStyles:baseStyle = {
    borderRadius: theme.radii.md
}

</script>
<style scoped>
.CCard{
    display: block;
    overflow: hidden;
    overflow-wrap: break-word;
    position: relative;
    padding: 16px;
    margin: 10px;
    text-decoration: none;
    transition-duration: .28s;
    transition-property: box-shadow,opacity,background;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    z-index: 0;
    border-color: rgba(0,0,0, 0.5 );
    border-style: solid;
    border-width: 0;
    border-radius: v-bind('baseStyles.borderRadius');
}
</style>