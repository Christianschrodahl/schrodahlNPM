<template>
    <component :is="as ?? 'button'" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CButton" :disabled='isDisabled' >
    <c-icon v-if="leftIcon" :as="leftIcon" margin-right="8px" />
    <slot/>
    <c-icon v-if="rightIcon" :as="rightIcon" margin-left="8px" />
    </component>
</template>
<script setup lang="ts">
import {ref, inject, watch, Ref, computed} from 'vue'
import createButtonStyle from './utils/button.styles'
import type {ButtonProps} from './utils/button.props'
import CIcon from '../CIcon/CIcon.vue';
import generateRandomUniqueID from '@/utils/uniqueID';
const {variant= 'primary', as='button', ...prop} = defineProps<ButtonProps>()

interface MyObject {
  [key: string]: any;
}
const themeStyle: MyObject = inject('theme')
const colorMode:Ref<string> = inject('colorMode')
const uniqueCompId = generateRandomUniqueID()
let themeColors = computed({
    get(){
        return themeStyle.CButton[variant]
    },
    set(e){
        return e
    }
})
let baseStyle = ref(createButtonStyle({...prop, colors: themeColors.value, colorMode: colorMode.value}, themeStyle))
watch(()=>themeStyle, (v)=>{
    baseStyle.value = createButtonStyle({...prop, colors: themeColors.value, colorMode: colorMode.value}, themeStyle)
},{deep: true})

</script>
<style scoped>

button {
    line-height: v-bind('baseStyle.lineHeight');
    padding: v-bind('baseStyle.padding');
    letter-spacing: v-bind('baseStyle.letterSpacing');
    height: v-bind('baseStyle.height');
    margin: v-bind('baseStyle.margin');
    text-align: v-bind('baseStyle.textAlign');
    border-radius: v-bind('baseStyle.borderRadius');
    font-size:v-bind('baseStyle.fontSize');
    width: v-bind('baseStyle.width');
    max-width: v-bind('baseStyle.maxWidth');
    font-weight: v-bind('baseStyle.fontWeight');
    box-sizing: border-box;
    border-color: transparent;
    box-shadow: 0px 0px 0px 0px rgba(255, 166, 0, 0);
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-transition: all 250ms;
    transition: all 250ms;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    line-height: 1.2;
    outline: 2px solid transparent;
    outline-offset: 2px;
    -webkit-text-decoration: none;
    text-decoration: none;
    background: v-bind('baseStyle.bg');
    color: v-bind('baseStyle.color');
    
}
button {
    -webkit-transition: all 250ms;
    transition: all 250ms;
}

button:hover {
    background: v-bind('baseStyle._hover.bg');
    color: v-bind('baseStyle._hover.color');
}
button[aria-disabled=true],
button[data-disabled],button[disabled] {
        opacity: .4;
        cursor: not-allowed;
        box-shadow: none
}
.CButton:hover{
    cursor: pointer;
}
</style>
