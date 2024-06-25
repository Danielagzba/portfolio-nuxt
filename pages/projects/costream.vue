<script lang="ts"></script>

<template>
  <div class="flex flex-col mt-10 text-neutral-700">
    <h1
      class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
    >
      Costream
    </h1>
    <div class="mt-[50px] text-xl font-medium">
      Costream is a platform that let's you enjoy content across multiple
      platforms simultaneously. 
    </div>

    <div class="flex flex-col gap-8 mt-8">
      <div>
        <h2 class="font-semibold text-2xl">Tasks</h2>
        <ul class="mt-2">
          <li
            v-for="task in [
              'UI Design',
              'Branding',
              'Prototyping',
              'Graphic Design',
            ]"
            class="list-disc ml-4 font-medium mt-1"
          >
            {{ task }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">June 2024</p>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">Goals:</h2>
        <div class="text-medium leading-[32px] gap-2 p-2 mt-10">
          <p>
            The Costream platform is normally used to watch matches of the game
            League of Legends. The goal of this project was to create five
            screens that update information simultaneously while a match is
            happening.
          </p>
        </div>
      </div>

      <CarouselWithThumbnail
        :images="[
          '/costream-frame1.png',
          '/costream-frame2.png',
          '/costream-frame3.png',
          '/costream-frame4.png',
          '/costream-frame5.png',
        ]"
      />

      <p class="mt-10 text-xl font-medium">
        Some of the data includes player name, player character chosen, gold
        earned, minion kills, wards destroyed, among many other data points.
      </p>
      <img class="mt-10" src="/costream-1.png" alt="Mockup 1 laptop view" />
      <span class="text-[14px]">Mockup laptop view.</span>

      <img class="mt-10" src="/costream-2.png" alt="Mockup desktop view" />
      <span class="text-[14px]">Mockup desktop view.</span>
    </div>
  </div>
</template>
