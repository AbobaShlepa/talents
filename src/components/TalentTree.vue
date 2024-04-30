<script setup lang='ts'>
import useTalentTreeStore from '@/state/TalentTreeStore';
import TalentRow from './TalentRow.vue';
import { onMounted, provide, ref } from 'vue';
import drawLines from '@/helpers/arrow';
import useTalentStore from '@/state/TalentsStore';
import Enumerable from 'linq';

const { id } = defineProps<{
  id: number
}>();
const { getTalentTreeById } = useTalentTreeStore();
const talentTree = ref(getTalentTreeById(id));
provide('talentTreeId', id);

const talentStore = useTalentStore();
const talents = talentStore.talents.filter(x => x.talentTree === id);
const talentRowsGrouped = Enumerable.from(talents).groupBy(x => x.talentRow).toDictionary(x => x.key());
const rows = talentRowsGrouped.toEnumerable().select(x => x.key).toArray();

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
      {{ talentTree.points }}
    </div>
    <div class="row-container">
      <TalentRow v-for="row in rows" v-bind:key="row" :talent-ids="getTalents(+row)" />
    </div>
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