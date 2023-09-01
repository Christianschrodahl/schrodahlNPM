<template>
    <main v-style-setup="$.type, $attrs" class="CMain">
        <slot />
    </main>
</template>
<script setup lang="ts">

</script>
<style scoped>
main{
    margin: auto;
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
}
</style>