<template>
    <NuxtLayout>
       <p>Добро пожаловать {{tg.first_name}}</p>
      <p>ваш язык {{tg.language_code}}</p>
      <NuxtImg :src="tg.photo_url"/>
      <p>{{tg}}</p>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">


const tg = window?.Telegram.WebApp.initDataUnsafe
</script>
