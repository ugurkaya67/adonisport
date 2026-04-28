<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Header from '../components/Header.vue'

defineProps({
  products: Array
})
</script>

<template>
  <Head title="Homepage" />
    <div class="min-h-screen bg-black text-white"> 
        <Header />
    </div>
</template>
