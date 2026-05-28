<script setup lang="ts">
import { Data } from '@generated/data'

defineProps<{
  products: Data.Product[]
}>()
</script>

<template>
  <div class="mt-10">
    <h2 class="mb-6 text-2xl font-bold">
      Liste des produits
    </h2>

    <div v-if="products.length === 0" class="text-gray-600">
      Aucun produit disponible.
    </div>

    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="rounded-lg border bg-white p-4 shadow"
      >
        <h3 class="text-lg font-bold text-black">
          {{ product.name }}
        </h3>

        <p class="text-gray-600">
          Prix : {{ product.price }} €
        </p>

        <p class="text-gray-600">
          Stock : {{ product.stock }}
        </p>

        <img
          v-if="product.imageUrl"
          :src="product.imageUrl"
          :alt="product.name"
          class="mt-4 h-48 w-full rounded object-cover"
        />

      </div>
    </div>

  </div>
</template>