<template>
  <div class="flex gap-5 justify-between items-center cursor-pointer">
    <NuxtLink to="/"
      ><img
        loading="lazy"
        srcSet="/logo2.png"
        class="shrink-0 aspect-square w-12 lg:w-22"
      />
    </NuxtLink>
    <!-- Burger menu -->
    <Icon
      size="20"
      name="iconamoon:menu-burger-horizontal"
      class="sm:!hidden shrink-0 my-auto aspect-[1.33] cursor-pointer"
    />
    <div class="uppercase hidden sm:flex gap-6 cursor-pointer montserrat-bold">
      <a class="hover:underline">work</a>
      <a class="hover:underline">about</a>
      <a class="hover:underline">contact</a>
    </div>
  </div>
</template>
