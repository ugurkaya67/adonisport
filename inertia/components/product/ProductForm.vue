<script setup lang="ts">
import { Form } from '@adonisjs/inertia/vue'
import { Data } from '@generated/data'

defineProps<{
  brands: Data.Brand[]
  categories: Data.Category[]
  product: Data.Product[] | null
}>()
</script>

<template>
  <div class="mt-8 flex items-center justify-center">

  <Form :route="product ? 'products.update' : 'products.store'"
  :params="product ? { id: product.id } : undefined"
  :method="product ? 'put' : 'post'"
  v-slot="{ errors }" class="space-y-4">
    <div class="grid grid-cols-3 items-center gap-4">
      <label for="name">Nom du produit</label>
      <input type="text" name="name" id="name" :value="product?.name"
        class="col-span-2 bg-white text-black rounded px-2 py-1"/>
    </div>
    <div v-if="errors.name">{{ errors.name }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="price">Prix</label>
      <input type="number" name="price" id="price" :value="product?.price"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.price">{{ errors.price }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="stock">Stock</label>
      <input type="number" name="stock" id="stock" :value="product?.stock"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.stock">{{ errors.stock }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="image_url">URL de l'image</label>
      <input type="text" name="image_url" id="image_url" :value="product?.imageUrl"
        class="col-span-2 bg-white text-black rounded px-2 py-1" />
    </div>
    <div v-if="errors.image_url">{{ errors.image_url }}</div>

    <div class="grid grid-cols-3 items-center gap-4">
      <label for="category_id">Catégorie</label>
      <select name="category_id" id="category_id" :value="product?.categoryId"
        class="col-span-2 bg-white text-black rounded px-2 py-1">
        <option value="">Sélectionnez une catégorie</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="grid grid-cols-3 items-center gap-4">
      <label for="brand_id">Marque</label>
      <select name="brand_id" id="brand_id" :value="product?.brandId"
        class="col-span-2 bg-white text-black rounded px-2 py-1">
        <option value="">Sélectionnez une marque</option>
        <option v-for="brand in brands" :key="brand.id" :value="brand.id">
          {{ brand.name }}
        </option>
      </select>
    </div>

    <button type="submit">
      {{ product ? 'Modifier le produit' : 'Créer le produit' }}
    </button>

  </Form>
  </div>
</template>