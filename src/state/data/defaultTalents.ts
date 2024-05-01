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
    pointsTotal: 3,
    parentTalentId: null,
    pointsInTreeRequired: 5,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_backstab.jpg',
    talentRow: 2,
    talentTree: 1,
		name: 'Improved Backstab',
    requires: null,
    descriptionTemplate: 'Increases the critical strike chance of your Backstab ability by {0}%.',
    rankValues: [[10], [20], [30]]
  },
	{
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentId: null,
    pointsInTreeRequired: 5,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_parry.jpg',
    talentRow: 2,
    talentTree: 1,
		name: 'Deflection',
    requires: null,
    descriptionTemplate: 'Increases your parry chance by {0}%.',
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
    descriptionTemplate: 'Increases your chance to hit with melee weapons by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]]
  },
  {
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentId: null,
    pointsInTreeRequired: 10,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_shadowward.jpg',
    talentRow: 3,
    talentTree: 1,
		name: 'Endurance',
    requires: null,
    descriptionTemplate: 'Reduces the cooldown of your Sprint and Evasion abilities by {0}.',
    rankValues: [['45 sec'], ['1.5 min']]
  },
	{
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 1,
    parentTalentId: null,
    pointsInTreeRequired: 10,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_warrior_challange.jpg',
    talentRow: 3,
    talentTree: 1,
		name: 'Riposte',
    requires: null,
    descriptionTemplate: "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec.",
    rankValues: []
  },
	{
    id: counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentId: null,
    pointsInTreeRequired: 10,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_sprint.jpg',
    talentRow: 3,
    talentTree: 1,
		name: 'Improved sprint',
    requires: null,
    descriptionTemplate: "Gives a {0}% chance to remove all movement impairing effects when you active your Sprint ability.",
    rankValues: [[50], [100]]
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