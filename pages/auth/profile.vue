<template>
  <div class="flex min-h-full flex-col justify-center px-16 py-8 rounded-md shadow-lg border">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Спасибо что выбрали нас</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action="#" method="POST" class="space-y-6">

        <div>
          <NuxtLink to="/" type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">Продолжить</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
})

const user = useSupabaseUser()
const router = useRouter()

async function logout() {

}

console.log(user.value.email)
// watch(user, () =>  {
//   if (user.value) {
//     // Redirect to protected page
//     return navigateTo('/')
//   }
// }, { immediate: true })
</script>

<style scoped>

</style>
