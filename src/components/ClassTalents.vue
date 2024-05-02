<script setup lang='ts'>
import TalentTree from './TalentTree.vue';

const { treeIds } = defineProps<{
  treeIds: number[],
}>();
</script>

<template>
  <div class="tree-container">
    <TalentTree v-for="id in treeIds" :id="id" :key="id" />
  </div>
</template>

<style scoped>
.tree-container {
  display: flex;
  flex-direction: row;
}
</style>