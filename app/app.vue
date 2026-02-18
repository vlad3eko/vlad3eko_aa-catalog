<template>
    <NuxtLayout>
       Добро пожаловать {{tg.first_name}}
      ваш язык {{tg.language_code}}
      <NuxtImg :src="tg.photo_url"/>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">


const tg = window?.Telegram.WebApp.initDataUnsafe
</script>
