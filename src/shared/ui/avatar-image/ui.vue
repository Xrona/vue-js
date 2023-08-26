<script setup lang="ts">
import { toRefs } from 'vue'
import styles from './styles.module.scss'

type Props = {
  src: string
}

const props = defineProps<Props>()
const { src } = toRefs<Props>(props)
</script>

<template>
  <img :src="src" alt="image" :class="styles.avatar" />
</template>
