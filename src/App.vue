<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
import Index from './views/Index.vue';
import Services from './views/Services.vue';
import Donate from './views/Donate.vue'
import Promotions from './views/Promotions.vue'
</script>

<template>
  <NavBar>
    <Promotions />
  </NavBar>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
