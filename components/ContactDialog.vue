<script lang="ts" setup>
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  // Reset form after submission
  email.value = ''
  message.value = ''
}

const handleCancel = () => {
  // Implement your cancel logic here
  email.value = ''
  message.value = ''
}
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <slot></slot>
    </DialogTrigger>
    <DialogContent class="px-0 py-4">
      <DialogHeader>
        <DialogTitle class="flex w-full items-center justify-center py-1">
          Contact
        </DialogTitle>
        <DialogDescription>
          <form @submit.prevent="handleSubmit">
            <input
              v-model="email"
              type="email"
              placeholder="From: (enter your email address)"
              class="w-full px-2 py-3 border-y border-gray-300 focus:outline-none focus:ring-none"
              required
            />
            <div class="mb-4">
              <textarea
                v-model="message"
                placeholder="Write your message..."
                rows="5"
                class="w-full px-2 py-3 focus:outline-none focus:ring-none"
                required
              ></textarea>
            </div>
          </form>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <div class="flex justify-end gap-[6px]">
          <button
            type="button"
            @click="handleCancel"
            class="flex items-start px-4 py-1 bg-gray-200 text-[#5D5D5D] rounded-full hover:bg-gray-300 font-medium text-[14px] min-w-[100px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="flex items-start px-4 py-1 bg-black text-[#FEFEFE] rounded-full hover:bg-gray-800 font-medium text-[14px] min-w-[100px]"
          >
            Send
          </button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
