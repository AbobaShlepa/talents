<script setup lang="ts">
import TalentRow from './components/TalentRow.vue';
</script>

<template>
  <TalentRow :talent-ids="[1, 2]" />
  <TalentRow :talent-ids="[3, 4]" />
</template>

<style scoped></style>
