<template>
<component :is="as ?? 'section'" v-bind="$attrs" class="pdfView">
    <div v-for="index in maxNumPages">
        <canvas ref="pdfCanvas" id="pdf-render" ></canvas>
        <pdfViewerPage :documentPdf="pdfDoc" :scale="scale" :maxSize="maxSize" :pageNum="index"/>
    </div>
</component>
</template>
<script setup lang="ts">

import { onMounted, ref, computed, onBeforeMount, defineAsyncComponent } from 'vue';

/*let { pageGap = '10px', currentPdf='', as='section', maxSize = 'auto', ...props} = defineProps<{
    currentPdf: any,
    pageGap: string,
    as: any,
    scale: number,
    maxSize: string,
}>()*/
const pdfViewerPage = defineAsyncComponent({
    loader: ()=> import('./pdfViewerPage.vue'),
    delay: 2000
})
const props = defineProps<{
    currentPdf: any,
    pageGap: string,
    as: any,
    scale: number,
    maxSize: string}>()

const pdfCanvas = ref<any>(null);
const pdfDoc = ref<any>(null);
let pageNum = ref(1);
let pageRendering = ref(false);
let pageNumPending = ref(null);
let maxNumPages = ref(0)
const currentScale = computed(()=>{
    if(props.scale !== 1){
       // renderPage(pageNum.value)
    }
    
    return props.scale
})

const renderPage = (num:Number) => {
      pageRendering.value = true;
      pdfDoc.value.getPage(num).then((page: any) => {
        const viewport = page.getViewport({ scale: props.scale });
        const canvas = pdfCanvas.value;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport,
        };
        page.render(renderContext).promise.then(() => {
          pageRendering.value = false;
          if (pageNumPending.value !== null) {
            renderPage(pageNumPending.value);
            pageNumPending.value = null;
          }
        });
      });
    };
    const loadPDF = (url:string) => {
        window.pdfjsLib.getDocument(url).promise.then((pdfDoc_:any) => {
        pdfDoc.value = pdfDoc_;
        console.log(pdfDoc_)
        maxNumPages.value = pdfDoc.value.numPages
        //renderPage(pageNum.value);
      });
    };

    onMounted(() => {

      // Initialize PDF viewer with a sample PDF file
      loadPDF(props.currentPdf); // Replace 'sample.pdf' with your PDF file URL
    });

</script>
<style scoped>
.pdfView div{
    margin-bottom: v-bind('pageGap')
}
canvas {
  margin: auto;
  display: block;
  max-width:v-bind('maxSize');
}
</style>