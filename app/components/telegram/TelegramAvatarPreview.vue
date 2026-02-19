<template>
  <div class="max-w-10 rounded-4xl overflow-hidden self-center">
    <div v-if="telegramStore?.user?.id">
      <img :src="telegramStore.user.photo_url"
           alt="Аватар"/>
    </div>
    <div v-else>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
           alt="Аватар"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTelegramStore} from "~/store/telegram.store";

const telegramStore = useTelegramStore()

</script>

<style scoped>

</style>
