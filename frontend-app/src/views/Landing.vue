<template>
    <c-container padding-top="100px">
        <c-alert v-if="!listOfDocuments.every(d => d.confirmed === true)" rounded="xl" variant="information" 
            title="Velkommen til dine dokumenter">
            <c-text as="p" :dark="{
                color: 'blue'
            }" color="red">
                Pass på at du har tid til å fullføre alle signeringsoppgaver du har fått før du lukker vinduet!
            </c-text>
        </c-alert>
        <c-alert v-else variant="success">Alle dokumentene er åpnet og du er klar til å signere</c-alert>
       <c-text as="span"  :dark="{
                color: 'blue'
            }" color="red" padding="16px">Nye dokumenter til signering</c-text>
        <c-card v-for="(pdf,i) in listOfDocuments" :key="'pdf'+i"  border="solid 1px lightblue!important">
            <c-card-title>{{ pdf.title }}</c-card-title>
            <c-card-content v-row:no-margin>
                <c-text v-col="'xs6'" as="p">{{ pdf.date }}</c-text>
                <c-button v-if="pdf.confirmed == false" variant="primary" rounded="xl" position="absolute" right="10px" top="20%" @click="()=> $router.push('/document?id='+i)" >Åpne dokument</c-button>
                <c-button v-else="pdf.confirmed == false" variant="unstyled" rounded="xl" position="absolute" right="10px" top="20%" @click="()=> $router.push('/document?id='+i)" >Åpnet</c-button>
            </c-card-content>
        </c-card>
        <c-button variant="primary" :leftIcon="PhAlien" rounded="xl" :isDisabled="!listOfDocuments.every(d => d.confirmed === true)" @click="()=> $router.push('/signing-method')" >Avslå</c-button>
        <c-button variant="primary" :leftIcon="PhAlien" rounded="xl" :isDisabled="!listOfDocuments.every(d => d.confirmed === true)" @click="()=> $router.push('/signing-method')" >Godkjenn</c-button>
    </c-container>
</template>
<script setup lang="ts">
import type { PdfDocument } from '@/vuex/store';
import { ref } from 'vue';
import { useStore } from 'vuex'
import {PhAlien} from '@phosphor-icons/vue'
const store = useStore()

const listOfDocuments = ref<PdfDocument[]>(store.state.documents.map((obj:PdfDocument) => ({
  title: obj.title,
  url: obj.url,
  date: obj.date,
  confirmed: obj.confirmed 
})));

</script>