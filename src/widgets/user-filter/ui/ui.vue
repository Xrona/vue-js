<script setup lang="ts">
import { FilterScore } from '@/features/filter-score'
import { FilterCountry } from '@/features/filter-country'
import styles from './styles.module.scss'
</script>

<template>
  <div :class="styles.container">
    <filter-score />
    <filter-country />
  </div>
</template>
