<script setup lang='ts'>
import useTalentStore from '@/state/TalentsStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { id } = defineProps<{
  id: number
}>();

const store = useTalentStore();
const { talents } = storeToRefs(store);
const { onReady, onNotReady } = store;
const talent = ref(talents.value.find(x => x.id === id)!);

const pointsCurrent = ref(0);

const onLeftClick = (e: Event) => {
  e.preventDefault();
  if (!talent.value.enabled) return;

  if (pointsCurrent.value < talent.value.pointsTotal) {
    pointsCurrent.value++;

    if (pointsCurrent.value === talent.value.pointsTotal) {
      onReady(talent.value.id);
    }
  }
}

const onRightCLick = (e: Event) => {
  e.preventDefault();
  if (!talent.value.enabled) return;

  if (pointsCurrent.value > 0) {
    pointsCurrent.value--;
    onNotReady(talent.value.id);
  }
}

</script>

<template>
  <div class="talent" @click.left="onLeftClick" @click.right="onRightCLick"
    v-bind:class="{ disabled: !talent.enabled }">
    <button class="points">
      {{ pointsCurrent }}/{{ talent.pointsTotal }}
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