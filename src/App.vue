<template>
  <div class="max-w-[1440px] mx-auto p-6">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/layouts/TheHeader.vue'
</script>
