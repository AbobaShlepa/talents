let counter = 1;

const defaultTalentTrees: ITalentTree[] = [
  { id: counter++, name: 'Assasination', imageUrl: 'https://classicdb.ch/images/talent/classes/backgrounds/rogue_1.jpg?85' },
  { id: counter++, name: 'Combat', imageUrl: 'https://classicdb.ch/images/talent/classes/backgrounds/rogue_2.jpg?85' },
  { id: counter++, name: 'Subtlety', imageUrl: 'https://classicdb.ch/images/talent/classes/backgrounds/rogue_3.jpg?85' },
];

export interface ITalentTree {
  id: number;
  name: string;
  imageUrl: string;
}

export default defaultTalentTrees;
