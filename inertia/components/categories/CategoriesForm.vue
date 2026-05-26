<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <div class="mt-8 flex items-center justify-center">
  <Form route="categories.store" v-slot="{ errors }" class="space-y-4">

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="name">Nom</label>
      <input type="text" name="name" id="name"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.name">{{ errors.name }}</div>

    <button type="submit">
      Ajouter Catégorie
    </button>

  </Form>
  </div>
</template>