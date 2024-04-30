import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

let counter = 1;
const defaultState: ITalent[] = [
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 3,
    parentTalentId: null,
    pointsInTreeRequired: 0,
    imageUrl: '',
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentId: null,
    pointsInTreeRequired: 0,
    imageUrl: '',
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentId: null,
    pointsInTreeRequired: 0,
    imageUrl: '',
  },
];

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

export interface ITalent {
  id: number;
  pointsCurrent: number;
  pointsTotal: number;
  parentTalentId: number | null;
  pointsInTreeRequired: number;
  imageUrl: string;
}

export default useTalentStore;
