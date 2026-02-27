<template>
  <main class="relative">
    <div class="bg-background text-foreground min-h-[100vh]">
      <div class="container mx-auto">
        <div class="sticky top-0 z-3">
          <div class="flex justify-between px-5 bg-background animate-from-top">
            <div class="flex items-center">
              <change-theme/>
              <basket-sidebar/>
            </div>
            <div class="flex">
              <Menu/>
              <nuxt-link to="/profile">
                <TelegramAvatarPreview variant="avatar"/>
              </nuxt-link>
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
import TelegramAvatarPreview from "~/components/telegram/TelegramAvatarPreview.vue";


</script>
