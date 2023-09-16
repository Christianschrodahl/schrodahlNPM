<template>
    <component :is="as" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CFlex" >
        <slot />
    </component>
</template>
<script setup lang="ts">
import generateRandomUniqueID from '@/utils/uniqueID';
import { Component } from 'vue';

//move this to the global file
interface currentTheme {
  [key: string]: any
}
const {as = 'div'} = defineProps<{as: Component | string}>()

const uniqueCompId = generateRandomUniqueID()
</script>
<style scoped>
.CFlex{
    display: flex;
}
</style>