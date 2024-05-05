import arrowLine from 'arrow-line';
import useTalentStore from '@/state/TalentsStore';

export default function drawLines(talentIds: number[]) {
  const { getById, getByName } = useTalentStore();

  for (const talentId of talentIds) {
    const talent = getById(talentId);
    if (talent.parentTalentName) {
      const parentTalentId = getByName(talent.parentTalentName).id;
      const from = toId(parentTalentId);
      const to =  toId(talent.id);
      const fromObject = document.querySelector(from)!.getBoundingClientRect();
      const toObject = document.querySelector(to)!.getBoundingClientRect();
      const options = { 
        thickness: 2,
        color: 'white',
        sourcePosition: close(fromObject.x, toObject.x) ? 'bottomCenter' : 'middleRight',
        endpoint: { size: 0.5 }
      }
      console.log(talent.name, fromObject.x, toObject.x, options);

      arrowLine(from, to, options);
    }
  }
}

function toId(value: number) {
  return `#talent_${value}`;
}

function close(first: number, second: number): boolean {
  return Math.abs(first - second) < 3;
}