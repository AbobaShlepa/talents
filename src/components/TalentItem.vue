<script setup lang='ts'>
import useTalentTreeStore from '@/state/TalentTreeStore';
import useTalentStore from '@/state/TalentsStore';
import { computed, ref } from 'vue';

const { id, talentTreeId } = defineProps<{
  id: number,
  talentTreeId: number,
}>();

const talentStore = useTalentStore();
const { getById, getByParentId } = talentStore;
const talent = ref(getById(id));

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
  <div class="talent border" @click.left="onLeftClick" @click.right="onRightCLick"
    v-bind:class="{ disabled: !talentActive }">
    <button class="points border">
      {{ talent.pointsCurrent }}/{{ talent.pointsTotal }}
    </button>
  </div>
</template>

<style scoped>
.talent {
  width: 70px;
  height: 70px;
  background-color: red;
  position: relative;
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
  border: 1px solid gray;
  border-radius: 25%;
}
</style>