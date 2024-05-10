<script setup lang='ts'>
import { provide } from 'vue';
import TalentTooltip from './TalentTooltipContainer.vue';
import { useTalent } from '@/composables/talent';

const { id } = defineProps<{ id: number }>();
const { talent, talentActive } = useTalent(id);
provide('talentId', id);

</script>

<!-- <template>
  <TalentTooltip>
    <template #content>
      <div :id="`talent_${id}`" class="talent border" v-bind:class="{
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
</template> -->

<template>
  <div :id="`talent_${id}`" class="talent border" v-bind:class="{
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
</style>