<script setup lang='ts'>
import TalentItem from './TalentItem.vue';

defineProps<{
  talentInfo: ITalentInfo[]
}>();

const positions = [1, 2, 3, 4];

export interface ITalentInfo {
  id: number;
  position: number;
}
</script>

<template>
  <div class="row">
    <template v-for="position in positions" v-bind:key="position">
      <TalentItem v-if="talentInfo.find(x => x.position === position)" :id="talentInfo.find(x => x.position === position)!.id" />
      <div v-else class="empty"></div>
    </template>
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
.empty {
  width: 52.3px;
  height: 52.3px;
}
</style>