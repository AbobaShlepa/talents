<script setup lang='ts'>
import TalentTree from './TalentTree.vue';

const { treeIds } = defineProps<{
  treeIds: number[],
}>();
</script>

<template>
  <div class="background">
    <div class="tree-container">
      <TalentTree v-for="id in treeIds" :id="id" :key="id" />
    </div>
  </div>
</template>

<style scoped>
.tree-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
}

@media (pointer: coarse) {
  .tree-container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    display: block;
  }
}

.background {
  background-image: url('https://r4.wallpaperflare.com/wallpaper/260/652/937/world-of-warcraft-rogue-wallpaper-92d152f0bda6ae6baab8b295f0e82902.jpg');
}
</style>