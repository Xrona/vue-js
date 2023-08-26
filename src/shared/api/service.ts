import { get } from './instance'
import type { User, FilterType } from './instance'
import { apiHelper } from '@/shared/helpers/apiHelper'

type UserParams = {
  country: string
  score: string
}

const getUsers = async ({ country, score }: UserParams): Promise<User[]> => {
  return await apiHelper<User[]>(() => {
    const users = get('users')

    return users
      .filter(user => {
        if (country) {
          return user.countryId === country
        }
        return true
      })
      .filter(user => {
        if (score) {
          if (+score > 0) {
            return user.score > +score
          } else {
            return user.score < Math.abs(+score)
          }
        }

        return true
      })
  })
}

const getUser = async (id: number): Promise<User> => {
  return await apiHelper<User>(() => {
    return get('users').find(user => user.id === id)
  })
}

const getCountries = async (): Promise<FilterType[]> => {
  return await apiHelper<FilterType[]>(() => {
    return get('countries')
  })
}

const getScores = async (): Promise<FilterType[]> => {
  return await apiHelper<FilterType[]>(() => {
    return get('scores')
  })
}

export { getCountries, getUsers, getScores, getUser }
