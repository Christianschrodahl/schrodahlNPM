<template>
  <div class="form-box" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" v-if="renderComponent">
        <input class="form-input" type="text" :value="modelValue" @input="updateValue"  required :isInvalid="error === true || typeof error === 'string'"
               placeholder="tester">
        <label :for="id" class="label">tester </label>
        <span class="error" v-if="!!error && typeof error === 'string'" >Field Required</span>
      </div>
</template>
<script setup lang="ts">
import {inputSettings} from './utils/input.composables.ts'
import type {inputProps} from "./utils/input.props"
import {watch, toRefs, Ref, inject} from 'vue'
import generateRandomUniqueID from '@/utils/uniqueID';
import {forceRerender, renderComponent} from '@/utils/forceRerender'
const props = defineProps<inputProps>()
const { error, validate } = inputSettings(props)
let emit = defineEmits(["input", "update:modelValue"])
let {modelValue} = toRefs(props)
watch(modelValue, (v)=>{
        emit("input", v)
        if(props.rules){
            validate(v)
        }
    })
  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }
//move this to the global file
interface currentTheme {
  [key: string]: any
}
const theme:currentTheme = inject('theme')
const colorMode:Ref<string> = inject('colorMode')
watch(()=>colorMode.value,(v)=>{
    forceRerender()
})


const uniqueCompId = generateRandomUniqueID()
//ADD VARIANT LOGIC
</script>
<style>

.form-box{
  position:relative;
  width:50%;
  margin:20px 0;
  padding:0;
}
.form-input {
  position: relative;
  width:100%;
  border:none;
  border: 1px solid gray;
  border-radius:5px;
  padding: 16px 20px;
  font-size:22px;
  color:gray;
}
.form-input:placeholder-shown + .label{
  visibility: hidden;
  opacity: 0;
  transform: translateX(19px) translateY(-28px);
  transition: all .4s ease;
}
.label{
  display:inline-block;
  padding:0 5px;
  font-size:22px;
  transition: all 0.4s ease;
  transform: translateX(16px) translateY(-70px);
  opacity:1;
  background-color:#fff;
}
span.error{
  padding: 0;
  color: red;
  display:block;
  transform: translateX(4px) translateY(-20px);
}
/*
.form-input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

.form-input:valid{
  background-image: linear-gradient(to right, green, lightgreen);
}*/
</style>