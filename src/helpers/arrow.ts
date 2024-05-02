import arrowLine from 'arrow-line';
import useTalentStore from '@/state/TalentsStore';

export default function drawLines(talentIds: number[]) {
  const { getById, getByName } = useTalentStore();

  for (const talentId of talentIds) {
    const talent = getById(talentId);
    if (talent.parentTalentName) {
      const parentTalentId = getByName(talent.parentTalentName).id;
      arrowLine(toId(parentTalentId), toId(talent.id));
    }
  }
}

function toId(value: number) {
  return `#talent_${value}`;
}
