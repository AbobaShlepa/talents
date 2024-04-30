import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import defaultState, { type ITalent } from './data/defaultTalents';

const useTalentStore = defineStore('talents', () => {
  const talents = ref<ITalent[]>(defaultState);

  const getById = computed(() => (id: number) => talents.value.find(x => x.id === id)!);

  const getByParentId = computed(
    () => (parentTalentId: number) => talents.value.find(x => x.parentTalentId === parentTalentId)!
  );

  return {
    talents,

    getById,
    getByParentId,
  };
});

export default useTalentStore;
