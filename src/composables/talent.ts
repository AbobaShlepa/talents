import useTalentStore from "@/state/TalentsStore";
import { ref, computed } from "vue";

export function useTalent(id: number) {
  const talentStore = useTalentStore();
  const talent = ref(talentStore.getById(id));

  const parentTalent = talent.value.parentTalentName ? talentStore.getByName(talent.value.parentTalentName) : null;

  const talentActive = computed(() => {
    const pointsInTreeRequired = talent.value.talentRow * 5 - 5;
    return pointsInTreeRequired <= talentStore.getPointsInTree(talent.value.talentTree) &&
      (parentTalent === null || parentTalent.pointsCurrent === parentTalent.pointsTotal);
  })

  const increasePoints = () => {
    if (!talentActive.value || !talentStore.enoughPoints()) return;
  
    if (talent.value.pointsCurrent < talent.value.pointsTotal) {
      talent.value.pointsCurrent++;
    }
  }

  const decreasePoints = () => {
    if (!talentActive.value || !talentStore.canDecrease(talent.value.talentRow, talent.value.talentTree)) {
      return;
    }
  
    if (talent.value.pointsCurrent > 0) {
      talent.value.pointsCurrent--;
    }
  }

  return { talent, talentActive, increasePoints, decreasePoints, getChild: talentStore.getChild };
}