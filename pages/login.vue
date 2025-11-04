<template>
  <div class="flex min-h-full flex-col  px-16 py-8 rounded-md shadow-lg ">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Войдите в аккаунт</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="signIn" class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-100">Почта: </label>
          <div class="mt-2">
            <input v-model="email"
                   type="email" required autocomplete="email" class="bg-white/5  block w-full rounded-md px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-100">Пароль: </label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Забыли пароль?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          </div>
          <p class="mt-2 text-red-200">{{errorMsg}}</p>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">Войти</button>
        </div>
        <div class="text-sm text-center">
          <NuxtLink to="/" class="font-semibold text-indigo-400 hover:text-indigo-300">Регистрация</NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

import Router from "#app/plugins/router.js";

definePageMeta({
  layout: 'auth',
})

const client = useSupabaseClient()
const router = useRouter()

const email = ref('')
const password = ref('')
const errorMsg = ref(null)

async function signIn() {
  try {
    const {error} = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) throw error;
    await router.push('/auth/profile')
  } catch (error) {
    errorMsg.value = error.message
  }
}
</script>

<style scoped>

</style>
