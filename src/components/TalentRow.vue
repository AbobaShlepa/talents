<script setup lang='ts'>
import TalentItem from './TalentItem.vue';

defineProps<{
  talentIds: number[],
  talentTreeId: number
}>();
</script>

<template>
  <div class="row">
    <TalentItem v-for="talentId in talentIds" :id="talentId" v-bind:key="talentId" :talent-tree-id="talentTreeId" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 310px;
}
</style>