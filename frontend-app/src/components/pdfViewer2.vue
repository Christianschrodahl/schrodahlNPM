<template>
    <div class="pdf-viewer" >
      <div class="pdf-sidebar">
        <ul class="thumbnails">
          <li v-for="(page, index) in pages" :key="index" @click="goToPage(index)">
            <img :src="page.thumbnail" alt="Page {{ index + 1 }}" />
          </li>
        </ul>
      </div>
      <div class="pdf-content">
        <canvas ref="pdfCanvas"></canvas>
      </div>
    </div>
  </template>
<script setup lang="ts" generic="T">
//import  * as pdfjsLib from "pdfjs-dist/build/pdf";
import * as pdfjsLib from 'pdfjs-dist/build/pdf.js'
import * as worker from 'pdfjs-dist/build/pdf.worker.js'
import type {PDFDocumentLoadingTask, PDFPageProxy} from 'pdfjs-dist/build/pdf.js'
import testPdf from '../assets/testPDF.pdf'
import { onMounted, ref, watch } from "vue";
pdfjsLib.GlobalWorkerOptions.workerSrc = worker
let props = defineProps<{
    currentPdf?: any,
    pageGap?: string,
    as?: any,
    scale?: number
}>()
let pdfDoc = ref<any>(null)
let pageNum = ref(1)
let pages = ref<T[]>([])
let pdfCanvas = ref<any>(null)
const currentScale = ref(props.scale)
watch(currentScale, (v)=>{
  console.log("SCALE UPDATED", v)
})
async function renderPage(num:number) {
      const canvas = pdfCanvas.value;
      const context = canvas.getContext("2d");
      console.log(pdfDoc.value)
      await pdfDoc.value.promise.then(async t=>{
       
     let page = await t.getPage(num)
      const viewport = page.getViewport({ scale: currentScale.value });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    });
    }
    function goToPage(num:number) {
    pageNum.value = num + 1;
    renderPage(pageNum.value);
    }
onMounted(async ()=>{
    try {
      const pdfPath = testPdf//"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Replace with your PDF file path
     
      pdfDoc.value = pdfjsLib.getDocument(pdfPath);
      await pdfjsLib.getDocument(pdfPath).promise.then(async t=>{
        for (let i = 1; i <= t.numPages; i++) {
        const page = await t.getPage(i);
        const viewport = page.getViewport({ scale: 1.0 });
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        await page.render(renderContext).promise;
        pages.value.push({
          canvas,
          thumbnail: canvas.toDataURL(),
        });
      }
        
      })
      
      console.log(pageNum.value)
      await renderPage(pageNum.value);
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  })
</script>

<style scoped>
.pdf-viewer {
  display: flex;
}

.pdf-sidebar {
  width: 20%;
  padding: 20px;
  overflow-y: auto;
}

.pdf-content {
  flex-grow: 1;
  overflow: auto;
}
.pdf-content canvas{
  max-width: -webkit-fill-available
}
.thumbnails {
  list-style-type: none;
  padding: 0;
}

.thumbnails li {
  cursor: pointer;
  margin-bottom: 10px;
}

.thumbnails img {
  max-width: 100%;
  border: 1px solid #ddd;
}
</style>