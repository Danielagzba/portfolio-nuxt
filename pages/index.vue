<template>
  <div class="flex flex-col px-4 py-9 mx-auto w-full bg-stone-100">
    <div class="flex gap-5 justify-between items-center">
      <img
        loading="lazy"
        srcSet="/logo2.png"
        class="shrink-0 aspect-square w-20 lg:w-24"
      />
      <!-- Burger menu -->
      <!-- <img loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63ff88977decec14cf6b2f46f925baa41006784e35b5bede3674ad8819fd9c64?"
                class="shrink-0 my-auto w-5 aspect-[1.33]" /> -->
      <Icon
        size="20"
        name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
        class="shrink-0 my-auto aspect-[1.33] cursor-pointer"
      />
    </div>
    <div
      class="mt-10 text-[32px] md:text-[48px] font-bold text-neutral-70 font-display"
    >
      Hey there, I am Daniela!
    </div>
    <div class="mt-3 text-base text-neutral-700">
      I am a UI designer with a background in graphic design and photography.
      <br /><br />I am passionate about creating intuitive and meaningful
      experiences that unite people and communities. Let's discuss user
      behavior, accessibility, and photography.
    </div>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProjectCard
        link="airbnb"
        title="Airbnb"
        date="2024"
        image="/airbnb.png"
      />
      <ProjectCard
        link="smartskin"
        title="Smart Skin"
        date="2024"
        image="/smartsk.png"
      />
      <ProjectCard
        link="costrean"
        title="Costream"
        date="2024"
        image="/co.png"
      />
      <ProjectCard
        link="brainwave"
        title="Brain Wave"
        date="2024"
        image="/gobble.png"
      />
    </div>
    <Footer />
  </div>
</template>
