<template>
    <section v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CContainer">
        <slot/>
    </section>
</template>
<script setup lang="ts">
import generateRandomUniqueID from '@/utils/uniqueID';
const uniqueCompId = generateRandomUniqueID()
</script>
<style scoped>
section{
    width: auto;
    max-width: 800px!important;

    margin: auto;
    
}   

</style>