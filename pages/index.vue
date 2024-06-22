<script setup lang="ts">
const projects = [
  {
    link: 'airbnb',
    title: 'Airbnb',
    date: '2024',
    image: '/airbnb.png',
  },
  {
    link: 'smartskin',
    title: 'Smart Skin',
    date: '2024',
    image: '/smartsk.png',
  },
  {
    link: 'costrean',
    title: 'Costream',
    date: '2024',
    image: '/co.png',
  },
  {
    link: 'brainwave',
    title: 'Brain Wave',
    date: '2024',
    image: '/gobble.png',
  },
]
</script>

<template>
  <div class="flex flex-col px-4 py-9 mx-auto w-full bg-stone-100">
    <Header class="mt-5 mb-10" />
    <h1 class="text-[26px] font-lora font-normal mb-10">
      Daniela Bontecou is a
      <span class="text-[#D96B62]">UI designer</span> specializing in creating
      impactful brand identities for seamless brand experiences.
    </h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      <ProjectCard
        v-for="project in projects"
        :link="project.link"
        :title="project.title"
        :date="project.date"
        :image="project.image"
      />
    </div>
    <Footer />
  </div>
</template>
