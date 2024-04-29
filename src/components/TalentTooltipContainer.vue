<script setup lang='ts'>
import TalentTooltip from './TalentTooltip.vue';
</script>

<template>
  <div class="tooltip">
    <slot name="content"></slot>
    <div class="tooltip-content">
      <slot name="tooltip">
        <TalentTooltip />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltip-content {
  visibility: hidden;
  width: fit-content;
  min-width: 250px;
  border-radius: 6px;
  padding: 5px;

  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltip-content {
  visibility: visible;
}
</style>