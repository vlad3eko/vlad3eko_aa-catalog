<template>
  <main class="bg-gray-200 h-full relative themeLight" ref="changeTheme">
    <div class="text-center">
      <div class="mr-20">
        <div class="container mx-auto min-h-[100vh]">
          <div class="sticky top-0 z-10 theme-background w-full p-1 rounded-2xl">
            <div class="flex justify-between ">
              <Menu class="mx-auto"/>

              <div @click="setTheme" class="justify-self-end">
                <span v-if="themeChanged"
                      class="material-symbols-outlined cursor-pointer md-48">brightness_7</span>
                <span v-else class="material-symbols-outlined cursor-pointer md-48">prayer_times</span>
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
  <footer-component :class="themeChanged ? 'themeDark' : 'themeLight' "/>
</template>

<script setup>

const changeTheme = ref()
const themeChanged = ref(true)

const setTheme = () => {
  changeTheme.value.classList.toggle(['themeLight'])
  changeTheme.value.classList.toggle(['themeDark'])
  themeChanged.value = !themeChanged.value
}

</script>

<style lang="scss">
@use "assets/css/themes/themesMode.scss";

</style>
