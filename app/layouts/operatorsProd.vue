<template>
  <main class="relative">
      <div class="bg-background text-foreground">
        <div class="container mx-auto">
          <div class="sticky top-0 z-3">
            <div class="flex items-center bg-background animate-from-top">
              <Menu/>
              <change-theme/>
              <basket-sidebar/>
            </div>
          </div>
            <slot/>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>

import ChangeTheme from "~/components/ui/ChangeTheme.vue";

</script>
