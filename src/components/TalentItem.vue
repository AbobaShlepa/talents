<script setup lang='ts'>
import useTalentStore from '@/state/TalentsStore';
import { ref } from 'vue';

const { id } = defineProps<{
  id: number
}>();

const store = useTalentStore();
const { getById, onReady, onNotReady, getByDependOn } = store;
const talent = ref(getById(id));

const onLeftClick = (e: Event) => {
  e.preventDefault();
  if (!talent.value.enabled) return;

  if (talent.value.pointsCurrent < talent.value.pointsTotal) {
    talent.value.pointsCurrent++;

    if (talent.value.pointsCurrent === talent.value.pointsTotal) {
      onReady(talent.value.id);
    }
  }
}

const onRightCLick = (e: Event) => {
  e.preventDefault();
  if (!talent.value.enabled || !canDecrease()) {
    return;
  }

  if (talent.value.pointsCurrent > 0) {
    talent.value.pointsCurrent--;
    onNotReady(talent.value.id);
  }
}

function canDecrease() {
  const dependentTicket = getByDependOn(id);
  if (!dependentTicket) {
    return true;
  }

  return dependentTicket.pointsCurrent === 0;
}

</script>

<template>
  <div class="talent" @click.left="onLeftClick" @click.right="onRightCLick"
    v-bind:class="{ disabled: !talent.enabled }">
    <button class="points">
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
</style>