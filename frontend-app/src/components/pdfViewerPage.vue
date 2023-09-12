<template>
    <div class="pdf-viewer" >
      <aside class="pdf-sidebar">
        <nav class="pdf-sidebar-menu">
        <ul class="thumbnails">
          <li v-for="(page, index) in pages" :key="index" @click="goToPage(index)">
                <img :src="page.thumbnail" alt="Page {{ index + 1 }}" />
          </li>
        </ul>
      </nav>
      </aside>[[{{ maxPages }}]]
      <div class="pdf-content" v-for="(page) in maxPages" :key="'page'+page">
        <canvas ref="canvasRefs" :id="'page'+page"></canvas>
      </div>
    </div>
    <Teleport to="#main-bar-action">
            <c-button variant="primary" @click="scale = scale < 2 ? scale + 0.25 : scale">+</c-button>
            <span style="color:white;">{{ scale * 100 }}%</span>
            <c-button variant="primary" @click="scale = scale > 0.25 ? scale - 0.25 : scale">-</c-button>
        </Teleport>
</template>
<script setup lang="ts" generic="T">
import * as pdfjsLib from 'pdfjs-dist/build/pdf.js'
import * as worker from 'pdfjs-dist/build/pdf.worker.js'
import testPdf from '../assets/testPDF.pdf'
import { onMounted, ref, watch } from "vue";
pdfjsLib.GlobalWorkerOptions.workerSrc = worker

const scale = ref<number>(1)
let pdfDoc = ref<any>(null)
let pageNum = ref(1)
let pages = ref<T[]>([])
let canvasRefs = ref()
let maxPages = ref<number>(0)
async function renderPage(num:number) {
      const canvas = canvasRefs.value[num-1]
      
      const context = canvas.getContext("2d");
      await pdfDoc.value.promise.then(async t=>{
       
     let page = await t.getPage(num)
      const viewport = page.getViewport({ scale: scale.value });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    });
    }
    function goToPage(num:number ) {
    //pageNum.value = num + 1;
    //renderPage(pageNum.value);
      window.location.href = '#page'+num
    }
    onMounted(async ()=>{
    try {
      const pdfPath = testPdf//"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"; // Replace with your PDF file path
     
      pdfDoc.value = pdfjsLib.getDocument(pdfPath);
      await pdfjsLib.getDocument(pdfPath).promise.then(async t=>{
        maxPages.value = t.numPages
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
      for(let i = 0; i <= maxPages.value; i++){
        console.log("run through ", i)
        await renderPage(i+1);
      }
    } catch (error) {
      console.error("Error loading PDF:", error);
    }
  })
</script>
<style scoped>

.pdf-viewer {
display: flex;
flex-wrap: wrap;
scroll-behavior: smooth;

}
.pdf-sidebar{
    position:static;
    overflow: none;
    width: 100%; 
    max-width:200px;
    min-width:200px; 
    height: 100%; 
    min-height: 100%; 
    background: #21252C;
    }
.pdf-sidebar-menu{
  position: fixed;
  width: 100%; 
    max-width:150px;
    min-width:150px; 
    height: 100%; 
    min-height: 100%; 
    overflow: scroll;
    margin: auto;
    padding: auto 20px;
}

.pdf-content { 
  width: 100%;
  height: 100%;
  min-width: -webkit-fill-available;
  margin: 10px auto;
  gap: 10px;
  flex: 8;
  display: flex;
  
}
.pdf-content canvas{
  max-width: -webkit-fill-available;
  margin: auto;
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