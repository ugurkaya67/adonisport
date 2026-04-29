<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
</script>

<template>
  <header class="w-full bg-blue-900 text-white">
    <div class="mx-auto flex max-w-7xl items-center px-6 py-4">

      <div class="flex-1">
        <h1 class="text-xl font-bold">
          AdoniSport
        </h1>
      </div>

      <nav class="flex flex-1 justify-center gap-8 text-sm">
        <Link route="products.index" class="hover:text-gray-300">
          PRODUITS
        </Link>
      </nav>

      <div class="flex flex-1 justify-end gap-6 text-sm">
        <a href="/login" class="hover:text-gray-300">Login</a>
        <a href="/signup" class="hover:text-gray-300">Signup</a>
      </div>

    </div>
  </header>
</template>