import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import defaultState, { type ITalent } from './data/defaultTalents';

const useTalentStore = defineStore('talents', () => {
  const talents = ref<ITalent[]>(defaultState);

  const getById = computed(() => (id: number) => talents.value.find(x => x.id === id)!);

  const getByName = computed(
    () => (talentName: string) => talents.value.find(x => x.name === talentName)!
  );

  const canDecrease = computed(() => (talentRow: number, talentTree: number) => {
    const filteredTalents = talents.value.filter(
      x => x.talentTree === talentTree && x.talentRow > talentRow
    );
    return filteredTalents.every(x => x.pointsCurrent === 0);
  });

  return {
    talents,

    getById,
    getByName,
    canDecrease,
  };
});

export default useTalentStore;
