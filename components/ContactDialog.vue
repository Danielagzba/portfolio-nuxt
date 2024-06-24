<script lang="ts" setup>
import { useToast } from './ui/toast'

const mail = useMail()
const { toast } = useToast()

const email = ref('')
const message = ref('')

const handleSubmit = () => {
  console.log('submitted')
  if (email.value.length < 2) {
    toast({
      title: 'Email Required',
      description: 'Please input a valid email',
    })
  } else if (message.value.length < 10) {
    toast({
      title: 'Minimum 10 characters',
      description: 'Message must be longer than 10 characters',
    })
  } else {
    mail.send({
      from: email.value,
      subject: 'Portfolio - Contact Form',
      text: `
      From: ${email.value}
      Message: ${message.value}
      `,
    })
    // Reset form after submission
    email.value = ''
    message.value = ''
  }
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
          <form @submit.prevent="handleSubmit" class="px-[10px]">
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
                class="w-full px-2 py-3 focus:outline-none focus:ring-none min-h-[500px]"
                required
              ></textarea>
            </div>
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
          </form>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
