<script lang="ts"></script>

<template>
  <div class="flex flex-col mt-10 text-neutral-700">
    <h1
      class="text-4xl font-bold text-primary-default gloria-hallelujah-regular"
    >
      Gobble
    </h1>
    <div class="mt-[50px] text-xl font-medium">
      It's an app that let's you get flavorful plant-based recipes delivered to
      your door.
    </div>

    <div class="flex flex-col gap-8 mt-8">
      <div>
        <h2 class="font-semibold text-2xl">Tasks</h2>
        <ul class="mt-2">
          <li
            v-for="task in ['Email design', 'Graphic design']"
            class="list-disc ml-4 font-medium mt-1"
          >
            {{ task }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-2xl">Timeline</h2>
        <p class="font-medium mt-2">Feb 2022</p>
      </div>
    </div>

    <div class="flex flex-col gap-10 mt-10">
      <!-- Goals -->
      <div>
        <h2 class="font-semibold text-2xl">Goals</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p>
            Create two emails designs using the Figma plugin “Emailify” based on
            the briefs, brand standard manual, and text provided by the
            contractor.
          </p>
        </div>
      </div>

      <!-- Brief #1 -->
      <div>
        <h2 class="font-semibold text-2xl">Brief #1</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p>Given the following information:</p>
        </div>
        <div class="bg-[#D9D9D9] text-medium leading-[32px] gap-2 p-2 mt-10">
          <p>SL: Be the life of the party!</p>
          <p>
            SL Pre-header: Impress any guest with these gourmet finger foods.
          </p>
          <p class="mt-4">Header: Be a Hosting Hero</p>
          <p class="mt-4">
            Body: From light fare and global flavors to cookout classics, we've
            got shareable dishes for every festivity! Impress your friends and
            family with dishes like Wagyu Beef Burgers with Truffle Aioli,
            Parmesan Yuca Fries, or our premium Smoked Salmon Pizzette that
            comes with a salad. And if they ask for recipes… just keep it our
            little secret.
          </p>
          <p class="mt-4">CTA: Build My Party Platter</p>
          <p>CTA 2: Add Finger Food Faves</p>
        </div>

        <p class="mt-10">I created this:</p>
        <img class="mt-10" src="/gobber-1.png" alt="gobber showcase" />
        <span class="mt-[6px] text-[14px]">Design #1</span>
      </div>

      <!-- Brief #2 -->
      <div>
        <h2 class="font-semibold text-2xl">Brief #2</h2>
        <div class="font-medium text-[20px] leading-8 flex flex-col gap-3 mt-3">
          <p>Given the following information for brief #2:</p>
        </div>
        <div class="bg-[#D9D9D9] text-medium leading-[32px] gap-2 p-2 mt-10">
          <p>SL: Be the life of the party!</p>
          <p>
            SL Pre-header: Impress any guest with these gourmet finger foods –
            now $35 off.
          </p>
          <p class="mt-4">Header: Be a Hosting Hero</p>
          <p class="mt-4">
            Body: From light fare and global flavors to cookout classics, we've
            got shareable dishes for every festivity! Impress your friends and
            family with dishes like Wagyu Beef Burgers with Truffle Aioli,
            Parmesan Yuca Fries, or our premium Smoked Salmon Pizzette that
            comes with a salad. And if they ask for recipes… just keep it our
            little secret.
          </p>
          <p class="mt-4">
            Send out those invites, then use code FEB2022SIGNUP at checkout to
            save $35 and get free shipping on your first order.
          </p>
          <p class="mt-4">CTA: Build My Party Platter</p>
          <p>CTA 2: Add Finger Food Faves</p>
        </div>

        <p class="mt-10">I created this:</p>
        <img class="mt-10" src="/gobber-2.png" alt="gobber showcase" />
      </div>
    </div>
  </div>
</template>
