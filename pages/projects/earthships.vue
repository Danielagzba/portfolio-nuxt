<script lang="ts"></script>

<template>
  <div class="flex flex-col mt-10 text-neutral-700">
    <h1
      class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
    >
      Earthships
    </h1>
    <div class="mt-[50px] text-xl font-medium">
      Earthships is a design challenge made for the company Borsa Media, the
      intention of this challenge was to create a visual proposal for a film to
      raise awareness about the environmental crisis.
    </div>

    <div class="flex flex-col gap-8 mt-8">
      <div>
        <h2 class="font-semibold text-2xl">Tasks</h2>
        <ul class="mt-2">
          <li
            v-for="task in ['Social media design', 'Graphic design']"
            class="list-disc ml-4 font-medium mt-1"
          >
            {{ task }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">Nov 2022</p>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">Challenge:</h2>
        <div class="bg-[#D9D9D9] text-medium leading-[32px] gap-2 p-2 mt-10">
          <p>
            The Waterbear streaming platform seeks to create a new film or
            documentary to raise awareness about the environmental crisis. Your
            challenge is to send a thematic and visual proposal. The objective
            is communicate and make visible the climate crisis in an aesthetic
            and innovative, with a high-impact narrative (you can choose make
            the proposal in English or Spanish).
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <h2 class="font-semibold text-2xl">Deliverables:</h2>
        <ol class="list-decimal ml-5">
          <li>
            Brief description (one paragraph):
            <br />
            Title, what is it about? Who is it addressed to? What are you
            looking for? tackle?
          </li>
          <li>
            Moodboard: Visual compilation that shows the visual line of the
            proposal.
          </li>
          <li>
            Creative pieces
            <ul class="list-disc">
              <li>1 official Flyer</li>
              <li>2 content for social networks from the launch campaign.</li>
            </ul>
          </li>
        </ol>
      </div>
    </div>

    <div class="flex flex-col mt-10">
      <img src="/earthships-1.png" alt="Earthship moodboard" />
      <span class="text-[14px] mt-[6px]"
        >Moodboard and inspiration for the Earthships poster</span
      >
    </div>

    <div class="flex flex-col mt-10">
      <h2 class="font-semibold text-2xl">Description</h2>
      <p class="font-medium text-xl mt-3">
        This documentary seeks to show an alternative style of architecture
        called Earthships. These self-sustaining homes made of natural and
        recycled materials look to provide the essentials of human living
        through unique architectural decisions like water capture, solar,
        natural ventilation, vegetation systems, and sewage and water reuse.
      </p>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <div>
        <img src="/earthship-2.png" alt="Earthships poster" />
        <span>Earthships poster</span>
      </div>

      <div>
        <img src="/earthship-3.png" alt="Content for social media 1" />
        <span>Content for social media 1</span>
      </div>

      <div>
        <img src="/earthship-4.png" alt="Content for social media 2" />
        <span>Content for social media 2</span>
      </div>
    </div>
  </div>
</template>
