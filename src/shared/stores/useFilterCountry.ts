import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterCountry = defineStore('filterCountry', () => {
  const country = ref('')
  const score = ref('')
  const isLoading = ref(false)

  const setCountry = (value: string) => {
    country.value = value
    isLoading.value = true
  }

  const setIsLoading = (value: boolean) => {
    isLoading.value = value
  }

  const setScore = (value: string) => {
    score.value = value
    isLoading.value = true
  }

  return { country, setCountry, setIsLoading, isLoading, score, setScore }
})
