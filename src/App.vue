<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <AppHeader />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import AppHeader from './components/layout/AppHeader.vue'

// export default {
//   name: 'App',
//   components: {
//     AppHeader,
//   }
// }
</script>

<style>
#app {
  text-align: center;
}
</style>
