<script setup lang='ts'>
import useTalentStore from '@/state/TalentsStore';
import { computed, inject, provide, ref } from 'vue';
import TalentTooltip from './TalentTooltipContainer.vue';

const { id } = defineProps<{
  id: number,
}>();

provide('talentId', id);

const talentStore = useTalentStore();
const { getById, getByName, canDecrease, getPointsInTree, enoughPoints } = talentStore;
const talent = ref(getById(id));
const talentTreeId = inject<number>('talentTreeId')!;

const parentTalent = talent.value.parentTalentName ? getByName(talent.value.parentTalentName) : null;

const talentActive = computed(() => {
  const pointsInTreeRequired = talent.value.talentRow * 5 - 5;
  return pointsInTreeRequired <= getPointsInTree(talentTreeId) &&
    (parentTalent === null || parentTalent.pointsCurrent === parentTalent.pointsTotal);
})

const onLeftClick = (e: Event) => {
  e.preventDefault();
  if (!talentActive.value || !enoughPoints()) return;

  if (talent.value.pointsCurrent < talent.value.pointsTotal) {
    talent.value.pointsCurrent++;
  }
}

const onRightCLick = (e: Event) => {
  e.preventDefault();
  if (!talentActive.value || !canDecrease(talent.value.talentRow, talent.value.talentTree)) {
    return;
  }

  if (talent.value.pointsCurrent > 0) {
    talent.value.pointsCurrent--;
  }
}

</script>

<template>
  <TalentTooltip>
    <template #content>
      <div :id="`talent_${id}`" class="talent border" @click.left="onLeftClick" @click.right="onRightCLick"
        v-bind:class="{
          disabled: !talentActive,
          available: talent.pointsCurrent === 0,
          started: talent.pointsCurrent > 0
        }">
        <img class="talent-icon" v-bind:src="talent.imageUrl" />
        <button class="points border">
          {{ talent.pointsCurrent }}/{{ talent.pointsTotal }}
        </button>
      </div>
    </template>
  </TalentTooltip>
</template>

<style scoped>
* {
  --size: 46px;
}

.talent {
  width: var(--size);
  height: var(--size);
  position: relative;
}

.talent-icon {
  width: var(--size);
  height: var(--size);
  border-radius: 15%;
}

.points {
  all: unset;
  position: absolute;
  bottom: -10px;
  right: -10px;
  color: #ABC;
  background-color: #111;
  user-select: none;
}

.disabled {
  filter: grayscale(100%);
}

.border {
  border-radius: 15%;
}

.available {
  border: 1px solid #209e00;
}

.started {
  border: 1px solid gold;
}
</style>