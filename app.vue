<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>

<template>
  <div class="flex flex-col mx-auto">
    <Header class="py-10 px-4 md:px-8" />
    <div class="pb-10 px-4 max-w-screen-lg mx-auto">
      <NuxtPage />
      <Footer />
    </div>
    <Toaster />
  </div>
</template>
