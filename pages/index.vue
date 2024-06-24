<script setup lang="ts">
import { projects } from '~/lib/constants'
</script>

<template>
  <div class="flex items-center py-10 gap-10">
    <img
      src="/cool-kid-standing.png"
      class="hidden sm:block max-w-[270px] max-h-[250px]"
    />
    <h1 class="text-[26px] font-lora font-normal mb-10">
      Daniela Bontecou is a
      <span class="text-[#D96B62]">UI designer</span> specializing in creating
      impactful brand identities for seamless brand experiences.
    </h1>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
    <ProjectCard
      v-for="project in projects"
      :link="`/projects/${project.name}`"
      :title="project.name"
      :date="project.date"
      :image="project.images[0]"
    />
  </div>
</template>
