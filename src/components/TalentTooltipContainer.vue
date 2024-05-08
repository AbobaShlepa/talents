<script setup lang='ts'>
import TalentTooltip from './TalentTooltip.vue';
</script>

<template>
  <div class="tooltip">
    <slot name="content"></slot>
    <div class="right">
      <slot name="tooltip">
        <TalentTooltip />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  display: inline-block;
  position: relative;
  text-align: left;
}

.tooltip .right {
  min-width: 250px;
  top: 50%;
  left: 80%;
  margin-left: 20px;
  transform: translate(0, -50%);
  padding: 10px 20px;
  color: #444444;
  position: absolute;
  z-index: 2;
  display: none;
}

.tooltip:hover .right {
  display: block;
}
</style>