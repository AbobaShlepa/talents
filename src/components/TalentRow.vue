<script setup lang='ts'>
import TalentItemDesktop from './TalentItemDesktop.vue';
import TalentItemMobile from './TalentItemMobile.vue';
import useMobileDetection from '@/composables/mobile';

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
      <div v-if="talentInfo.find(x => x.position === position) === undefined" class="empty"></div>
      <TalentItemMobile v-else-if="useMobileDetection()" :id="talentInfo.find(x => x.position === position)!.id" />
      <TalentItemDesktop v-else :id="talentInfo.find(x => x.position === position)!.id" />
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
  width: 54px;
  height: 54px;
}
</style>