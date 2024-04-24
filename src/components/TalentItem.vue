<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps<{
  pointsTotal: number
}>();

const pointsCurrent = ref(0);

const onLeftClick = (e: Event) => {
  e.preventDefault();
  if (pointsCurrent.value < props.pointsTotal) {
    pointsCurrent.value++;
  }
}

const onRightCLick = (e: Event) => {
  e.preventDefault();
  if (pointsCurrent.value > 0) {
    pointsCurrent.value--;
  }
}

</script>

<template>
  <div class="talent" @click.left="onLeftClick" @click.right="onRightCLick">
    <button class="points">
      {{ pointsCurrent }}/{{ pointsTotal }}
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
</style>