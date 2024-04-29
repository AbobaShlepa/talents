<script setup lang='ts'>
import useTalentTreeStore from '@/state/TalentTreeStore';
import TalentRow from './TalentRow.vue';
import { provide, ref } from 'vue';
const { id } = defineProps<{
  id: number
}>();
const { getTalentTreeById } = useTalentTreeStore();
const talentTree = ref(getTalentTreeById(id));
provide('talentTreeId', id);

</script>

<template>
  <div class="tree">
    <div class="name-container">
      {{ talentTree.name }}
    </div>
    <div class="points-container">
      {{ talentTree.points }}
    </div>
    <div class="row-container">
      <TalentRow :talent-ids="[1, 2]" />
      <TalentRow :talent-ids="[3, 4]" />
      <TalentRow :talent-ids="[5, 6]" />
    </div>
  </div>
</template>

<style scoped>
.tree {
  border: 1px solid black;
  width: 310px;
  height: fit-content;
  border-radius: 25px;
  background-color: azure;
  padding: 20px;
  position: relative;
}

.row-container {
  display: flex;
  flex-direction: column;
}

.name-container {
  text-align: center;
}

.points-container {
  border: 1px solid black;
  border-radius: 25%;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;

  position: absolute;
  top: 10px;
  right: 10px;
  user-select: none;
}
</style>