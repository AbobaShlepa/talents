import { defineStore } from 'pinia'
import { computed } from 'vue'

let counter = 1
const defaultTalentTrees: ITalentTree[] = [{ id: counter++, name: 'Combat', points: 0 }]

const useTalentTreeStore = defineStore('talentRow', () => {
  const talentTrees = defaultTalentTrees

  const getTalentTreeById = computed(() => (id: number) => talentTrees.find((x) => x.id === id)!)

  return {
    talentTrees,

    getTalentTreeById
  }
})

export interface ITalentTree {
  id: number
  name: string
  points: number
}

export default useTalentTreeStore
