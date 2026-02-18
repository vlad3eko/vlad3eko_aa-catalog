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
          </div>
        </div>
        <p>Имя: {{telegramStore.user.first_name}}</p>
        <p>Логин: {{telegramStore.user.username}}</p>
        <img :src="telegramStore.user.photo_url" alt="аватар">
        {{telegramStore.user}}
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
