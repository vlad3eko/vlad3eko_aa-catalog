<template>
  <Dialog v-model:open="modalStore.isOpen">
    <form class="animate-from-right">
      <DialogTrigger asChild>
        <slot/>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px] unselectable animate-from-right">
        <DialogHeader>
          <DialogTitle>{{ modalStore.message }}</DialogTitle>
          <DialogDescription>
            {{ modalStore.description }}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" v-if="modalStore.cancelShow">
              {{ modalStore.cancel }}
            </Button>
          </DialogClose>
            <Button>
              <NuxtLink :to="modalStore.linkTo" @click="closeModal">
                {{ modalStore.next }}
              </NuxtLink>
            </Button>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>

<script lang="ts" setup>

import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle, DialogTrigger
} from "~/components/ui/dialog";
import {Button} from "~/components/ui/button";
import {useModalStore} from "~/store/modal.store";

const modalStore = useModalStore()

const closeModal = () => {
  modalStore.isOpen = false
}
</script>

<style scoped>

</style>
