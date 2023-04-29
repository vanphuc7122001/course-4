<template>
  <header>
    <the-header/>
  </header>
  
  <main id="main">
    <router-view></router-view>
  </main>

  <footer>
    <the-footer/>
  </footer>
  
</template>

<script>

import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
#main{
  min-height: 617px;
}
</style>
