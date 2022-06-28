<script setup>
</script>

<template><h1 class="text-ckgreen hover:text-ckgreen_dark_2 text-3xl font-bold underline">{{ msg }}</h1>
  <button class="btn btn-primary">Button</button>
  <div class="alert alert-success shadow-lg"><span>Hello world</span>>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
</style>
