<template>
    <div class="pdf-viewer" >
      <aside class="pdf-sidebar">
        <nav class="pdf-sidebar-menu">
        <ul class="thumbnails">
          <li v-for="(page, index) in pages" :key="index" @click="goToPage(index+1)"
          :class="{ 'active-page': index + 1 === activePage }">
                <img :src="page.thumbnail" alt="Page {{ index + 1 }}" />
          </li>
        </ul>
      </nav>
      </aside>
      <div class="pdf-content" v-for="(page) in maxPages" :key="'page'+page">
        <canvas ref="canvasRefs" :id="'page'+page"></canvas>
      </div>
    </div>
    <Teleport to="#main-bar-action">
      <c-flex as="div" float="right">
        <c-icon :as="PhMinus" @click="scale = scale < 2 ? scale + 0.25 : scale"></c-icon>
        <span style="color:white;">{{ scale * 100 }}%</span>
        <c-icon :as="PhPlus" @click="scale = scale > 0.25 ? scale - 0.25 : scale"></c-icon>
      </c-flex>
    </Teleport>
</template>
<script setup lang="ts" generic="T">
import * as pdfjsLib from 'pdfjs-dist/build/pdf.js'
import * as worker from 'pdfjs-dist/build/pdf.worker.js'
import {PhPlus, PhMinus} from '@phosphor-icons/vue' 
import testPdf from '../assets/testPDF.pdf'
import { onMounted, ref, watch } from "vue";
pdfjsLib.GlobalWorkerOptions.workerSrc = worker

const scale = ref<number>(1)
let pdfDoc = ref<any>(null)
let pages = ref<T[]>([])
let canvasRefs = ref()
let maxPages = ref<number>(0)
  watch(scale, (v)=>{
  for(let i = 0; i < maxPages.value; i++){
    renderPage(i)
  }
  
})
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
      const el = document.getElementById(`page${num !== null ? num :0}`)
      el?.scrollIntoView({ behavior: "smooth", block: "end", inline:'end' });
 
    }

    const activePage = ref<number>(1); // Initialize the active page to the first page
      function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the page number from the element's ID
          const pageNumber = parseInt(entry.target.id.substring(4));
          activePage.value = pageNumber;
        }
      });
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

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // Adjust as needed
  };
  const observer = new IntersectionObserver(handleIntersection, options);

  // Attach observer to each page element
  for (let i = 0; i < maxPages.value; i++) {
    const target = document.getElementById(`page${i + 1}`);
    if (target) {
      observer.observe(target);
    }
  }

  })
</script>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #808080; 
  border-radius: 5px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #333; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #777; 
}
.pdf-viewer {
display: flex;
flex-wrap: wrap;
scroll-behavior: smooth;
}
.pdf-sidebar{
    position:relative;
    overflow: none;
    width: 100%; 
    max-width:100px;
    min-width:100px; 
    height: 100%; 
    min-height: 100%;
    margin: auto 18px;
    background: #21252C;
    }
.pdf-sidebar-menu{
  position: fixed;
  width: 100%; 
  max-width:100px;
  min-width:100px; 
  height: 80%; 
  min-height: 85%; 
  margin: auto;
  scroll-snap-align: start;
  scroll-margin: 200px;
  overflow: auto;
}

.pdf-content { 
  width: 100%;
  height: 100%;
  min-width: -webkit-fill-available;
  margin: 0px auto 10px;
  
  flex: 8;
  display: flex;
  
}
.pdf-content canvas{
  max-width: -webkit-fill-available;
  margin: auto;
}
.thumbnails {
  width: 76px;
  max-width: 76px;
  min-width: 76px;
  list-style-type: none;
  padding: 0;
}

.thumbnails li {
  cursor: pointer;
  margin-bottom: 10px;
  opacity: 0.4;
}

.thumbnails img {
  max-width: 100%;
  border: 1px solid #ddd;
}
.thumbnails li.active-page {
  opacity: 1;
  color: #fff;
}
@media only screen and (max-width: 1024px) {
  .pdf-sidebar{
    display: none;
  }
}
</style>