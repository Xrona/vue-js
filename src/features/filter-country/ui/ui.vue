<script setup lang="ts">
import { SelectInput } from '@/shared/ui'
import { useFilterStore } from '@/shared/stores'
import { computed, onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { getCountries } from '@/shared/api'
import type { CountryType } from '@/shared/types/CounrtyType'

const options = ref<CountryType[]>()

onBeforeMount(async () => {
  options.value = await getCountries()
})

const store = useFilterStore()
const { country } = storeToRefs(store)

const computedModel = computed({
  get: () => country.value,
  set: value => store.setCountry(value)
})
</script>

<template>
  <select-input label="filter by country" :options="options" v-model="computedModel" />
</template>
