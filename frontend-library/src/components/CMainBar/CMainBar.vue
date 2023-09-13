<template>
    <header v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CMainBar" ><slot/></header>
</template>
<script setup lang="ts">
import { Ref, computed, inject } from 'vue';
import generateRandomUniqueID from '@/utils/uniqueID';
//move this to the global file
interface currentTheme {
  [key: string]: any;
}
const themeStyle:currentTheme = inject('theme')
const baseStyles = {
    background: themeStyle?.CMainBar?.background,
    color: themeStyle?.CMainBar?.color
}
const uniqueCompId = generateRandomUniqueID()
let themeColors = computed({
    get(){
        return themeStyle.CMainBar
    },
    set(e){
        return e
    }
})

</script>
<style scoped>
.CMainBar{}
header{
    padding: 10px;
    width: 100%;
    min-width: 100%;
    background: v-bind('baseStyles.background');
    color: v-bind('baseStyles.color');
    display: flex;
    height: auto;
    position: relative;
}

</style>