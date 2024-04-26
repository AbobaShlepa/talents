<script setup lang='ts'>
import TalentRow from './TalentRow.vue';
const { id } = defineProps<{
  id: number
}>();

</script>

<template>
  <div>
    <TalentRow :talent-ids="[1, 2]" :talent-tree-id="id" />
    <TalentRow :talent-ids="[3, 4]" :talent-tree-id="id" />
  </div>
</template>