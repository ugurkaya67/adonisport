<script setup lang="ts">
import { ref } from 'vue'

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import CategoriesForm from '../../components/categories/CategoriesForm.vue'
import BrandsForm from '../../components/brands/BrandsForm.vue'
import ProductsForm from '../../components/product/ProductForm.vue'
import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'

const showCategoryForm = ref(false)
const showBrandForm = ref(false)
const showProductForm = ref(false)

const page = usePage<{
  products: Data.Product[]
}>()
</script>

<template>
  <Head title="Admin" />

  <div class="min-h-screen bg-gray-100 text-gray-900">
    <Header />

    <main class="mx-auto max-w-7xl px-6 py-8">
      <!-- En-tête admin -->
      <section class="rounded-xl bg-white p-6 shadow">
        <h1 class="text-2xl font-bold">
          Gestion du catalogue
        </h1>

        <p class="mt-2 text-sm text-gray-600">
          Gérez vos produits, catégories et marques depuis cet espace.
        </p>

        <!-- Actions -->
        <div class="mt-6 flex flex-wrap gap-4">
          <button
            class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            @click="showProductForm = !showProductForm"
          >
            + Ajouter un produit
          </button>

          <button
            class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            @click="showCategoryForm = !showCategoryForm"
          >
            + Ajouter une catégorie
          </button>

          <button
            class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            @click="showBrandForm = !showBrandForm"
          >
            + Ajouter une marque
          </button>
        </div>
      </section>

      <!-- Formulaire catégorie -->
      <section
        v-if="showCategoryForm"
        class="mt-6 rounded-xl bg-white p-6 shadow"
      >
        <h2 class="mb-4 text-xl font-bold">
          Ajouter une catégorie
        </h2>

        <CategoriesForm />
      </section>

      <!-- Formulaire marque -->
      <section
        v-if="showBrandForm"
        class="mt-6 rounded-xl bg-white p-6 shadow"
      >
        <h2 class="mb-4 text-xl font-bold">
          Ajouter une marque
        </h2>

        <BrandsForm />
      </section>

      <!-- Formulaire produit -->
      <section
        v-if="showProductForm"
        class="mt-6 rounded-xl bg-white p-6 shadow"
      >
        <h2 class="mb-4 text-xl font-bold">
          Ajouter un produit
        </h2>

        <ProductsForm
          :brands="page.props.brands"
          :categories="page.props.categories"
        />
      </section>

      <!-- Liste produits -->
      <section class="mt-8 rounded-xl bg-white p-6 shadow">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">
            Liste des produits
          </h2>

          <span class="text-sm text-gray-500">
            Catalogue actuel
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b bg-gray-50 text-gray-600">
                <th class="px-4 py-3">Image</th>
                <th class="px-4 py-3">Nom</th>
                <th class="px-4 py-3">Prix</th>
                <th class="px-4 py-3">Stock</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-b">
                <td class="px-4 py-3">
                  <div class="h-12 w-12 rounded bg-gray-200"></div>
                </td>

                <td class="px-4 py-3 font-medium">
                  Exemple produit
                </td>

                <td class="px-4 py-3">
                  29.99 €
                </td>

                <td class="px-4 py-3">
                  10
                </td>

                <td class="px-4 py-3">
                  <button class="text-blue-700 hover:underline">
                    Modifier
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>