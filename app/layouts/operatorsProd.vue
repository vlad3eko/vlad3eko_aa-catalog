<template>

  <main class="h-full relative">
    <div class="text-center">
      <div class="bg-background text-foreground">
        <div class="container mx-auto min-h-[100vh]">
          <div class="sticky top-0 z-10 w-full rounded-2xl">
            <div class="flex justify-between uppercase font-bold text-3xl bg-background">
              <Menu/>

              <!-- TODO create component changeTheme add logic swap at hook -->
                <span v-if="themeChanged"
                      :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                      class="cursor-pointer md-48 ">brightness_7</span>
                <!--TODO create swap logo theme -->
                <span v-else
                      :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                      class="cursor-pointer md-48 ">prayer_times</span>
              <select v-model="$colorMode.preference" class="text-accent-foreground bg-background">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>
          <div>
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-component :class="themeChanged ? 'light' : 'dark' "/>


</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut.js";

const themeChanged = ref<boolean>(true)


</script>

<style lang="scss">
@use "~/assets/css/variables/theme/themes-mode";


body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia {
  background-color: #f1e7d0;
  color: #433422;
}

</style>
