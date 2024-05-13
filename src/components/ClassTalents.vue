<script setup lang='ts'>
import TalentTree from './TalentTree.vue';

const { treeIds } = defineProps<{
  treeIds: number[],
}>();
</script>

<template>
  <img
    src="https://r4.wallpaperflare.com/wallpaper/260/652/937/world-of-warcraft-rogue-wallpaper-92d152f0bda6ae6baab8b295f0e82902.jpg" />
  <div class="tree-container">
    <TalentTree v-for="id in treeIds" :id="id" :key="id" />
  </div>
</template>

<style scoped>
.tree-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}

@media (pointer: coarse) {
  .tree-container {
    display: flex;
    flex-direction: column;
  }
}

img {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}
</style>