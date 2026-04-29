<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <footer class="bg-blue-900 text-white mt-16">
    
    <div class="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div>
        <h2 class="text-xl font-bold">AdoniSport</h2>
        <p class="mt-3 text-sm text-gray-300">
          Votre boutique en ligne dédiée aux articles de sport.
        </p>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Navigation</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li><a href="/" class="hover:text-white">Accueil</a></li>
          <li><Link route="products.index" class="hover:text-white">Produits</Link></li>
          <li><a href="/login" class="hover:text-white">Login</a></li>
          <li><a href="/signup" class="hover:text-white">Signup</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Contact</h3>
        <ul class="space-y-2 text-sm text-gray-300">
          <li>Email : contact@adonisport.com</li>
          <li>Téléphone : +33 6 00 00 00 00</li>
        </ul>
      </div>

    </div>

    <!-- Bottom -->
    <div class="border-t border-white/10 text-center py-4 text-sm text-gray-400">
      © 2026 AdoniSport. Tous droits réservés.
    </div>

  </footer>
</template>