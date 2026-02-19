<template>
  <div>
    <div class="flex flex-col justify-center">
      <TelegramAvatarPreview/>
      <div class="self-center ">
        <p >{{ telegramStore.user.first_name }}</p>
        <p>{{ telegramStore.user.last_name }}</p>
      </div>
    </div>
    <p>ID: {{ telegramStore.user.id }}</p>
    <p>username: {{ telegramStore.user.username }}</p>
  </div>
</template>

<script lang="ts" setup>
import {useTelegramStore} from "~/store/telegram.store";

definePageMeta({
  layout: 'operators-prod',
})

const telegramStore = useTelegramStore()

</script>

<style scoped>

</style>
