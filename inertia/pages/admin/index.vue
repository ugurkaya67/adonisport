<script setup lang="ts">
import { ref } from 'vue'
import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'
import { Form } from '@adonisjs/inertia/vue'

import CategoriesForm from '../../components/categories/CategoriesForm.vue'
import BrandsForm from '../../components/brands/BrandsForm.vue'
import ProductsForm from '../../components/product/ProductForm.vue'


const showCategoryForm = ref(false)
const showBrandForm = ref(false)
const showProductForm = ref(false)
const selectedProduct = ref(null)
const selectedCategory = ref(null)

const page = usePage<{
  products: Data.Product.Variants[]
  categories: Data.Category[]
  brands: Data.Brand[]
}>()
</script>

<template>
  <Head title="Admin" />

    <div class="mx-auto max-w-7xl px-6 py-8">
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
            @click="selectedProduct = null; showProductForm = true"
          >
            + Ajouter un produit
          </button>

          <button
            class="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
            @click="selectedCategory = null; showCategoryForm = !showCategoryForm"
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

        <CategoriesForm 
        :categories="selectedCategory"
        />
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
          :product="selectedProduct"
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
                <th class="px-4 py-3">Marque</th>
                <th class="px-4 py-3">Catégorie</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="product in page.props.products" :key="product.id">
                <td class="px-4 py-3">
                  <img
                    v-if="product.imageUrl"
                    :src="product.imageUrl"
                    :alt="product.name"
                    class="h-14 w-14 rounded object-cover border"
                  />

                  <div
                    v-else
                    class="h-14 w-14 rounded bg-gray-200"
                  ></div>
                </td>

                <td class="px-4 py-3 font-medium">
                  {{ product.id }} - {{ product.name }}
                </td>

                <td class="px-4 py-3">
                  {{ product.price }} €
                </td>

                <td class="px-4 py-3">
                  {{ product.stock }}
                </td>

                <td class="px-4 py-3">
                  {{ product.brand.name }}
                </td>

                <td class="px-4 py-3">
                  {{ product.category.name }}
                </td>
                               
                <td class="px-4 py-3">
                  <!-- Bouton modifier et supprimer pour chaque produit -->
                  <button
                    type="button"
                    class="text-blue-700 hover:underline"
                    @click="selectedProduct = product; showProductForm = true"
                  >
                    Modifier
                  </button>

                  <Form
                    route="products.destroy"
                    :params="{ id: product.id }"
                    method="delete"
                  >
                    <button type="submit" class="text-red-700 hover:underline"
                    >
                      Supprimer
                    </button>
                  </Form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <!-- Liste catégories -->
      <section class="mt-8 rounded-xl bg-white p-6 shadow">
        <div class="mb-4 flex items-center justify-between">
          <h2 class="text-xl font-bold">
            Liste des catégories
          </h2>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse text-left text-sm">
            <thead>
              <tr class="border-b bg-gray-50 text-gray-600">
                <th class="px-4 py-3">ID</th>
                <th class="px-4 py-3">Nom</th>
                <th class="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b" v-for="category in page.props.categories" :key="category.id">
                <td class="px-4 py-3">
                  {{ category.id }}
                </td>
                <td class="px-4 py-3">
                  {{ category.name }}
                </td>
                <td class="px-4 py-3">
                  <button
                    type="button"
                    class="text-blue-700 hover:underline"
                    @click="selectedCategory = category; showCategoryForm = true"
                  >
                    Modifier
                  </button>
                  <Form
                    route="categories.destroy"
                    :params="{ id: category.id }"
                    method="delete"
                  >
                    <button type="submit" class="text-red-700 hover:underline"
                    >
                      Supprimer
                    </button>
                  </Form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
</template>