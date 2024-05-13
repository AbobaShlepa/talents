<script setup lang='ts'>
import { provide } from 'vue';
import { useTalent } from '@/composables/talent';

const { id } = defineProps<{ id: number }>();
const { talent, talentActive, getChild } = useTalent(id);
const child = getChild(id);
const rowDifference = child ? child.talentRow - talent.value.talentRow : 0;
const positionDifference = child ? child.position - talent.value.position : 0;
provide('talentId', id);
</script>

<template>
  <div :id="`talent_${id}`" class="talent border" v-bind:class="{
    disabled: !talentActive,
    available: talent.pointsCurrent === 0,
    started: talent.pointsCurrent > 0,
    hasParent: talent.parentTalentName !== null,
    'child-short': child && rowDifference === 1 && positionDifference === 0,
    'child-long': child && rowDifference === 2 && positionDifference === 0,
    'child-right': child && rowDifference === 1 && positionDifference === 1,
  }">
    <img class="talent-icon" v-bind:src="talent.imageUrl" />
    <button class="points border">
      {{ talent.pointsCurrent }}/{{ talent.pointsTotal }}
    </button>
  </div>
</template>

<style scoped>
* {
  --size: 46px;
}

.talent {
  width: var(--size);
  height: var(--size);
  position: relative;
  user-select: none;
  -webkit-user-select: none;
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

.hasParent::before {
  content: '\25BA';
  position: absolute;
  transform: translateY(-100%) translateX(100%) rotate(90deg);
  color: white;
  font-size: 1rem;
}

.child-short::after {
  content: '';
  position: absolute;
  background-color: white;
  height: 15px;
  width: 3px;
  transform: translate(-23px, 45px);
}

.child-long::after {
  content: '';
  position: absolute;
  background-color: white;
  height: 90px;
  width: 3px;
  transform: translate(-23px, 45px);
}

.child-right::after {
  content: '';
  position: absolute;
  border-top: 3px solid white;
  border-right: 3px solid white;
  height: 35px;
  width: 40px;
  transform: translate(0, 23px);
}
</style>