<template>
    <NuxtLayout>
      {{tg}}
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">


const tg = window?.Telegram.WebApp.initDataUnsafe
</script>
