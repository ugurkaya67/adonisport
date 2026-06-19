<script setup lang="ts">
import { Data } from '@generated/data';

defineProps<{
  search: string
  brands: Data.Brand[]
  categories: Data.Category[]
  selectedBrandIds: number[]
}>()

defineEmits<{
  'update:search': [value: string]
  'update:selectedBrandIds': [value: number[]]
}>()
</script>

<template>
  <aside class="w-full rounded-xl border bg-gray-50 p-6 shadow-sm lg:w-72">
    <h2 class="mb-6 text-xl font-bold">
      Filtres
    </h2>

    <div class="space-y-6">
      <div>
        <label class="mb-2 block text-sm font-semibold">
          Rechercher
        </label>

        <input
        type="text"
        placeholder="Nom du produit..."
        :value="search"
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
        class="w-full rounded-lg border bg-white px-3 py-2 text-sm text-black"
        />
      </div>

      <div>
        <h3 class="mb-3 text-sm font-semibold">
          Marques
        </h3>

        <div class="space-y-2 text-sm text-gray-700">
            <label
            v-for="brand in brands"
            :key="brand.id"
            class="flex items-center gap-2"
            >
            <input
              type="checkbox"
              :value="brand.id"
              :checked="selectedBrandIds.includes(brand.id)"
              @change="
                $emit(
                  'update:selectedBrandIds',
                  ($event.target as HTMLInputElement).checked
                    ? [...selectedBrandIds, brand.id]
                    : selectedBrandIds.filter((id) => id !== brand.id)
                )
              "
            />
            {{ brand.name }}
            </label>
        </div>
      </div>

      <div>
        <h3 class="mb-3 text-sm font-semibold">
          Catégories
        </h3>

        <div class="space-y-2 text-sm text-gray-700">
            <label
            v-for="category in categories"
            :key="category.id"
            class="flex items-center gap-2"
            >
            <input type="checkbox" />
            {{ category.name }}
            </label>
        </div>
      </div>

      <button
        type="button"
        class="w-full rounded-lg border px-4 py-2 text-sm font-semibold hover:bg-gray-100"
      >
        Réinitialiser
      </button>
    </div>
  </aside>
</template>