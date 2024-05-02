<script setup lang='ts'>
import useTalentTreeStore from '@/state/TalentTreeStore';
import useTalentStore from '@/state/TalentsStore';
import { computed, inject, provide, ref } from 'vue';
import TalentTooltip from './TalentTooltipContainer.vue';

const { id } = defineProps<{
  id: number,
}>();

provide('talentId', id);

const talentStore = useTalentStore();
const { getById, getByName, canDecrease } = talentStore;
const talent = ref(getById(id));
const talentTreeId = inject<number>('talentTreeId')!;

const talentTreeStore = useTalentTreeStore();
const { getTalentTreeById, incrementPoints, decrementPoints } = talentTreeStore;
const talentTree = ref(getTalentTreeById(talentTreeId));

const parentTalent = talent.value.parentTalentName ? getByName(talent.value.parentTalentName) : null;

const talentActive = computed(() => {
  const pointsInTreeRequired = talent.value.talentRow * 5 - 5;
  return pointsInTreeRequired <= talentTree.value.points &&
    (parentTalent === null || parentTalent.pointsCurrent === parentTalent.pointsTotal);
})

const onLeftClick = (e: Event) => {
  e.preventDefault();
  if (!talentActive.value) return;

  if (talent.value.pointsCurrent < talent.value.pointsTotal) {
    talent.value.pointsCurrent++;
    incrementPoints(talentTreeId);
  }
}

const onRightCLick = (e: Event) => {
  e.preventDefault();
  if (!talentActive.value || !canDecrease(talent.value.talentRow, talent.value.talentTree)) {
    return;
  }

  if (talent.value.pointsCurrent > 0) {
    talent.value.pointsCurrent--;
    decrementPoints(talentTreeId);
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
.talent {
  width: 50px;
  height: 50px;
  background-color: red;
  position: relative;
}

.talent-icon {
  width: 50px;
  height: 50px;
  border-radius: 25%;
}

.points {
  all: unset;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: white;
  user-select: none;
}

.disabled {
  filter: grayscale(100%);
}

.border {
  border-radius: 25%;
}

.available {
  border: 2px solid #209e00;
}

.started {
  border: 2px solid gold;
}
</style>