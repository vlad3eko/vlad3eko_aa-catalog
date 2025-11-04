<template>
  <div class="flex">
    <div class="content-center mr-10 mb-1 theme-text">
      <profile/>
    </div>
    <div @click="logout">
      <span v-if="themeChanged" class="material-symbols-outlined cursor-pointer md-48 md-dark">logout</span>
      <span v-else class="material-symbols-outlined cursor-pointer md-48 theme-background ">logout</span>
    </div>
  </div>
</template>

<script setup>

import Profile from "~/components/auth/profile.vue";

defineProps(['themeChanged'])

const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

async function logout() {
  try {
    const {error} = await client.auth.signOut()
    if (error) throw error
  } catch (error) {
    console.log('error logOut', error.message)
  }
}

</script>

<style scoped>

</style>
