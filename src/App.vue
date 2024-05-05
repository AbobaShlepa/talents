<script setup lang="ts">
import ClassTalents from './components/ClassTalents.vue';
</script>

<template>
  <div class="center">
    <ClassTalents :tree-ids="[1, 2, 3]" />
  </div>
</template>

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background-image: url('https://r4.wallpaperflare.com/wallpaper/260/652/937/world-of-warcraft-rogue-wallpaper-92d152f0bda6ae6baab8b295f0e82902.jpg');
}
</style>
