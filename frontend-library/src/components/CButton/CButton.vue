<template>
    <button v-style-setup="$.type, $attrs" class="CButton" ><slot/></button>
</template>
<script setup lang="ts">
import {ref, inject, watch, Ref, computed} from 'vue'
import createButtonStyle from './utils/button.styles'
import type {ButtonProps} from './utils/button.props'
import buttonProps from './utils/button.props';
const {variant= 'primary', ...prop} = defineProps<ButtonProps>()

interface MyObject {
  [key: string]: any;
}
const themeStyle: MyObject = inject('theme')
const colorMode:Ref<string> = inject('colorMode')

let themeColors = computed({
    get(){
        console.log(variant, "TTTTTTTT", themeStyle)

        return themeStyle.CButton[variant]
    },
    set(e){
        return e
    }
})
let baseStyle = ref(createButtonStyle({...prop, colors: themeColors.value, colorMode: colorMode.value}))
watch(()=>themeStyle, (v)=>{
    baseStyle.value = createButtonStyle({...prop, colors: themeColors.value, colorMode: colorMode.value})
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

</style>
