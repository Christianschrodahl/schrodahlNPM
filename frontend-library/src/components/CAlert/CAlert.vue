<template>
    <component :is="'div'" v-style-setup="$.type, $attrs, uniqueCompId" :data-id="uniqueCompId" class="CAlert" >
        
        <c-icon v-if="variantIcon" :as="variantIcon" margin-right="12px" size="24px"/>
        <div >
        <c-text v-if="title" as="h4">{{ title }}</c-text>
        <slot />
        </div>
    </component>
</template>
<script setup lang="ts">
import generateRandomUniqueID from '@/utils/uniqueID';
import { Ref, computed, inject, ref, watch } from 'vue';
import createAlertStyle from './utils/alert.styles'
import type {AlertProps} from './utils/alert.props'
import CIcon from '../CIcon/CIcon.vue';
import CText from '../CText/CText.vue';
import {PhInfo, PhCheckCircle} from '@phosphor-icons/vue'
//move this to the global file
interface currentTheme {
  [key: string]: any
}
const {variant= 'information',as="div", ...prop} = defineProps<AlertProps>()
const theme:currentTheme = inject('theme')
const colorMode:Ref<string> = inject('colorMode')

//TODO ADD VAIRANT LOGIC LIKE BUTTONS

const uniqueCompId = generateRandomUniqueID()
let themeColors = computed({
    get(){
        return theme.CAlert[variant]
    }, 
    set(e){
        return e
    }
})
let baseStyle = ref(createAlertStyle({...prop, colors: themeColors.value, colorMode: colorMode.value}))
watch(()=>theme, (v)=>{
    baseStyle.value = createAlertStyle({...prop, colors: themeColors.value, colorMode: colorMode.value})
},{deep: true})
let variantIcon = computed({
    get(){
        switch (variant) {
            case 'information':
                return PhInfo;
            case 'success':
                return PhCheckCircle;
        
            default:
                break;
        }
    },
    set(v){
        return v
    }
})
</script>
<style scoped>
.CAlert{
    display: flex;
    overflow: hidden;
    overflow-wrap: break-word;
    position: relative;
    padding: 16px;
    margin: 10px;
    background: v-bind('baseStyle.bg');
    color: v-bind('baseStyle.color');
    text-decoration: none;
    transition-duration: .28s;
    transition-property: box-shadow,opacity,background;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    z-index: 0;
    border-color: rgba(0,0,0, 0.5 );
    border-style: solid;
    border-width: 0;
    border-radius: v-bind('baseStyle.borderRadius');
}
</style>