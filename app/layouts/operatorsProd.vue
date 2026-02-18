<template>
  <main class="relative">
    <div class="bg-background text-foreground">
      <div class="container mx-auto">
        <div class="sticky top-0 z-3">
          <div class="flex justify-between bg-background animate-from-top">
            <div class="flex items-center">
              <change-theme/>
              <basket-sidebar/>
            </div>
            <Menu/>
            <div
                v-if="telegramStore.user"
                class="max-w-10 rounded-4xl overflow-hidden self-center">
              <img src="https://t.me/i/userpic/320/QxFjFXL2ezATNOY7K4LhJlCl7NBsSiCJjuU5BXZIjXM.svg" alt="Аватар"/>
            </div>
          </div>
        </div>
        <div v-if="telegramStore.user" class="flex">
          <p>Имя: {{ telegramStore.user.first_name }}</p>
          <p>Логин: {{ telegramStore.user.username }}</p>
          <img :src="telegramStore.user.photo_url" alt="аватар">
        </div>
        {{ telegramStore.user }}
        <slot/>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

import ChangeTheme from "~/components/ui/ChangeTheme.vue";
import {useTelegramStore} from "~/store/telegram.store";

const telegramStore = useTelegramStore()

</script>
