<template>
    <NuxtLayout>
       <p>Добро пожаловать: {{tgUser.first_name}}</p>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">

const tgUser = ref<any>(null)

onMounted(() => {
  const tg = window?.Telegram.WebApp
  if (tg) {
    tg.ready()
    tgUser.value = tg.initDataUnsafe?.user
  }
})
</script>
