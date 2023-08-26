export type User = {
  id: number
  avatar: string
  title: string
  subtitle: string
  countryId: string
  score: number
}

export type FilterType = {
  name: string
  value: string
}

interface IApi {
  users: User[]
  countries: FilterType[]
  scores: FilterType[]
}

const api: IApi = {
  users: [
    {
      id: 1,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      countryId: '1',
      score: 15
    },
    {
      id: 2,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
      subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      countryId: '1',
      score: 71
    },
    {
      id: 3,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle:
        '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      countryId: '3',
      score: 3
    },
    {
      id: 4,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle:
        '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      countryId: '4',
      score: 64
    },
    {
      id: 5,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle:
        '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      countryId: '4',
      score: 19
    }
  ],
  countries: [
    {
      name: 'USA',
      value: '1'
    },
    {
      name: 'Russia',
      value: '2'
    },
    {
      name: 'Italy',
      value: '3'
    },
    {
      name: 'Greece',
      value: '4'
    }
  ],
  scores: [
    {
      name: '> 20',
      value: '+20'
    },
    {
      name: '< 10',
      value: '-10'
    }
  ]
}

const get = <T extends keyof IApi>(path: T): IApi[T] => {
  return api[path]
}

export { get }
