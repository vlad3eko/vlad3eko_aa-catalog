<template>
  <div class="grid bg-background">
    <div class="col-start-1 border-r  bg-background p-5">
      <div class="flex justify-between border-border border-b pb-8 mb-5">
        <change-theme class="animate-from-top"/>
        <sidebar/>
      </div>
      <ul v-for="item in menu" class="text-accent-foreground p-2 animate-from-left">
        <li>
          <NuxtLink :to="item.link" class="text-2xl uppercase font-bold ">{{ item.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="col-start-2 bg-panel">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ChangeTheme from "~/components/ui/ChangeTheme.vue";
import Sidebar from "~/components/basket/sidebar.vue";

const {data: menu} = await useFetch('/api/menu')
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 6fr;
  min-height: 100vh;
}
</style>
