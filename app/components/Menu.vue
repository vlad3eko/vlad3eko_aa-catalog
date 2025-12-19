<template>
  <div class="theme-menu p-2">
    <div class="max-w-96 mx-auto container">
      <nav>
        <div class="flex">
          <ul v-for="listMenu in menu" class="ml-10 first:ml-0 relative " :key="listMenu.id">
            <div v-on-click-outside="hideMenu">
              <li class="w-max ml-10 first:ml-0">
                <NuxtLink :to="listMenu.link" @click.prevent="showMenuList(listMenu.id)"
                          class="flex items-center cursor-pointer">
                  <div>
                    {{ listMenu.name }}
                  </div>
                  <div v-show="listMenu.list.length"
                       class="cursor-pointer flex items-center justify-center w-4 h-4 pt-1 ">
                    <span class="material-icons" v-if="showItemId === listMenu.id">arrow_drop_up</span>
                    <span class="material-icons" v-else>arrow_drop_down</span>
                  </div>
                </NuxtLink>
              </li>
              <div v-if="showItemId === listMenu.id && listMenu.list.length"
                   class="absolute p-2 rounded-xl top-6.2 left-0  bg-gray-50  pr-7 border shadow-2xs text-left">
                <ul v-for="(firstHiddenMenu, index) in listMenu.list" :key="index" class="my-2">
                  <NuxtLink :to="firstHiddenMenu.link" class="text-xs font-bold  border-r-amber-50 text-cyan-800">
                    {{ firstHiddenMenu.name }}
                  </NuxtLink>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {vOnClickOutside} from '@vueuse/components'

const {data: menu} = await useFetch('/api/menu')

const showItemId = ref(null)

const showMenuList = (id) => {
  showItemId.value = id
}

const hideMenu = () => {
  showItemId.value = null
}


</script>

<style scoped>
.router-link-active, .router-link-exact-active {
  color: #12b488;
}
</style>
