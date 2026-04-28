<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
</script>

<template>
  <header class="w-full bg-blue-900 text-white">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      
      <!-- Logo -->
      <h1 class="text-xl font-bold">
        AdoniSport
      </h1>

      <!-- Navigation -->
      <nav class="flex gap-6 text-sm">
        <a href="/" class="hover:text-gray-300">Accueil</a>
        <a href="/products" class="hover:text-gray-300">Produits</a>
        <a href="/login" class="hover:text-gray-300">Login</a>
        <a href="/signup" class="hover:text-gray-300">Signup</a>
      </nav>

    </div>
  </header>
</template>