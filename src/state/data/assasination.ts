import type { ITalent, ICounter} from './defaultTalents';

const assasinationTalents = (counter: ICounter): ITalent[] => [
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_eviscerate.jpg',
    talentRow: 1,
    talentTree: 1,
    name: 'Improved Eviscerate',
    descriptionTemplate: 'Increases the damage done by your Eviscerate ability by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position:  1
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_fiegndead.jpg',
    talentRow: 1,
    talentTree: 1,
    name: 'Remorseless Attacks',
    descriptionTemplate: 'After killing an opponent that yields experience or honor, gives you a {0}% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, or Ghostly Strike.  Lasts 20 sec.',
    rankValues: [[20], [40]],
    position:  2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_racial_bloodrage.jpg',
    talentRow: 1,
    talentTree: 1,
    name: 'Malice',
    descriptionTemplate: 'Increases your critical strike chance by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position:  3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_druid_disembowel.jpg',
    talentRow: 2,
    talentTree: 1,
    name: 'Ruthlessness',
    descriptionTemplate: 'Gives your finishing moves a {0}% chance to add a combo point to your target.',
    rankValues: [[20], [40], [60]],
    position:  1
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_deathscream.jpg',
    talentRow: 2,
    talentTree: 1,
    name: 'Murder',
    descriptionTemplate: 'Increases all damage caused against Humanoid, Giant, Beast and Dragonkin targets by {0}%',
    rankValues: [[1], [2]],
    position: 2
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_slicedice.jpg',
    talentRow: 2,
    talentTree: 1,
    name: 'Improved Slice and Dice',
    descriptionTemplate: 'Increases the duration of your Slice and Dice ability by {0}%',
    rankValues: [[10], [20], [30]],
    position: 4
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 1,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_warrior_decisivestrike.jpg',
    talentRow: 3,
    talentTree: 1,
    name: 'Relentless Strikes',
    descriptionTemplate: 'Your finishing moves have a {0}% chance per combo point to restore 25 energy.',
    rankValues: [[20]],
    position:  1
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_warrior_riposte.jpg',
    talentRow: 3,
    talentTree: 1,
    name: 'Improved Expose Armor',
    descriptionTemplate: 'Increases the armor reduced by your Expose Armor ability by {0}%.',
    rankValues: [[25], [50]],
    position: 2
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 5,
    parentTalentName: 'Malice',
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_criticalstrike.jpg',
    talentRow: 3,
    talentTree: 1,
    name: 'Lethality',
    descriptionTemplate: 'Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Ghostly Strike, and Hemorrhage abilities by 6%.',
    rankValues: [[6], [12], [18], [24], [30]],
    position: 3
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_feigndeath.jpg',
    talentRow: 4,
    talentTree: 1,
    name: 'Vile Poisons',
    descriptionTemplate: 'Increases the damage dealt by your poisons by {0}% and gives your poisons an additional {1}% chance to resist dispel effects.',
    rankValues: [[4, 8], [8, 16], [12, 24], [16, 32], [20, 40]],
    position:  2
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_poisons.jpg',
    talentRow: 4,
    talentTree: 1,
    name: 'Improved Poisons',
    descriptionTemplate: 'Increases the chance to apply poisons to your target by {0}%.',
    rankValues: [[2], [4], [6], [8], [10]],
    position: 3
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 1,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_ice_lament.jpg',
    talentRow: 5,
    talentTree: 1,
    name: 'Cold Blood',
    descriptionTemplate: 'When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, or Eviscerate by {0}%.',
    rankValues: [[100]],
    position: 2
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_kidneyshot.jpg',
    talentRow: 5,
    talentTree: 1,
    name: 'Improved Kidney Shot',
    descriptionTemplate: 'While affected by your Kidney Shot ability, the target receives an additional {0}% damage from all sources.',
    rankValues: [[3], [6], [9]],
    position: 3
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 5,
    parentTalentName: 'Cold Blood',
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_chilltouch.jpg',
    talentRow: 6,
    talentTree: 1,
    name: 'Seal Fate',
    descriptionTemplate: 'Your critical strikes from abilities that add combo points  have a 20% chance to add an additional combo point.',
    rankValues: [[20], [40], [60], [80], [100]],
    position: 2
  },
  {
    id: counter.counter++,
    pointsCurrent: 0, 
    pointsTotal: 1,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_nature_earthbindtotem.jpg',
    talentRow: 7,
    talentTree: 1,
    name: 'Vigor',
    descriptionTemplate: 'Increases your maximum Energy by {0}.',
    rankValues: [[10]],
    position: 2
  },
];

export default assasinationTalents;
