<template>
  <!--  <div class="flex min-h-full flex-col justify-center px-16 py-8 rounded-md shadow-lg border">-->
  <!--    <p class="mt-10 text-center text-2xl/9 font-bold text-red-400">-->
  <!--      Регистрации новых пользователей нет.-->
  <!--    </p>-->
  <!--    <p class="text-center font-bold text-white">-->
  <!--      <a href="https://t.me/vlad3eko" target="_blank">Написать в поддержку</a>-->
  <!--    </p>-->
  <!--    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">-->
  <!--      <form action="#" method="POST" class="space-y-6">-->

  <!--        <div>-->
  <!--          <NuxtLink to="/login" type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">Войти</NuxtLink>-->
  <!--        </div>-->
  <!--      </form>-->
  <!--    </div>-->
  <!--  </div>-->

  <div class="flex min-h-full flex-col  px-16 py-8 rounded-md shadow-lg ">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Регистрация</h2>
    </div>
    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="signUp" class="space-y-6">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-100">Почта: </label>
          <div class="mt-2">
            <input v-model="email"
                   type="email" required autocomplete="email"
                   class="bg-white/5  block w-full rounded-md px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-100">Пароль: </label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" type="password" name="password" required
                   autocomplete="current-password"
                   class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
          </div>
          <p class="mt-2 text-red-200">{{ errorMsg }}</p>
          <p class="mt-2 text-red-200">{{ successMsg }}</p>
        </div>

        <div>
          <button
              class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
            Создать
          </button>
          <NuxtLink to="/login"
              class="mt-2 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer">
            Войти
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth',
})

const client = useSupabaseClient()

const email = ref('')
const password = ref('')
const errorMsg = ref(null)
const successMsg = ref(null)

async function signUp() {
  try {
    const {data, error} = await client.auth.signUp({
      email: email.value,
      password: password.value
    })
    if (error) throw error;
    successMsg.value = 'Сообщение с подтверждением отправленно на почту'
  } catch (error) {
    errorMsg.value = error.message
    console.log(error)
  }
}

</script>

<style scoped>

</style>
