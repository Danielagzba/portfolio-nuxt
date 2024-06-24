<script setup lang="ts">
const navMenuLinks = [
  {
    to: '/',
    text: 'home',
  },
  {
    to: '/about',
    text: 'about',
  },
  {
    to: '/cv',
    text: 'CV',
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
              <NuxtLink
                v-for="link in navMenuLinks"
                :to="link.to"
                class="hover:bg-white"
              >
                <MenubarItem
                  class="mx-auto font-semibold text-2xl hover:underline cursor-pointer capitalize"
                >
                  {{ link.text }}
                </MenubarItem>
              </NuxtLink>

              <ContactDialog>
                <span
                  class="ml-2 mx-auto font-semibold text-2xl hover:underline cursor-pointer capitalize"
                >
                  Contact
                </span>
              </ContactDialog>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div class="capitalize hidden sm:flex gap-6">
          <NuxtLink
            class="font-semibold text-2xl hover:underline cursor-pointer"
            v-for="link in navMenuLinks"
            :to="link.to"
          >
            {{ link.text }}
          </NuxtLink>
          <ContactDialog>
            <span
              class="mx-auto font-semibold text-2xl hover:underline cursor-pointer capitalize"
            >
              Contact
            </span>
          </ContactDialog>
        </div>
      </div>
    </div>
  </div>
</template>
