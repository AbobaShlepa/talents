import type { ITalent, ICounter } from './defaultTalents';

const combatTalents = (counter: ICounter): ITalent[] => [
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_gouge.jpg',
    talentRow: 1,
    talentTree: 2,
    name: 'Improved Gouge',
    descriptionTemplate: 'Increases the effect duration of your Gouge ability by {0} sec.',
    rankValues: [[0.5], [1], [1.5]],
    position: 1,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_ritualofsacrifice.jpg',
    talentRow: 1,
    talentTree: 2,
    name: 'Improved Sinister Strike',
    descriptionTemplate: 'Reduces the Energy const of your Sinister Strike ability by {0}.',
    rankValues: [[3], [5]],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_nature_invisibilty.jpg',
    talentRow: 1,
    talentTree: 2,
    name: 'Lightning Reflexes',
    descriptionTemplate: 'Increases your Dodge chance by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 3,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_backstab.jpg',
    talentRow: 2,
    talentTree: 2,
    name: 'Improved Backstab',
    descriptionTemplate: 'Increases the critical strike chance of your Backstab ability by {0}%.',
    rankValues: [[10], [20], [30]],
    position: 1,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_parry.jpg',
    talentRow: 2,
    talentTree: 2,
    name: 'Deflection',
    descriptionTemplate: 'Increases your parry chance by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_marksmanship.jpg',
    talentRow: 2,
    talentTree: 2,
    name: 'Precision',
    descriptionTemplate: 'Increases your chance to hit with melee weapons by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_shadowward.jpg',
    talentRow: 3,
    talentTree: 2,
    name: 'Endurance',
    descriptionTemplate: 'Reduces the cooldown of your Sprint and Evasion abilities by {0}.',
    rankValues: [['45 sec'], ['1.5 min']],
    position: 1,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 1,
    parentTalentName: 'Deflection',
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_warrior_challange.jpg',
    talentRow: 3,
    talentTree: 2,
    name: 'Riposte',
    descriptionTemplate: "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec.",
    rankValues: [],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_rogue_sprint.jpg',
    talentRow: 3,
    talentTree: 2,
    name: 'Improved sprint',
    descriptionTemplate: 'Gives a {0}% chance to remove all movement impairing effects when you active your Sprint ability.',
    rankValues: [[50], [100]],
    position: 4,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 2,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_kick.jpg',
    talentRow: 4,
    talentTree: 2,
    name: 'Improved Kick',
    descriptionTemplate: 'Gives your Kick ability a {0}% chance to silence the target for 2 sec.',
    rankValues: [[50], [100]],
    position: 1,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/inv_weapon_shortblade_05.jpg',
    talentRow: 4,
    talentTree: 2,
    name: 'Dagger Specialization',
    descriptionTemplate: 'Increases your chance to get a critical strike with Daggers by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: 'Precision',
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_dualwield.jpg',
    talentRow: 4,
    talentTree: 2,
    name: 'Dual Wield Specialization',
    descriptionTemplate: 'Increases the damage done by your offhand weapon by {0}%.',
    rankValues: [[10], [20], [30], [40], [50]],
    position: 3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/inv_mace_01.jpg',
    talentRow: 5,
    talentTree: 2,
    name: 'Mace Specialization',
    descriptionTemplate: 'Increases your skill with Maces by {0}, and gives you a {0}% chance to stun your target for 3 sec with a mace.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 1,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 1,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_warrior_punishingblow.jpg',
    talentRow: 5,
    talentTree: 2,
    name: 'Blade Flurry',
    descriptionTemplate: 'Increases your attack speed by 20%.  In addition, attacks strike an additional nearby opponent.  Lasts 15 sec.',
    rankValues: [],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/inv_sword_27.jpg',
    talentRow: 5,
    talentTree: 2,
    name: 'Sword Specialization',
    descriptionTemplate: 'Gives you a {0}% chance to get an extra attack on the same target after dealing damage with your Sword.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/inv_gauntlets_04.jpg',
    talentRow: 5,
    talentTree: 2,
    name: 'Fist Weapon Specialization',
    descriptionTemplate: 'Increases your chance to get a critical strike with Fist Weapons by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]],
    position: 4,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: 'Blade Flurry',
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_holy_blessingofstrength.jpg',
    talentRow: 6,
    talentTree: 2,
    name: 'Weapon Expertise',
    descriptionTemplate: 'Increases your skill with Sword, Fist and Dagger weapons by {0}.',
    rankValues: [[3], [5]],
    position: 2,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/ability_racial_avatar.jpg',
    talentRow: 6,
    talentTree: 2,
    name: 'Aggression',
    descriptionTemplate:
      'Increases the damage of your Sinister Strike and Eviscerate abilities by {0}%.',
    rankValues: [[2], [4], [6], [8], [10]],
    position: 3,
  },
  {
    id: counter.counter++,
    pointsCurrent: 0,
    pointsTotal: 5,
    parentTalentName: null,
    imageUrl: 'https://classicdb.ch/images/icons/medium/spell_shadow_shadowworddominate.jpg',
    talentRow: 7,
    talentTree: 2,
    name: 'Adrenaline Rush',
    descriptionTemplate: 'Increases your Energy regeneration rate by {0}% for 15 sec.',
    rankValues: [[100]],
    position: 2,
  },
];

export default combatTalents;
