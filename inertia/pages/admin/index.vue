<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'

</script>

<template>
  <Head title="AdminPage" />
    <div class="min-h-screen bg-black text-white"> 
        <Header />
        <main>
          Page administrateur, accessible uniquement aux utilisateurs avec les droits d'administration.
        </main>
        <Footer />
    </div>
</template>
