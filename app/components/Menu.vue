<template>
    <div class="mx-auto container p-2">
      <nav>
        <div class="grid grid-cols-7">
         <div class="flex col-start-4 w-max">
           <ul
               v-for="listMenu in menu" :key="listMenu.id"
               class="mr-10 last:mr-0 relative">
             <li>
               <NuxtLink
                   :to="listMenu.link"
                   class="text-2xl uppercase font-bold">
                 {{ listMenu.name }}
               </NuxtLink>
             </li>
           </ul>
         </div>
        </div>
      </nav>
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

</style>
