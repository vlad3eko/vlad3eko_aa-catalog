<template>
  <div
      :class="classes">
      <img :src="telegramStore.user?.id ? telegramStore.user.photo_url : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2k2sI1nZyFTtoaKSXxeVzmAwIPchF4tjwg&s'"
           alt="Аватар"/>
  </div>
</template>

<script lang="ts" setup>
import {useTelegramStore} from "~/store/telegram.store";

const telegramStore = useTelegramStore()

interface Props {
  variant: 'avatar' | 'profile'
}

const props = withDefaults(defineProps<Props>(), {
  variant: "avatar"
})

const classes = computed(() => {
  const base = ' rounded-4xl overflow-hidden self-center'

  const variants = {
    avatar: 'max-w-10',
    profile: 'max-w-100'
  }

  return [
    base,
    variants[props.variant]
  ].join(' ')
})


</script>

<style scoped>

</style>
