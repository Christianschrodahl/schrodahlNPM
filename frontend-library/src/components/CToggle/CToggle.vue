<template>
  <div v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CToggle" @click="toggleSwitch">
    <input
      type="checkbox"
      class="CToggle__input--hidden"
      :checked="localModal"
      @input="updateValue"
    />
    <div class="CToggle__switch">
      <span v-if="localModal" class="CToggle__switch__slider" data-switch="true">
        <component v-if="trueIcon" :is="trueIcon" />
        <slot name="trueIcon"/>
      </span>
      <span v-else class="CToggle__switch__slider" data-switch="false">
        <component v-if="trueIcon" :is="falseIcon" />
        <slot name="falseIcon"/>
      </span>
    </div>
  </div>

</template>
<script setup lang="ts">
import generateRandomUniqueID from '@/utils/uniqueID'
import { ref } from 'vue';
let props = defineProps<{modelValue: boolean, size?: String, trueIcon: any, falseIcon}>()
let localModal = ref(props.modelValue)
const emit = defineEmits({"update:modelValue": Boolean})
const uniqueCompId = generateRandomUniqueID()

function toggleSwitch(){
  localModal.value = !localModal.value
  emit('update:modelValue',  localModal.value)
}
function updateValue(e){
  emit('update:modelValue', !e.target.checked)
}
const swtichSize = ref(()=>{
  switch (props.size) {
    case 'xl':
      return  "75px"
    case 'lg':
      return  "70px"
    case 'md':
      return  "60px"
    default:
      return  props.size ?? "50px"
  }
})

</script>
<style scoped>
.CToggle{
  display: inline-block;
  cursor: pointer;
}
.CToggle__input--hidden{
  display: none
}
.CToggle__switch {
  position: relative;
  width: v-bind('swtichSize()');
  height: calc(v-bind('swtichSize()') / 2);
  background-color: #ccc;
  border-radius: 25px;
}

.CToggle__switch__slider {
  position: absolute;
  width: calc(v-bind('swtichSize()') / 2);
  height: calc(v-bind('swtichSize()') / 2);
  background-color: #fff;
  border-radius: 50%;
  left:0;
  animation: slide .6s reverse;
  
}
.CToggle__switch__slider[data-switch='true']{
  background-color: blue;
  left: 50%;
  animation: slide .6s;
}
.CToggle__switch__slider :first-child{
  margin: auto;
  width: 100%;
  height: auto;
  max-width: 50%;
  position: absolute; 
  inset:0;
}

.CToggle__switch__slider__icon {
  background-color: transparent;
}

@keyframes slide {
  0% {
    left: 0;
  }
  100% { 
    left: 50%; 
   }

}

</style>