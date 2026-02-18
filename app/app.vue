<template>
    <NuxtLayout>
       <p>Добро пожаловать: {{tg?.user?.first_name}}</p>
      <p>ваш язык: {{tg?.user?.language_code}}</p>
      <p>Ваша картинка: <NuxtImg :src="tg?.user?.photo_url"/></p>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">


const tg = window?.Telegram.WebApp.initDataUnsafe
</script>
