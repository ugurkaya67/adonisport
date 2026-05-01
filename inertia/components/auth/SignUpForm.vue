<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <div class="mt-8 flex items-center justify-center">
  <Form route="new_account.store" v-slot="{ errors }" class="space-y-4">

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="fullName">Nom complet</label>
      <input type="text" name="fullName" id="fullName"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.fullName">{{ errors.fullName }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="email">Email</label>
      <input type="email" name="email" id="email"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.email">{{ errors.email }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="password">Mot de passe</label>
      <input type="password" name="password" id="password"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.password">{{ errors.password }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="passwordConfirmation">Confirmer</label>
      <input type="password" name="passwordConfirmation" id="passwordConfirmation"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.passwordConfirmation">{{ errors.passwordConfirmation }}</div>

    <button type="submit">
      S'inscrire
    </button>

  </Form>
  </div>
</template>