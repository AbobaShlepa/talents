import assasinationTalents from './assasination';
import combatTalents from './combat';
import subtletyTalents from './subtlety';

const counter: ICounter = {
  counter: 1,
};

const defaultTalents: ITalent[] = assasinationTalents(counter)
  .concat(combatTalents(counter))
  .concat(subtletyTalents(counter));

export interface ITalent {
  id: number;
  name: string;
  pointsCurrent: number;
  pointsTotal: number;
  parentTalentName: string | null;
  imageUrl: string;
  talentRow: number;
  talentTree: number;
  descriptionTemplate: string;
  rankValues: any[][] | [];
}

export interface ICounter {
  counter: number;
}

export default defaultTalents;
