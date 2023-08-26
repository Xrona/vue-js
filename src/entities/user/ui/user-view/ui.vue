<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { User } from '@/shared/api'
import { getCountries, getUser } from '@/shared/api'
import { useRoute } from 'vue-router'
import { LoadingSpinner } from '@/shared/ui'
import styles from './styles.module.scss'
import type { CountryType } from '@/shared/types/CounrtyType'

const user = ref<User>()
const countries = ref<CountryType[]>()
const route = useRoute()

onMounted(async () => {
  const id = route.params.id

  user.value = await getUser(parseInt(id as string))
  countries.value = await getCountries()
})

const country = computed(() => {
  return countries.value?.find(country => country.value === user.value?.countryId)?.name ?? ''
})
</script>

<template>
  <div :class="styles.container">
    <Transition name="select-down">
      <div v-if="user && countries" :class="styles.content">
        <img :src="user.avatar" alt="image" :class="styles.image" />
        <ul :class="styles.options">
          <li>
            Country: <span :class="styles.caption">{{ country }}</span>
          </li>
          <li>
            Score: <span :class="styles.caption">{{ user.score }}</span>
          </li>
        </ul>
        <p v-html="user.title"></p>
        <p v-html="user.subtitle"></p>
      </div>
    </Transition>
    <loading-spinner v-if="!user" :class="styles.spinner" />
  </div>
</template>
