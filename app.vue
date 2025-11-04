<template>
    <div class="select-none">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
</template>

<script setup>

const client = useSupabaseClient()
const instruments = ref([])

const {data, error} = await client.from('instruments').select()
instruments.value = data
</script>

<style>
* {
  scroll-behavior: smooth;
  font-family: "Gentium Book Plus", serif;
}

</style>
