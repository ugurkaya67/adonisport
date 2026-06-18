<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import ProductList from '../../components/product/ProductList.vue'
import ProductFilters from '../../components/product/ProductFilters.vue'

import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'

const page = usePage<{
  products: Data.Product[]
  brands: Data.Brand[]
  categories: Data.Category[]
}>()

const search = ref('')

const filteredProducts = computed(() => {
  return page.props.products.filter((product) =>
    product.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <Head title="Product" />

  <div class="bg-white text-black">
    <main class="mx-auto max-w-7xl px-6 py-8">

      <h1 class="mb-6 text-3xl font-bold">
        Liste des produits
      </h1>

      <div class="flex flex-col gap-6 lg:flex-row">

        <!-- Sidebar filtres -->
        <ProductFilters 
        v-model:search="search" 
          :brands="page.props.brands"
          :categories="page.props.categories"
        />

        <!-- Produits -->
        <section class="flex-1">
          <ProductList :products="filteredProducts" />
        </section>

      </div>

    </main>
  </div>
</template>