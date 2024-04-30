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
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_gouge.jpg',
    talentRow: 1,
    talentTree: 1,
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentId: null,
    pointsInTreeRequired: 0,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_ritualofsacrifice.jpg',
    talentRow: 1,
    talentTree: 1,
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentId: null,
    pointsInTreeRequired: 0,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_nature_invisibilty.jpg',
    talentRow: 1,
    talentTree: 1,
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentId: null,
    pointsInTreeRequired: 5,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_marksmanship.jpg',
    talentRow: 2,
    talentTree: 1,
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
  talentRow: number;
  talentTree: number;
}

export default useTalentStore;
