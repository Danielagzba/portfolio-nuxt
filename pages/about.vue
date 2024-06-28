<script setup lang="ts">
const skills = [
  "Product Design",
  "UI Design",
  "Branding",
  "Autolayout",
  "Graphic Design",
  "Wireframing",
];

const tools = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Lightroom",
  "Adobe Premiere Pro",
  "Canva",
  "Spreadsheets",
];
</script>

<template>
  <div
    class="max-w-screen-lg mx-auto flex flex-col gap-8 md:gap-[60px] lg:gap-[100px]"
  >
    <div class="flex flex-col w-full items-center justify-center">
      <h1 class="font-semibold text-[26px] md:mt-[60px] md:text-[32px]">
        Get to know <span class="text-[#D96B62]">me</span> more
      </h1>
      <img
        src="/cool-kid-standing.png"
        class="max-w-[270px] max-h-[250px] mt-10"
      />
    </div>

    <div class="flex flex-col gap-4 font-medium leading-6md:text-xl">
      <p>
        For the past years I've learned the skills to seamlessly created
        beautiful graphics. This approach ensures that user experiences are not
        only functional but also visually appealing.
      </p>
      <p>
        Recently I just graduated form the UI bootcamp at Memorisley, where. I
        learned the latests best practices of Figma, I am confident with my
        skill set I'll be able to create beautiful designs.
      </p>
    </div>

    <div class="flex justify-around">
      <div>
        <h2 class="font-semibold text-2xl">Skills</h2>
        <ul class="mt-2">
          <li v-for="skill in skills" class="list-disc ml-4 font-medium mt-1">
            {{ skill }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl">Tools</h2>
        <ul class="mt-2">
          <li v-for="tool in tools" class="list-disc ml-4 font-medium mt-1">
            {{ tool }}
          </li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="font-semibold text-2xl">Aside from design</h2>
      <p class="font-medium mt-2">
        If I am not paddling out in the ocean with my husband, you'll find me
        crocheting, painting, mixing music, or even trying to learn a new
        language.
      </p>
    </div>
  </div>
</template>
