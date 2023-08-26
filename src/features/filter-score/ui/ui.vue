<script setup lang="ts">
import { SelectInput } from '@/shared/ui'
import { computed, onBeforeMount, ref } from 'vue'
import type { ScoreType } from '@/shared/types/ScoreType'
import { getScores } from '@/shared/api'
import { useFilterCountry } from '@/shared/stores'
import { storeToRefs } from 'pinia'

const options = ref<ScoreType[]>()

onBeforeMount(async () => {
  options.value = await getScores()
})

const store = useFilterCountry()
const { score } = storeToRefs(store)

const computedModel = computed({
  get: () => score.value,
  set: value => store.setScore(value)
})
</script>

<template>
  <select-input label="Filter by score" :options="options" v-model="computedModel" />
</template>
