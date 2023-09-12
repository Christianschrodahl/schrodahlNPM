<template>
    <component :is="'h3'" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CCardTitle" >
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
function generateRandomUniqueID(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let uniqueID = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueID += characters.charAt(randomIndex);
  }

  return uniqueID;
}
const uniqueCompId =generateRandomUniqueID()
</script>
<style scoped>
.CCardTitle{
    width: 100%;
    font-weight: v-bind('baseStyles.fontWeight');
    font-size: v-bind('baseStyles.fontSize');
}
</style>