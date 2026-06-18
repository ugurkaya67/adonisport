<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import ProductList from '../../components/product/ProductList.vue'
import ProductFilters from '../../components/product/ProductFilters.vue'

import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'

const page = usePage<{
  products: Data.Product[]
}>()
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
        <ProductFilters/>

        <!-- Produits -->
        <section class="flex-1">
          <ProductList :products="page.props.products" />
        </section>

      </div>

    </main>
  </div>
</template>