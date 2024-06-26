import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import defaultState, { type ITalent } from './data/defaultTalents';
import defaultTalentTrees from './data/defaultTalentTrees';

const useTalentStore = defineStore('talents', () => {
  const talentTrees = defaultTalentTrees;
  const talents = ref<ITalent[]>(defaultState);
  const pointsMax = 41;

  const getById = computed(() => (id: number) => talents.value.find(x => x.id === id)!);
  const getTalentTree = computed(() => (id: number) => talentTrees.find(x => x.id === id)!);

  const getByName = computed(
    () => (talentName: string) => talents.value.find(x => x.name === talentName)!
  );

  const canDecrease = computed(() => (talentRow: number, talentTree: number) => {
    const filteredTalents = talents.value.filter(
      x => x.talentTree === talentTree && x.talentRow > talentRow
    );
    return filteredTalents.every(x => x.pointsCurrent === 0);
  });

  const getPointsInTree = computed(() => (talentTree: number) => {
    return talents.value
      .filter(x => x.talentTree === talentTree)
      .map(x => x.pointsCurrent)
      .reduce((sum, current) => (sum += current), 0);
  });

  const enoughPoints = computed(() => () => {
    return pointsMax > talents.value
    .map(x => x.pointsCurrent)
    .reduce((sum, current) => (sum += current), 0);
  })

  function resetTree(talentTree: number) {
    talents.value
      .filter(x => x.talentTree === talentTree)
      .forEach(x => {
        x.pointsCurrent = 0;
      });
  }

  const getChild = (id: number) => {
    const talent = talents.value.find(x => x.id === id)!;

    return talents.value.find(x => x.parentTalentName === talent.name);
  }

  return {
    talents,
    talentTrees,

    resetTree,

    getById,
    getByName,
    canDecrease,
    getPointsInTree,
    getTalentTree,
    enoughPoints,
    getChild
  };
});

export default useTalentStore;
