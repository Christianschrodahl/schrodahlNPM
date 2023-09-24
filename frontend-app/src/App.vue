<template>
  <c-theme-provider>
    <c-main-bar position="fixed" top="0px" min-height="84px">
      <c-button v-show="$route.path !== '/'" @click="$router.go(-1)" variant="unstyled" :leftIcon="PhArrowLeft" >tilbake</c-button>
      <c-container v-row:nowrap width="100%" max-width="800px"   >
      <div id="logo">LOGO</div>
      <div id="main-bar-action"></div>
      </c-container>
      <c-toggle
      v-model="lightMode"
      size="xl"
      :trueIcon="PhSun"
      >
      <template #falseIcon>
        <PhMoon color="pink"/>
      </template>
      </c-toggle>
    </c-main-bar>
    <c-main >
      <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
      </transition>
      </router-view>
    </c-main>
  </c-theme-provider>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {PhArrowLeft, PhMoon, PhSun} from '@phosphor-icons/vue'
import { ref, getCurrentInstance, watch  } from 'vue';

const instance = getCurrentInstance()

const lightMode = ref(instance?.appContext.config.globalProperties?.$colorMode == 'light' ? true : false)
watch(lightMode, (v)=>{
  instance?.appContext.config.globalProperties?.$toggleTheme()
})
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

