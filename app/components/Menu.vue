<template>
    <div class="p-2 px-4">
      <nav class="flex w-max sm:hidden relative">
        <div
            @click="showMenu = !showMenu"
            class="flex flex-col gap-2 cursor-pointer">
          <p class="bg-muted-foreground w-[50px] h-[3px]"></p>
          <p class="bg-muted-foreground w-[50px] h-[3px]"></p>
          <p class="bg-muted-foreground w-[50px] h-[3px]"></p>
        </div>
        <nav v-if="showMenu"
             class="absolute right-0 top-8 sm:sr-only not-sr-only bg-background p-2 border rounded-2xl">
          <ul

              v-for="listMenu in menu" :key="listMenu.id"
              class="mr-5 last:mr-0 ">
            <li>
              <NuxtLink
                  :to="listMenu.link"
                  @click="showMenu = false"
                  class="text-xl uppercase font-bold">
                {{ listMenu.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </nav>
      <nav class="sm:flex w-max hidden">
           <ul
               v-for="listMenu in menu" :key="listMenu.id"
               class="mr-5 last:mr-0 relative">
             <li>
               <NuxtLink
                   :to="listMenu.link"
                   class="sm:text-2xl uppercase font-bold  text-response">
                 {{ listMenu.name }}
               </NuxtLink>
             </li>
           </ul>
      </nav>

    </div>
</template>

<script setup>
const {data: menu} = await useFetch('/api/menu')

const showMenu = ref(false)

</script>

<style scoped>

</style>
