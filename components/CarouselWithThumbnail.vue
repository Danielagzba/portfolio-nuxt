<script setup lang="ts">
import { type CarouselApi } from '@/components/ui/carousel'

interface Props {
  images: string[]
}

defineProps<Props>()
const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  emblaMainApi.value.scrollTo(index)
}

watchOnce(emblaMainApi, emblaMainApi => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})
</script>

<template>
  <div class="w-full">
    <Carousel class="relative w-full" @init-api="val => (emblaMainApi = val)">
      <CarouselContent>
        <CarouselItem
          v-for="(image, index) in images"
          class="flex items-center justify-center"
        >
          <img
            class="rounded-lg max-h-[60%]"
            :src="image"
            :alt="`airbnb carousel img ${index}`"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    <Carousel
      class="relative w-full -mt-14 sm:-mt-24 md:-mt-20 lg:-mt-[160px]"
      @init-api="val => (emblaThumbnailApi = val)"
    >
      <CarouselContent class="flex gap-1 ml-0">
        <CarouselItem
          v-for="(image, index) in images"
          @click="onThumbClick(index)"
          class="pl-0 basis-1/4 cursor-pointer"
        >
          <img
            :src="image"
            :alt="`airbnb carousel img ${index}`"
            :class="index === selectedIndex ? '' : 'opacity-50'"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>
