<template>
  <div class="relative">
    <div v-if="model">
        <span @click="toggle"
              :class="styleClasses">
      {{ title }}
    </span>
      <div v-show="model"
           class="absolute top-3 right-0 cursor-pointer">
      <span v-if="!isOpen"
            :class="materialIcon">visibility_off</span>
        <span v-else
              :class="materialIcon">visibility</span>
      </div>

      <div v-show="isOpen">
        <slot/>
      </div>
    </div>

    <div v-if="!model">
        <span :class="styleClasses">
      {{ title }}
    </span>

      <div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


const props = withDefaults(defineProps<{
  title: string
  isShowIcon?: boolean
}>(), {
  isShowIcon: true,
})

const model = defineModel<boolean>('isUnabled',{
  default: true
})

const isOpen = ref<boolean>(model.value)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const styleClasses = computed(() => {
  const classicTitle = 'text-[#c4c4c4] block text-3xl text-center uppercase border-b pb-5 mt-5 mb-5'
  if (!model.value) {
    return classicTitle
  } else {
    return classicTitle + ' cursor-pointer'
  }
})

const materialIcon = computed(() => {
  return 'material-symbols-outlined theme-text'
})

  </script>

<style scoped>

</style>
