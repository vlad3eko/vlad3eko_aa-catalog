<template>
    <NuxtLayout>
       <p>Добро пожаловать: {{tg[first_name]}}</p>
      <p>ваш язык: {{tg[language_code]}}</p>
      <p>Ваша картинка: <NuxtImg :src="tg[photo_url]"/></p>
      <p>{{tg}}</p>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">


const tg = window?.Telegram.WebApp.initDataUnsafe
</script>
