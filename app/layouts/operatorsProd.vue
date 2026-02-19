<template>
  <main class="relative">
    <div class="bg-background text-foreground">
      <div class="container mx-auto">
        <div class="sticky top-0 z-3">
          <div class="flex justify-between px-5 bg-background animate-from-top">
            <div class="flex items-center">
              <change-theme/>
              <basket-sidebar/>
            </div>
            <div class="flex">
              <Menu/>
              <div class="max-w-10 rounded-4xl overflow-hidden self-center">
                <div v-if="telegramStore?.user?.id">
                  <img :src="telegramStore.user.photo_url"
                       alt="Аватар"/>
                </div>
                <div v-else>
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                       alt="Аватар"/>
                </div>
              </div>
            </div>
          </div>
        </div>
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
