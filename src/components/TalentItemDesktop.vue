<script setup lang='ts'>
import { useTalent } from '@/composables/talent';
import TalentTooltipContainer from './TalentTooltipContainer.vue';
import TalentItem from './TalentItem.vue';
const { id } = defineProps<{ id: number }>();
const { increasePoints, decreasePoints } = useTalent(id);

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
  <TalentTooltipContainer :id>
    <template #content>
      <div @click.left="onLeftClick" @click.right="onRightClick">
        <TalentItem :id />
      </div>
    </template>
  </TalentTooltipContainer>
</template>