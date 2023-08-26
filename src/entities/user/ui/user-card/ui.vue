<script setup lang="ts">
import { AvatarImage } from '@/shared/ui'
import styles from './styles.module.scss'
import { toRefs } from 'vue'
import type { User } from '@/shared/api'

type Props = {
  user: User
}
const props = defineProps<Props>()
const { user } = toRefs(props)
</script>

<template>
  <div :class="styles.card">
    <avatar-image :src="user.avatar" />
    <div>
      <h3 :class="styles.name" v-html="user.title"></h3>
      <p :class="styles.text" v-html="user.subtitle"></p>
    </div>
    <router-link :class="styles.link" :to="`/user/${user.id}`" />
  </div>
</template>
