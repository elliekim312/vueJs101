<template>
  <div id="app">
    <AppHeader />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// Commented Out Bootstrap Nav Bar
import AppHeader from './components/layout/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
