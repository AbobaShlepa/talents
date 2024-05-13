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
}

@media (pointer: coarse) {
  .center {
    overflow-y: auto;
    display: block;
    height: auto;
  }
}
</style>
