<template>
  <main class="h-full relative">
    <div class="text-center">
      <div class="bg-background text-foreground">
        <div class="container mx-auto min-h-[100vh]">
          <div class="sticky top-0 z-10 w-full rounded-2xl">
            <div class="flex justify-between items-center bg-background">

              <Menu class="uppercase text-3xl font-bold"/>

              <!-- TODO create component changeTheme add logic swap at hook -->
              <span v-if="themeChanged"
                    :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                    class="cursor-pointer md-48 ">contrast</span>
              <!--TODO create swap logo theme -->
              <span v-else
                    :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
                    class="cursor-pointer md-48 ">prayer_times</span>
              <change-theme/>
              <div class="mx-5">
                <basket/>
              </div>
            </div>
          </div>
          <div>
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer-component/>

</template>

<script lang="ts" setup>

import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut.js";
import ChangeTheme from "~/components/ui/ChangeTheme.vue";

const themeChanged = ref<boolean>(true)


</script>

<style lang="scss">

</style>
