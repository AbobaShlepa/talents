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
		name: 'Improved Gouge',
    requires: null,
    descriptionTemplate: 'Increases the effect duration of your Gouge ability by {0} sec.',
    rankValues: [[0.5], [1], [1.5]],
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
		name: 'Improved Sinister Strike',
    requires: null,
    descriptionTemplate: 'Reduces the Energy const of your Sinister Strike ability by {0}.',
    rankValues: [[3], [5]]
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
		name: 'Lightning Reflexes',
    requires: null,
    descriptionTemplate: 'Increases your Dodge chance by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]]
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
		name: 'Precision',
    requires: null,
    descriptionTemplate: 'Increases your change to hit with melee weapons by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]]
  },
];

export default defaultState;

export interface ITalent {
  id: number;
	name: string
  pointsCurrent: number;
  pointsTotal: number;
  parentTalentId: number | null;
  pointsInTreeRequired: number;
  imageUrl: string;
  talentRow: number;
  talentTree: number;
  requires: string | null
  descriptionTemplate: string
  rankValues: any[][] | []
}