<template>
    <form  ref="form">
        <slot />
    </form>
</template>
<script setup lang="ts" generic="T">
import {ref, computed, nextTick} from 'vue'
const form = ref()
const startValidation = ref(false)
const validate = computed({
    get(){
        if(startValidation.value){
            const isInvalidList = []
            const inputs = form.value?.elements
            for (let index = 0; index < inputs.length; index++) {
                const input = inputs[index];
                //Checking if there is any invalid field based on rule to input
                if(input?.__vue__?.isInvalid && input.__vue__?.isInvalid === true){
                    isInvalidList.push(true)
                }
                //If the input component doesn't have a isInvalid state
                //Validate the field with default dom validation
                if(!input.__vue__ == undefined && input.validity?.valid !== true){
                    isInvalidList.push(true)
                }
            }
            startValidation.value = false
            return isInvalidList.length === 0
        }
        startValidation.value = false
        return false
    },
    set(v){
        return v
    }
})
//start form validation
async function validation(){
    startValidation.value = true
    await nextTick()
    return validate.value

}

defineExpose({validation})

</script>