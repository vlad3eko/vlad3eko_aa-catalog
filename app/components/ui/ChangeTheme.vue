<template>
  <div class="flex">
    <span
        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
        class="cursor-pointer md-28">contrast</span>
  <select v-model="$colorMode.preference" class="text-accent-foreground bg-background text-[1rem] cursor-pointer">
    <option value="light" class="cursor-pointer">Светлая</option>
    <option value="dark" class="cursor-pointer">Тёмная</option>
  </select>
  </div>
</template>

<script lang="ts" setup>
import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut.js";

</script>
