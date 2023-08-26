<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <h1 :class="$style.title">404</h1>
    <span>page not found</span>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 60vh;
}

.title {
  display: block;
  font-size: 38px;
  line-height: 1rem;
}
</style>
