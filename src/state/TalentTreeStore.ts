import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

let counter = 1;
const defaultTalentTrees: ITalentTree[] = [{ id: counter++, name: 'Combat', points: 0 }];

const useTalentTreeStore = defineStore('talentRow', () => {
  const talentTrees = ref(defaultTalentTrees);

  const getTalentTreeById = computed(
    () => (id: number) => talentTrees.value.find(x => x.id === id)!
  );

  function incrementPoints(talentTreeId: number) {
    const talentTree = talentTrees.value.find(x => x.id === talentTreeId)!;
    talentTree.points++;
  }

  function decrementPoints(talentTreeId: number) {
    const talentTree = talentTrees.value.find(x => x.id === talentTreeId)!;
    talentTree.points--;
  }

  return {
    talentTrees,

    incrementPoints,
    decrementPoints,

    getTalentTreeById,
  };
});

export interface ITalentTree {
  id: number;
  name: string;
  points: number;
}

export default useTalentTreeStore;
