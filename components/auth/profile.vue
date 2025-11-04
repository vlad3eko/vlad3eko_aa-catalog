<template>
  <div>
  <span>{{user.email}}</span>
  </div>
</template>

<script setup>

const user = useSupabaseUser()

async function logout() {

}

console.log(user.value.email)

</script>

<style scoped>

</style>
