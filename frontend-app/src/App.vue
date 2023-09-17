<template>
  <c-theme-provider>
    <c-main-bar position="fixed" top="0px">
      <c-button v-if="$route.path !== '/'" @click="$router.go(-1)" variant="unstyled" :leftIcon="PhArrowLeft" >tilbake</c-button>
      <c-container v-row:nowrap width="100%"   >
      <div id="logo">LOGO</div>
      <div id="main-bar-action"></div>
      </c-container>
    </c-main-bar>
    <c-main ><router-view></router-view></c-main>
  </c-theme-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {PhArrowLeft} from '@phosphor-icons/vue'
</script>
<style>
#main-bar-action{
  width: 100%;
  min-width: min-content;
  
}
#logo{
  width: min-content;
  max-width: 200px;
}

</style>

