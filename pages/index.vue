<template>
  <div class="flex flex-col px-4 py-9 mx-auto w-full bg-stone-100">
    <Header />
    <div
      class="mt-10 text-[32px] md:text-[48px] font-bold text-neutral-70 font-display gloria-hallelujah-regular text-primary-default"
    >
      Hey there, I am Daniela!
    </div>
    <div
      class="mt-3 text-lg md:text-xl montserrat-regular text-primary-light max-w-[920px]"
    >
      I am a UI designer with a background in graphic design and photography.
      <br />I am passionate about creating intuitive and meaningful experiences
      that unite people and communities. Let's discuss user behavior,
      accessibility, and photography.
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
