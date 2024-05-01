<script setup lang='ts'>
import useTalentStore from '@/state/TalentsStore';
import { inject, ref } from 'vue';
import TalentRequires from './TalentRequires.vue';

const id = inject<number>('talentId')!;

const { getById } = useTalentStore();
const talent = ref(getById(id));
const { name, requires, descriptionTemplate, rankValues } = getById(id);

function getDescription(points: number) {
  if (rankValues.length === 1) {
    return descriptionTemplate
  }

  const index = Math.max(0, points - 1);
  const values = rankValues[index];
  return formatString(descriptionTemplate, values);
}

const formatString = (template: string, ...args: any[]) => {
  return template.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof args[index] === 'undefined' ? match : args[index];
  });
}

</script>

<template>
  <div class="main">
    <div class="talent-name">{{ name }}</div>
    <div class="rank">Rank {{ talent.pointsCurrent }}/{{ talent.pointsTotal }}</div>
    <TalentRequires :id="id" />
    <div class="description">{{ getDescription(talent.pointsCurrent) }}</div>
    <div class="rank" v-if="talent.pointsCurrent !== 0 && talent.pointsCurrent !== talent.pointsTotal">
      <br />
      <div>Next rank:</div>
      <div class="description">
        {{ getDescription(talent.pointsCurrent + 1) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: rgba(0, 0, 0, 0.9);
  border: 2px solid #AAA;
  border-radius: 10%;
  padding: 10px;
  user-select: none;
}

.talent-name,
.rank{
  color: #FFF;
}

.description {
  color: goldenrod;
}
</style>