<script setup lang="ts">
import { projects } from '@/lib/constants'

const route = useRoute()
const project = ref()

onMounted(() => {
  const foundProject = route.params.slug.length
    ? projects.find(p => {
        return p.name.toLowerCase() === route.params.slug[0].toLowerCase()
      })
    : undefined

  project.value = foundProject

  if (!foundProject) {
    navigateTo('/')
  }
})
</script>

<template>
  <div
    class="flex flex-col px-4 py-9 mx-auto w-full bg-stone-100"
    v-if="project"
  >
    <Header />

    <div class="flex flex-col mt-10 text-neutral-700">
      <h1
        class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
      >
        {{ project.name }}
      </h1>
      <div class="mt-[50px] text-xl font-medium">
        {{ project.description }}
      </div>
      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Tasks</h2>
        <ul class="mt-2">
          <li
            v-for="task in project.tasks"
            class="list-disc ml-4 font-medium mt-1"
          >
            {{ task }}
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">{{ project.timeline }}</p>
        <img class="mt-10" :src="project.images[0]" alt="designs on a phone" />
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Problem</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="problem in project.problems">
            {{ problem }}
          </p>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-10">
        <img :src="project.images[1]" alt="designs on a phone" />
        <img :src="project.images[2]" alt="designs on a phone" />
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Solution</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="solution in project.solutions">
            {{ solution }}
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
