import { ref, toRefs } from 'vue'
import { getUsers } from '@/shared/api'
import type { User } from '@/shared/api'
import { useFilterCountry } from '@/shared/stores'

export const useGetUsers = () => {
  const users = ref<User[]>()
  const store = useFilterCountry()
  const { country, isLoading, score } = toRefs(store)

  const getUsersHandler = async () => {
    const result = await getUsers({
      country: country.value,
      score: score.value
    })

    store.setIsLoading(false)
    return result ?? []
  }

  return {
    users,
    isLoading,
    getUsersHandler,
    country,
    score
  }
}
