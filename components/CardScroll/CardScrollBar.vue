<template>
  <div @click="scrollBarStyle" class="absolute top-0 left-0 pl-10 h-full border bg-gray-900" ref="scrollBarColor">
    <div v-show="scrollBar" class="sticky top-0 z-999 mix-blend-multiply">
      <catalog-cards-scroll :scrollBar="scrollBar"/>
    </div>
  </div>
</template>

<script setup>


defineProps(['scrollBarStyle'])

const scrollBar = ref(false)
const scrollBarColor = useTemplateRef('scrollBarColor')

const scrollBarStyle = () => {
  if (scrollBar) {
    scrollBar.value = !scrollBar.value
    scrollBarColor.value.classList.toggle('pl-10')
    scrollBarColor.value.classList.toggle('pl-5')
    scrollBarColor.value.classList.toggle('bg-gray-900')
  }
}

</script>

<style scoped>

</style>
