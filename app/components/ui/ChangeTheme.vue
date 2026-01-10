<template>
  <div>
    <span
        :class="MATERIAL_ICON_CLASS_COLOR_TEXT"
        class="cursor-pointer md-36">contrast</span>
  </div>
  <select v-model="$colorMode.preference" class="text-accent-foreground bg-background text-[1rem] cursor-pointer">
    <option value="light" class="cursor-pointer">Светлая</option>
    <option value="dark" class="cursor-pointer">Тёмная</option>
  </select>
</template>

<script lang="ts" setup>
import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut.js";

</script>

<style scoped>

</style>
