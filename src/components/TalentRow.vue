<script setup lang='ts'>
import TalentItem from './TalentItem.vue';

defineProps<{
  talentIds: number[],
}>();
</script>

<template>
  <div class="row">
    <TalentItem v-for="talentId in talentIds" :id="talentId" v-bind:key="talentId" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 250px;
  justify-content: space-evenly;
}
</style>