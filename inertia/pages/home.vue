<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
  <Head title="Homepage" />
    <div class="min-h-screen bg-black text-white"> 
        <Header />
        <main>
          home
        </main>
        <Footer />
    </div>
</template>
