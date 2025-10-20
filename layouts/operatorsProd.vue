<template>
  <main class="bg-gray-200 h-full relative ">
    <div class="text-center">
      <div class="">
        <div class="container mx-auto min-h-[100vh]">
          <div class="sticky top-0 z-10 bg-gray-900 w-full p-1 rounded-2xl">
            <NuxtLink to="/catalog/" class="text-4xl uppercase font-bold text-white">Агент Ассист</NuxtLink>
          </div>
          <div class="">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

const menuCatalog = useTemplateRef('menuCatalog')


</script>

<style>
* {
  font-family: Merriweather, Serif;
}
</style>
