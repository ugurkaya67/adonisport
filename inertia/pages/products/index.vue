<script setup lang="ts">
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

type Product = {
  id: number
  name: string
  slug: string
  description: string | null
  basePrice: number
}

defineProps<{
  products: Product[]
}>()
</script>

<template>
       <Header />
        <main>
          <div class="p-8">
            <h1 class="mb-6 text-3xl font-bold">Produits</h1>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article
                v-for="product in products"
                :key="product.id"
                class="rounded-lg border p-4 shadow"
              >
                <h2 class="text-lg font-semibold">{{ product.name }}</h2>

                <p class="mt-2 text-gray-600">
                  {{ product.basePrice }} €
                </p>

                <p class="mt-2 text-sm text-gray-500">
                  {{ product.description }}
                </p>
              </article>
            </div>
          </div>
        </main>
        <Footer />

</template>