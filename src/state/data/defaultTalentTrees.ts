let counter = 1;

const defaultTalentTrees: ITalentTree[] = [
  { id: counter++, name: 'Assasination', imageUrl: '' },
  { id: counter++, name: 'Combat', imageUrl: '' },
  { id: counter++, name: 'Subtlety', imageUrl: '' },
];

export interface ITalentTree {
  id: number;
  name: string;
  imageUrl: string;
}

export default defaultTalentTrees;
