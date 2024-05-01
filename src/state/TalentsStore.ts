import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import defaultState, { type ITalent } from './data/defaultTalents';

const useTalentStore = defineStore('talents', () => {
  const talents = ref<ITalent[]>(defaultState);

  const getById = computed(() => (id: number) => talents.value.find(x => x.id === id)!);

  const getByName = computed(
    () => (talentName: string) => talents.value.find(x => x.name === talentName)!
  );

  const getChildByName = computed(
    () => (talentName: string) => talents.value.find(x => x.parentTalentName === talentName));

  return {
    talents,

    getById,
    getByName,
    getChildByName,
  };
});

export default useTalentStore;
