<script setup lang='ts'>
import { ref } from 'vue';
import TalentTooltip from './TalentTooltip.vue';
const shown = ref(false);
const show = () => shown.value = true;
const hide = () => shown.value = false;
</script>

<template>
  <div class="tooltip" @touchstart="show" @touchend="hide" @mouseover="show" @mouseleave="hide">
    <slot name="content"></slot>
    <div v-if="shown" class="right">
      <slot name=" tooltip">
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
  left: 70%;
  margin-left: 20px;
  transform: translate(0, -50%);
  padding: 10px 20px;
  color: #444444;
  position: absolute;
  z-index: 2;
}
</style>