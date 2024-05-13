<script setup lang='ts'>
import { useTalent } from '@/composables/talent';
import TalentTooltip from './TalentTooltip.vue';
import TalentItem from './TalentItem.vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
const { id } = defineProps<{ id: number }>();
const { increasePoints, decreasePoints } = useTalent(id);
const el = ref(null);
onClickOutside(el, () => onClosed());

const shown = ref(false);
const show = () => shown.value = true;
const hide = () => shown.value = false;

const onClick = (e: Event) => {
  e.preventDefault();
  if (!shown.value) {
    show();
    return;
  }
  increasePoints();
}

const onClosed = () => {
  hide();
}
</script>

<template>
  <div class="mobile-wrap" ref="el">
    <div @click="onClick" @closed="onClosed">
      <TalentItem :id />
    </div>
    <TalentTooltip :id v-if="shown" :on-decrease="decreasePoints" />
  </div>
</template>

<style scoped>
.desktop-wrap {
  position: relative;
  width: 54px;
  height: 54px;
}
</style>