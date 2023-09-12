<template>
  <div ref="pdfBox">
    <!--<canvas ref="pdfCanvas" id="pdf-render"></canvas>-->
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref, watch, toRefs } from 'vue';
const props = defineProps<{
    pageNum: number,
    documentPdf: any,
    scale?: number,
    maxSize:string}>()
const pdfBox = ref(null)
const {scale} = ref(props.scale)
const pdfCanvas = ref<any>(null);
const pdfDoc = ref(props.documentPdf);
let pageRendering = ref(false);
let pageNumPending = ref(null);
const renderPage = (num:Number) => {
  console.log("HTIS IS NUM", num, {pdfBox})
    //pdfBox.value?.removeChild(pdfCanvas)
    const newCanvas = document.createElement('canvas')
    newCanvas.id = "pdf-render"
    newCanvas.style.maxWidth = props.maxSize
    pdfBox.value?.appendChild(newCanvas)
    
      pageRendering.value = true;
      pdfDoc.value
      pdfDoc.value.getPage(num).then((page: any) => {
        const viewport = page.getViewport({ scale: props.scale });
        const canvas = newCanvas;
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

watch(()=>scale,(newv, oldv)=>{
  
  console.log(newv, oldv)
  renderPage(props.pageNum)
})
onMounted(()=>{
    renderPage(props.pageNum)
})
    

</script>
<style scoped>
canvas {
  margin: auto;
  display: block;
  max-width:v-bind('maxSize');
}
</style>