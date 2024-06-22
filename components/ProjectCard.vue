<script setup lang="ts">
interface Props {
  link: string;
  image: string;
  title: string;
  date: string;
}

defineProps<Props>();
</script>

<template>
  <NuxtLink class="mt-10 w-full md:w-auto" :to="link">
    <img
      class="w-full rounded-[10px] h-[323px] object-cover"
      loading="lazy"
      :srcSet="image"
    />
    <div
      class="flex gap-5 justify-between mt-3 text-base font-semibold text-primary-default montserrat-semi-bold"
    >
      <div>{{ title }}</div>
      <div>{{ date }}</div>
    </div>
  </NuxtLink>
</template>
