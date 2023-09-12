<template>
    <component :is="as ?? 'section'" v-bind="$attrs" class="fullPdfView">
        <template v-for="page in pages" :key="page">
            <VuePDF :pdf="pdf" fit-parent :scale="currentZoom" :page="page"/>
        </template>
    </component>
</template>
<script setup lang="ts">
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import { ref } from 'vue';

let {scale = 1, pageGap = '10px', currentPdf='', as='section'} = defineProps<{
    currentPdf: any,
    pageGap: string,
    as: any,
    scale: number
}>()
const currentZoom = ref(scale)
const { pdf, pages, info } = usePDF(currentPdf)
</script>
<style scoped>
.fullPdfView div{
    margin: v-bind('pageGap')
}
</style>