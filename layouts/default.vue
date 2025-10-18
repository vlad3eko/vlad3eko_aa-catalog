<template>
  <main class="bg-gray-200 h-svh relative">
    <div class="container border mx-auto text-center h-svh">
      <div class="grid grid-cols-[1fr_25fr_7fr] h-svh" ref="menuCatalog">
        <div>
          <ul>
            <li>
              <NuxtLink to="#" @click="showMenuCatalog" v-on-click-outside="hideMenuCatalog">
                Show
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/catalog">
                Total
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/catalog/health">
                Health
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/catalog/tech">
                Tech
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/catalog/beauty">
                Beauty
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="border max-h-screen overflow-y-scroll">
          <div class="sticky top-0 z-999">
            <Menu/>
          </div>
          <div>
            <router-view/>
          </div>
        </div>
        <div class="grid justify-items-stretch">
          <div class="border ">
            basket
          </div>
          <div class="border">
            basket
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import {vOnClickOutside} from '@vueuse/components'

const menuCatalog = useTemplateRef('menuCatalog')

const showMenuCatalog = () => {
  return menuCatalog.value.classList.toggle('grid-cols-[2fr_25fr_7fr]')
}

const hideMenuCatalog = () => {
  return menuCatalog.value.classList.remove('grid-cols-[2fr_25fr_7fr]')
}


</script>

<style scoped>

</style>
