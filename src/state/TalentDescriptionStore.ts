import { defineStore } from 'pinia'
import { computed } from 'vue'

let counter = 1

const defaultTalents: ITalentDescription[] = [
  {
    id: counter++,
    name: 'Improved Gouge',
    requires: null,
    descriptionTemplate: 'Increases the effect duration of your Gouge ability by {0} sec.',
    rankValues: [[0.5], [1], [1.5]]
  },
  {
    id: counter++,
    name: 'Improved Sinister Strike',
    requires: null,
    descriptionTemplate: 'Reduces the Energy const of your Sinister Strike ability by {0}.',
    rankValues: [[3], [5]]
  },
  {
    id: counter++,
    name: 'Lightning Reflexes',
    requires: null,
    descriptionTemplate: 'Increases your Dodge chance by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]]
  },
  {
    id: counter++,
    name: 'Precision',
    requires: null,
    descriptionTemplate: 'Increases your change to hit with melee weapons by {0}%.',
    rankValues: [[1], [2], [3], [4], [5]]
  },
]

const useTalentDescriptionStore = defineStore('talentDescription', () => {
  const talentDescriptions = defaultTalents
  const getTalentDescriptionById = computed(
    () => (id: number) => talentDescriptions.find((x) => x.id === id)!
  )

  return {
    talentDescriptions,

    getTalentDescriptionById
  }
})

export interface ITalentDescription {
  id: number
  name: string
  requires: string | null
  descriptionTemplate: string
  rankValues: any[][] | []
}

export default useTalentDescriptionStore
