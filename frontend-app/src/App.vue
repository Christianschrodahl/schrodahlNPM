<template>
  <c-theme-provider>
    <c-main-bar >
      <c-button v-if="$route.path !== '/'" @click="$router.go(-1)" variant="primary" >tilbake</c-button>
      <c-container v-row width="100%"  >
      <div v-col:xs="8">LOGO</div>
      <div style="float:right" id="main-bar-action"></div>
      </c-container>
    </c-main-bar>
    <c-main ><router-view></router-view></c-main>
  </c-theme-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

