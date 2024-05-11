<script setup lang='ts'>
import TalentRow, { type ITalentInfo } from './TalentRow.vue';
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
  return talentRowsGrouped.get(row).select<ITalentInfo>(x => ({ id: x.id, position: x.position })).toArray();
}
const talentIds = talents.map(x => x.id);

// onMounted(() => {
//   drawLines(talentIds);
// });

</script>

<template>
  <div class="tree" v-bind:style="{ 'background-image': 'url(' + talentTree.imageUrl + ')' }">
    <div class="name-container">
      {{ talentTree.name }} ({{ talentStore.getPointsInTree(id) }})
    </div>
    <div class="row-container">
      <TalentRow v-for="row in rows" v-bind:key="row" :talent-info="getTalents(+row)" />
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
  padding: 20px;
  position: relative;
  user-select: none;
  margin: 0 10px;
}

@media (pointer: coarse) {
  .tree {
    margin: 10px auto;
  }
}

.row-container {
  display: flex;
  flex-direction: column;
}

.name-container {
  text-align: center;
  color: white;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.reset {
  bottom: 10px;
  right: 10px;
  color: red;
  position: absolute;
}

.tree-image {
  position: absolute;
}
</style>