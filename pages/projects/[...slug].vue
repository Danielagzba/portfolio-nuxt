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
  <div class="flex flex-col mt-10 text-neutral-700" v-if="project">
    <h1
      class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
    >
      {{ project.name }}
    </h1>
    <div class="mt-[50px] text-xl font-medium">
      {{ project.description }}
    </div>

    <div class="flex flex-col gap-8 mt-8">
      <div>
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

      <div>
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">{{ project.timeline }}</p>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">Goals</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="goal in project.goals">
            {{ goal }}
          </p>
        </div>
      </div>

      <div>
        <h2 class="font-semibold text-2xl">Wireframing</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="paragraph in project.wireframing">
            {{ paragraph }}
          </p>
        </div>
        <img
          class="mt-10"
          src="/airbnb-wireframe1.png"
          alt="my first airbnb wireframe"
        />
        <span class="text-[14px] mt-[6px]">First attempts</span>
      </div>

      <CarouselWithThumbnail :images="project.carouselImages" />
      <span class="-mt-10 text-[14px]">Final wireframes of the 6 screens</span>

      <div>
        <h2 class="font-semibold text-2xl">Solution</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="solution in project.solutions">
            {{ solution }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">High-fidelity and components</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="paragraph in project.highFidelity">
            {{ paragraph }}
          </p>
        </div>
        <img
          v-for="(image, index) in project.componentImages"
          :src="image"
          :alt="`Image of component #${index}`"
        />
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">Variants</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="variant in project.variants">
            {{ variant }}
          </p>
        </div>
        <div class="mt-10" v-for="image in project.variantImages">
          <img :src="image.src" :alt="image.alt" />
          <span class="text-[14px] mt-[6px]">{{ image.alt }}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 my-10">
      <div>
        <h2 class="font-semibold text-2xl">Result</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="result in project.results">
            {{ result }}
          </p>
        </div>
        <div class="mt-10" v-for="image in project.resultImages">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
    </div>
  </div>
</template>
