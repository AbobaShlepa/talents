import arrowLine from 'arrow-line'
import useTalentStore from '@/state/TalentsStore'

export default function drawLines(talentIds: number[]) {
  const { getById } = useTalentStore()

  for (const talentId of talentIds) {
    const talent = getById(talentId)
    if (talent.parentTalentId) {
      arrowLine(toId(talent.parentTalentId), toId(talent.id))
    }
  }
}

function toId(value: number) {
  return `#talent_${value}`
}
