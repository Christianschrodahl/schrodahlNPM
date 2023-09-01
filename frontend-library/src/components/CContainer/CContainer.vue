<template>
    <section v-style-setup="$.type, $attrs" class="CContainer">
        <slot/>
    </section>
</template>
<script setup lang="ts">
</script>
<style scoped>
section.CContainer{
    width: auto;
    max-width: 800px!important;

    margin: auto;
    
}   

</style>