<template>
    <div class="documentView">
       <!-- <pdf-viewer as="aside" :currentPdf="testPdf" pageGap="10px" maxSize="100px" :scale="1"/>-->
        <!--<pdf-viewer as="section" class="documentView__document" maxSize="-webkit-fill-available" v-bind:scale="scale" :currentPdf="testPdf" pageGap="10px"/>-->
        <!--Aside menu
        <fullPDFViewer as="aside" :currentPdf="testPdf" pageGap="10px" :scale="1"/>-->
        <!--Main document
       <fullPDFViewer as="section" class="documentView__document" :scale="scale" :currentPdf="testPdf" pageGap="10px"/>-->
       <pdfViewer2 :scale="scale"/>
        <Teleport to="#main-bar-action">
            <c-button variant="primary" @click="scale = scale < 2 ? scale + 0.25 : scale">+</c-button>
            <span style="color:white;">{{ scale * 100 }}%</span>
            <c-button variant="primary" @click="scale = scale > 0.25 ? scale - 0.25 : scale">-</c-button>
            
        </Teleport>
        <c-button variant="primary" position="fixed" bottom="10px" right="10px" height="min-content" @click="()=> confirmDoc($router)">confirm</c-button>
    
    </div>
</template>
<script setup lang="ts">
import {useStore} from 'vuex'
import fullPDFViewer from '@/components/fullPDFViewer.vue';
import pdfViewer from '@/components/pdfViewer.vue';
import testPdf from '../assets/testPDF.pdf'
import pdfViewer2 from '@/components/pdfViewer2.vue';
import { ref } from 'vue';
const store = useStore()
function confirmDoc(router:any){
    store.commit('confirmed', {id:router.currentRoute.value.query.id})
    router.push('/')
}
const scale = ref<number>(1)

</script>
<style>
.documentView {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.documentView aside { 
    width: 100%; 
    max-width:150px;
    min-width:150px; 
    height: 100%; 
    min-height: 100%; 
    background: #21252C;
    grid-area: 1 / 1 / 6 / 2; }
.documentView__document { grid-area: 1 / 2 / 4 / 4; }
.documentView__controls{
    position: fixed;
    bottom: 0;
    width: 100%;
    min-width: 100%;
    background: #21252C;
    text-align: center;
}
.documentView__controls button{
    margin: auto;
}

</style>