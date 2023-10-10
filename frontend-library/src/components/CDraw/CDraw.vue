<template>
<canvas v-if="renderComponent" 
    ref="canvas" 
    v-style-setup="$.type, $attrs, uniqueCompId" 
    :data-id="uniqueCompId"
    @touchstart="startDrawing"
    @touchmove="draw"
    @touchend="stopDrawing"
    @mousedown="startDrawing" 
    @mousemove="draw" 
    @mouseup="stopDrawing" class="CDraw"></canvas>
</template>
  
<script setup lang="ts">
import { Ref, inject, ref, watch, onMounted } from 'vue';
import generateRandomUniqueID from '@/utils/uniqueID';
import {forceRerender, renderComponent} from '@/utils/forceRerender'

const props = defineProps<{
    drawColor: '#000000',
    lineWidth: 1,
    format: 'image/jpeg'
}>()
//move this to the global file
interface currentTheme {
  [key: string]: any
}
const theme:currentTheme = inject('theme')
const colorMode:Ref<string> = inject('colorMode')
watch(()=>colorMode.value,(v)=>{
    forceRerender()
})
type baseStyle = {
    border:string,
    background: string,
    borderRadius: string

}

const baseStyles = ref<baseStyle>({
    border:theme?.CDraw.border,
    background: theme?.CDraw?.background,
    borderRadius: theme.radii.lg
})

const uniqueCompId = generateRandomUniqueID()
  const canvas = ref(null);
  const context = ref(null);
  const isDrawing = ref(false);
  const minDrawingSize = 4000; // Adjust this value as needed
  
  const points = ref([]);

  const startDrawing = (e: MouseEvent | TouchEvent) => {
  const event = e instanceof MouseEvent ? e : e.touches[0]
  const c = canvas.value;
  const rect = c.getBoundingClientRect();
  const aspectRatio = c.width / c.height;

  context.value = c.getContext('2d');
  context.value.strokeStyle = props.drawColor;
  context.value.lineWidth = props.lineWidth;
  context.value.lineCap = 'round';
  context.lineJoin = 'round'
  context.value.imageSmoothingEnabled = true;

  // Adjust coordinates to consider canvas aspect ratio
  const x = (event.clientX - rect.left) * (c.width / rect.width);
  const y = (event.clientY - rect.top) * (c.height / rect.height);

  context.value.beginPath();
  context.value.moveTo(x, y);
  isDrawing.value = true;

  // Store the starting point
  points.value.push({ x, y });
};

const draw = (e: MouseEvent | TouchEvent) => {
  const event = e instanceof MouseEvent ? e : e.touches[0]
  if (!isDrawing.value) return;
  const c = canvas.value;
  const rect = c.getBoundingClientRect();
  const aspectRatio = c.width / c.height;

  // Adjust coordinates to consider canvas aspect ratio
  const x = (event.clientX - rect.left) * (c.width / rect.width);
  const y = (event.clientY - rect.top) * (c.height / rect.height);

  // Draw a curve to the new point
  const lastPoint = points.value[points.value.length - 1];
  context.value.bezierCurveTo(
    lastPoint.x,
    lastPoint.y,
    lastPoint.x + (x - lastPoint.x) / 2,
    lastPoint.y + (y - lastPoint.y) / 2,
    (x + lastPoint.x) / 2,
    (y + lastPoint.y) / 2
  );
  context.value.stroke();

  // Store the new point
  points.value.push({ x, y });
};
  
  const stopDrawing = () => {
    isDrawing.value = false;
    // Reset the points array
    points.value = [];
  };
  
  const submitDrawing = () => {
    const canvasRef = canvas.value;
    const dataURL = canvasRef.toDataURL(props.format);
    
    if (isDrawingValid()) {
      // You can now send the dataURL to the server or use it as needed.
      console.log(dataURL);
    } else {
      console.log('Drawing is too small. Minimum size required:', minDrawingSize);
    }
  };
  
  const clearCanvas = () => {
  const canvasRef = canvas.value;
  context.value.clearRect(0, 0, canvasRef.width, canvasRef.height);
  // Reset the points array
  points.value = [];
};

  
  const isDrawingValid = () => {
    const canvasRef = canvas.value;
    const drawingSize = canvasRef.toDataURL('image/png').length;
    console.log(canvasRef,drawingSize)
    return drawingSize >= minDrawingSize;
  };
  
  defineExpose({submitDrawing, isDrawingValid, clearCanvas})
  </script>
  
  <style scoped>
  .CDraw{}
  canvas {
    width:100%;
    border: v-bind('baseStyles.border');
    background: v-bind('baseStyles.background');
    border-radius: v-bind('baseStyles.borderRadius');
    touch-action: none;
  }
  </style>