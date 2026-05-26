<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <div class="mt-4">
    <Form
      route="categories.store"
      method="post"
      v-slot="{ errors }"
      class="space-y-4"
    >
      <div class="grid grid-cols-3 items-center gap-4">
        <label for="name">Nom</label>

        <input
          type="text"
          name="name"
          id="name"
          class="col-span-2 rounded border bg-white px-3 py-2 text-black"
        />
      </div>

      <div v-if="errors.name" class="text-sm text-red-500">
        {{ errors.name }}
      </div>

      <button
        type="submit"
        class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Ajouter Catégorie
      </button>
    </Form>
  </div>
</template>