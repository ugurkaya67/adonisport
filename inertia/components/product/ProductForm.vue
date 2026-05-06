<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <div class="mt-8 flex items-center justify-center">
  <Form route="products.store" v-slot="{ errors }" class="space-y-4">

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="name">Nom du produit</label>
      <input type="text" name="name" id="name"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.name">{{ errors.name }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="price">Prix</label>
      <input type="number" name="price" id="price"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.price">{{ errors.price }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="stock">Stock</label>
      <input type="number" name="stock" id="stock"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.stock">{{ errors.stock }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="image_url">URL de l'image</label>
      <input type="text" name="image_url" id="image_url"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.image_url">{{ errors.image_url }}</div>

    <button type="submit">
      Créer le produit
    </button>

  </Form>
  </div>
</template>