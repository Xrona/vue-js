<script setup lang="ts">
import { onMounted, onUnmounted, toRefs } from 'vue'

type Props = {
  refObject: HTMLElement | undefined
  onHandler: () => void
}

const props = defineProps<Props>()
const { refObject, onHandler } = toRefs(props)

const clickListener = (event: MouseEvent): void => {
  if (event.target !== refObject.value) {
    onHandler.value()
  }
}

onMounted(() => {
  document.addEventListener('click', clickListener)
})

onUnmounted(() => {
  document.removeEventListener('click', clickListener)
})
</script>

<template>
  <slot />
</template>
