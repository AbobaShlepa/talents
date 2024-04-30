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
const { getById, getByParentId } = talentStore;
const talent = ref(getById(id));
const talentTreeId = inject<number>('talentTreeId')!;

const talentTreeStore = useTalentTreeStore();
const { getTalentTreeById, incrementPoints, decrementPoints } = talentTreeStore;
const talentTree = ref(getTalentTreeById(talentTreeId));

const parentTalent = talent.value.parentTalentId ? getById(talent.value.parentTalentId) : null;

const talentActive = computed(() => {
  return talent.value.pointsInTreeRequired <= talentTree.value.points &&
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
  if (!talentActive.value || !canDecrease()) {
    return;
  }

  if (talent.value.pointsCurrent > 0) {
    talent.value.pointsCurrent--;
    decrementPoints(talentTreeId);
  }
}

function canDecrease() {
  const childTalent = getByParentId(id);
  if (!childTalent) {
    return true;
  }

  return childTalent.pointsCurrent === 0;
}

</script>

<template>
  <TalentTooltip>
    <template #content>
      <div :id="`talent_${id}`" class="talent border" @click.left="onLeftClick" @click.right="onRightCLick"
        v-bind:class="{
          disabled: !talentActive,
          available: talent.pointsCurrent === 0,
          started: talent.pointsCurrent > 0 && talent.pointsCurrent < talent.pointsTotal,
          completed: talent.pointsCurrent === talent.pointsTotal,
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
  width: 70px;
  height: 70px;
  background-color: red;
  position: relative;
}

.talent-icon {
  width: 70px;
  height: 70px;
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

.completed {
  border: 2px solid black;
}
</style>