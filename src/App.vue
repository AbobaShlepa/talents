<script setup lang="ts">
import TalentItem from './components/TalentItem.vue';
</script>

<template>
  <TalentItem :id="1" :points-total="3" :depends-on="null" />
  <TalentItem :id="2" :points-total="3" :depends-on="1" />
</template>

<style scoped></style>
