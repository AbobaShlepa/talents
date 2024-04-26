import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'

let counter = 1
const defaultState: Talent[] = [
  { id: counter++, pointsCurrent: 0, pointsTotal: 1, dependsOn: null, enabled: true },
  { id: counter++, pointsCurrent: 0, pointsTotal: 2, dependsOn: null, enabled: true },
  { id: counter++, pointsCurrent: 0, pointsTotal: 3, dependsOn: 1, enabled: true },
  { id: counter++, pointsCurrent: 0, pointsTotal: 4, dependsOn: 2, enabled: true }
]

const useTalentStore = defineStore('talents', () => {
  const talents = reactive<Talent[]>(defaultState)

  const getById = computed(() => (id: number) => talents.find((x) => x.id === id)!)

  const getByDependOn = computed(
    () => (dependsOn: number) => talents.find((x) => x.dependsOn === dependsOn)!
  )

  function onReady(id: number) {
    talents.filter((x) => x.dependsOn === id).forEach((x) => (x.enabled = true))
  }

  function onNotReady(id: number) {
    talents.filter((x) => x.dependsOn === id).forEach((x) => (x.enabled = false))
  }
  return {
    talents,

    getById,
    getByDependOn,

    onReady,
    onNotReady
  }
})

export interface Talent {
  id: number
  pointsCurrent: number
  pointsTotal: number
  dependsOn: number | null
  enabled: boolean
}

export default useTalentStore
