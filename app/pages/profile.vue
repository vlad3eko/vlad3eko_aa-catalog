<template>
  <div
      :class="classesStyle"
      class="flex flex-col justify-center gap-5 mt-10">
    <div class="flex flex-col justify-center gap-5">
      <TelegramAvatarPreview variant="profile" class="border border-foreground"/>
      <div class="flex gap-1 justify-center">
        <p>{{ telegramStore.user.first_name }}</p>
        <p>{{ telegramStore.user.last_name }}</p>
      </div>
    </div>
    <div class=" rounded-2xl p-5">
      <p :class="styleInfo">ID: {{ telegramStore.user.id }}</p>
      <p :class="styleInfo">username: {{ telegramStore.user.username }}</p>
      <p :class="styleInfo">Заказов оформленно: {{ 'N кол.' }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTelegramStore} from "~/store/telegram.store";
import TelegramAvatarPreview from "~/components/telegram/TelegramAvatarPreview.vue";

definePageMeta({
  layout: 'operators-prod',
})

const styleInfo = 'border-b-3 border-card-foreground/20 pb-2 mb-2 '

const classesStyle = computed(() => {
  const textStyle = 'text-foreground text-2xl tracking-widest'

  const panelStyle = 'rounded-2xl p-10 bg-card'

  return [
      textStyle,
      panelStyle
  ].join(' ')
})

const telegramStore = useTelegramStore()

</script>

<style scoped>

</style>
