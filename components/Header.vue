<script setup lang="ts">
const navMenuLinks = [
  {
    to: 'work',
    text: 'work',
  },
  {
    to: 'about',
    text: 'about',
  },
  {
    to: 'contact',
    text: 'contact',
  },
]
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <NuxtLink to="/">
      <img
        loading="lazy"
        srcSet="/logo2.png"
        class="sm:hidden shrink-0 aspect-square w-12 lg:w-22"
      />
      <span class="hidden font-semibold text-2xl sm:block">
        Daniela Bontecou
      </span>
    </NuxtLink>
    <!-- Burger menu -->
    <Icon
      size="20"
      name="iconamoon:menu-burger-horizontal"
      class="sm:!hidden shrink-0 my-auto aspect-[1.33] cursor-pointer"
    />
    <div class="capitalize hidden sm:flex gap-6 cursor-pointer montserrat-bold">
      <NuxtLink
        v-for="link in navMenuLinks"
        :to="link.to"
        class="font-semibold text-2xl hover:underline"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
