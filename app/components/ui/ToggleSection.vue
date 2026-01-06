<template>
  <div class="relative">

    <div v-if="model">
        <span @click="toggle"
              :class="styleClasses">
          {{ props.title }}
        </span>
      <div v-show="model"
           class="absolute top-3.5 right-5 cursor-pointer">
        <span v-if="!isOpen"
              :class="MATERIAL_ICON_CLASS_COLOR_TEXT">visibility_off
        </span>
        <span v-else
              :class="MATERIAL_ICON_CLASS_COLOR_TEXT">visibility
        </span>
      </div>

      <div v-show="isOpen">
        <slot/>
      </div>
    </div>

    <!--    -->

    <div v-else>
        <span :class="styleClasses">
          {{ props.title }}
        </span>

        <slot/>

    </div>
  </div>
</template>

<script lang="ts" setup>


import {MATERIAL_ICON_CLASS_COLOR_TEXT} from "~~/server/utils/classes/material-icon.shortcut";

const props = withDefaults(defineProps<{
  title: string
  isShowIcon?: boolean
}>(), {
  isShowIcon: true,
})

const model = defineModel<boolean>('isUnabled', {
  default: true
})

const isOpen = ref<boolean>(model.value)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const styleClasses = computed(() => {
  const classicTitle = 'font-bold block text-3xl text-center uppercase py-2 my-5 '
  if (!model.value) {
    return classicTitle
  } else {
    return classicTitle + 'rounded-2xl cursor-pointer bg-panel hover:bg-panel-soft'
  }
})

</script>

<style scoped>

</style>
