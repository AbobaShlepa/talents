import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

let counter = 1
const defaultState: Talent[] = [
  { id: counter++, pointsTotal: 5, dependsOn: null, enabled: true },
  { id: counter++, pointsTotal: 3, dependsOn: 1, enabled: false }
]

const useTalentStore = defineStore('talents', () => {
  const talents = reactive<Talent[]>(defaultState)

  const getById = computed(() => (id: number) => talents.find((x) => x.id === id)!)

  function onReady(id: number) {
    console.log(id)
    console.log(talents)
    talents.filter((x) => x.dependsOn === id).forEach((x) => (x.enabled = true))
    console.log(talents)
  }

  function onNotReady(id: number) {
    talents.filter((x) => x.dependsOn === id).forEach((x) => (x.enabled = false))
  }
  return {
    talents,

    getById,

    onReady,
    onNotReady
  }
})

export interface Talent {
  id: number
  pointsTotal: number
  dependsOn: number | null
  enabled: boolean
}

export default useTalentStore
