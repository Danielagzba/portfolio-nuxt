<script setup lang="ts">
const navMenuLinks = [
  {
    to: '/work',
    text: 'work',
  },
  {
    to: '/about',
    text: 'about',
  },
  {
    to: '/contact',
    text: 'contact',
  },
]
</script>

<template>
  <div class="w-screen sm:bg-[#C3DECF]">
    <div class="max-w-screen-lg mx-auto">
      <div class="flex w-full gap-5 justify-between items-center">
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

        <Menubar class="sm:hidden">
          <MenubarMenu>
            <MenubarTrigger class="sm:hidden">
              <Icon
                size="20"
                name="iconamoon:menu-burger-horizontal"
                class="shrink-0 my-auto aspect-[1.33] cursor-pointer"
              />
            </MenubarTrigger>
            <MenubarContent>
              <NuxtLink v-for="link in navMenuLinks" :to="link.to">
                <MenubarItem
                  class="mx-auto font-semibold text-2xl hover:underline cursor-pointer capitalize"
                >
                  {{ link.text }}
                </MenubarItem>
              </NuxtLink>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div class="capitalize hidden sm:flex gap-6"></div>
      </div>
    </div>
  </div>
</template>
