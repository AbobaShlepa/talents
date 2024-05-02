<script setup lang='ts'>
import TalentRow from './TalentRow.vue';
import { onMounted, provide } from 'vue';
import drawLines from '@/helpers/arrow';
import useTalentStore from '@/state/TalentsStore';
import Enumerable from 'linq';

const { id } = defineProps<{
  id: number
}>();
provide('talentTreeId', id);

const talentStore = useTalentStore();
const talents = talentStore.talents.filter(x => x.talentTree === id);
const talentRowsGrouped = Enumerable.from(talents).groupBy(x => x.talentRow).toDictionary(x => x.key());
const rows = talentRowsGrouped.toEnumerable().select(x => x.key).toArray();

const talentTree = talentStore.getTalentTree(id);

const getTalents = (row: number) => {
  return talentRowsGrouped.get(row).select(x => x.id).toArray();
}
const talentIds = talents.map(x => x.id);


onMounted(() => {
  drawLines(talentIds);
});

</script>

<template>
  <div class="tree">
    <div class="name-container">
      {{ talentTree.name }}
    </div>
    <div class="points-container">
      {{ talentStore.getPointsInTree(id) }}
    </div>
    <div class="row-container">
      <TalentRow v-for="row in rows" v-bind:key="row" :talent-ids="getTalents(+row)" />
    </div>
    <button class="reset" @click="() => talentStore.resetTree(id)">
      X
    </button>
  </div>
</template>

<style scoped>
.tree {
  border: 1px solid black;
  width: fit-content;
  height: fit-content;
  border-radius: 25px;
  background-color: azure;
  padding: 20px;
  position: relative;
  user-select: none;
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
}

.reset {
  bottom: 10px;
  right: 10px;
  color: red;
  position: absolute;
}
</style>