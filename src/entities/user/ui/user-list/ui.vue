<script setup lang="ts">
import styles from './styles.module.scss'
import { UserCard } from '@/entities/user/ui'
import { onBeforeMount, watch } from 'vue'
import { LoadingSpinner } from '@/shared/ui'
import { useGetUsers } from '@/entities/user/hooks/useGetUsers'

const { users, isLoading, getUsersHandler, country, score } = useGetUsers()

onBeforeMount(async () => {
  users.value = await getUsersHandler()
})

watch([country, score], async () => {
  users.value = await getUsersHandler()
})
</script>

<template>
  <div :class="styles.container">
    <Transition name="select-down">
      <ul v-if="!isLoading" :class="styles.list">
        <li v-for="user in users" :key="user.id" :class="styles.user">
          <user-card :user="user" />
        </li>
      </ul>
    </Transition>
    <p v-if="!isLoading && users && !users.length">No users</p>

    <loading-spinner v-if="isLoading" :class="styles.spinner" />
  </div>
</template>
