<script setup lang="ts">
const projectName = 'Airbnb'
const projectDescription =
  'Airbnb is a platform that unlocks rewards for clothing donations and provides and up-cycled shopping experience.'
const tasks = [
  'Research',
  'UI Design',
  'Branding',
  'Prototyping',
  'Graphic Design',
  'Usability Testing',
]
const timeline = 'Aug 2023 - Oct 2023'
const problems = [
  'I am a UI designer with a background in graphic design and photography.',
  "I am passionate about creating intuitive and meaningful experiences that unite people and communities. Let's discuss user behavior, accessibility, and photography.",
]
const solutions = [
  'I am a UI designer with a background in graphic design and photography.',
  "I am passionate about creating intuitive and meaningful experiences that unite people and communities. Let's discuss user behavior, accessibility, and photography. nisi placerat. lobortis, dui Lorem dui eget id quam quis dolor eu sit Nunc hendrerit ultrices laoreet Donec lobortis, nulla, In Vestibulum ultrices Praesent",
]
const images = ['/airbnb1.png', '/airbnb1.png', '/airbnb1.png']
</script>

<template>
  <div class="flex flex-col px-4 py-9 mx-auto w-full bg-stone-100">
    <Header />

    <div class="flex flex-col mt-10 text-neutral-700">
      <h1
        class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
      >
        {{ projectName }}
      </h1>
      <div class="mt-[50px] text-xl font-medium">
        {{ projectDescription }}
      </div>
      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Tasks</h2>
        <ul class="mt-2">
          <li v-for="task in tasks" class="list-disc ml-4 font-medium mt-1">
            {{ task }}
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">{{ timeline }}</p>
        <img class="mt-10" :src="images[0]" alt="designs on a phone" />
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Problem</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="problem in problems">
            {{ problem }}
          </p>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-10">
        <img :src="images[1]" alt="designs on a phone" />
        <img :src="images[2]" alt="designs on a phone" />
      </div>

      <div class="mt-8">
        <h2 class="font-semibold text-2xl">Solution</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p v-for="solution in solutions">
            {{ solution }}
          </p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
