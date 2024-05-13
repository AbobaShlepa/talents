<script setup lang='ts'>
import { useTalent } from '@/composables/talent';
import TalentTooltip from './TalentTooltip.vue';
import TalentItem from './TalentItem.vue';
import { ref } from 'vue';
const { id } = defineProps<{ id: number }>();
const { increasePoints, decreasePoints } = useTalent(id);

const shown = ref(false);
const show = () => shown.value = true;
const hide = () => shown.value = false;

const onLeftClick = (e: Event) => {
  e.preventDefault();
  increasePoints();
}

const onRightClick = (e: Event) => {
  e.preventDefault();
  decreasePoints()
}

</script>

<template>
  <div class="desktop-wrap">
    <div @click.left="onLeftClick" @click.right="onRightClick" @mouseenter="show" @mouseleave="hide">
      <TalentItem :id />
    </div>
    <TalentTooltip :id v-if="shown" :on-close="null" :on-decrease="null" />
  </div>
</template>

<style scoped>
.desktop-wrap {
  position: relative;
  width: 54px;
  height: 54px;
}
</style>