<template>
    <component :is="as" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CIcon"><slot/></component>
</template>
<script setup lang="ts">
import { Component, defineAsyncComponent, ref, shallowRef } from 'vue';
import generateRandomUniqueID from '@/utils/uniqueID';

const {as= 'i', space= 'auto', ...props} = defineProps<{as: string|Component, space?: string }>() 

const uniqueCompId = generateRandomUniqueID()

</script>
<style scoped>
.CIcon{}
</style>