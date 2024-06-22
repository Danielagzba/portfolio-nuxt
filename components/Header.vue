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
    <!-- <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ff88977decec14cf6b2f46f925baa41006784e35b5bede3674ad8819fd9c64?"
                class="shrink-0 my-auto w-5 aspect-[1.33]" /> -->
    <Icon
      size="20"
      name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
      class="sm:!hidden shrink-0 my-auto aspect-[1.33] cursor-pointer"
    />
    <div class="uppercase hidden sm:flex gap-6 cursor-pointer montserrat-bold">
      <a class="hover:underline">work</a>
      <a class="hover:underline">about</a>
      <a class="hover:underline">contact</a>
    </div>
  </div>
</template>
