let counter = 1;

const defaultTalentTrees: ITalentTree[] = [
  { id: counter++, name: 'Assasination' },
  { id: counter++, name: 'Combat' },
];

export interface ITalentTree {
  id: number;
  name: string;
}

export default defaultTalentTrees;
