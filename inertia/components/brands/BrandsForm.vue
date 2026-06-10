<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import { Data } from '@generated/data';

defineProps<{
  brand: Data.Brand.Variants['minify']
}>()
</script>

<template>
  <div class="mt-4">
    <Form
      route="brands.store"
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
          :value="brand?.name"
          class="col-span-2 rounded border bg-white px-3 py-2 text-black"
        />

        <div v-if="errors.name" class="text-sm text-red-500">
          {{ errors.name }}
        </div>
        
        <label for="logoUrl">URL du logo</label>
        <input
          type="url"
          name="logoUrl"
          id="logoUrl"
          :value="brand?.logoUrl"
          class="col-span-2 rounded border bg-white px-3 py-2 text-black"
        />

        <div v-if="errors.logoUrl" class="text-sm text-red-500">
          {{ errors.logoUrl }}
        </div>
      </div>



      <button
        type="submit"
        class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
      >
        Ajouter Marque
      </button>
    </Form>
  </div>
</template>