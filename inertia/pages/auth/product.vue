<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import ProductList from '../../components/product/ProductList.vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'

const page = usePage<{
  products: Data.Product[]
}>()
</script>

<template>
  <Head title="Product" />
    <div class="max-h-screen bg-blue text-dark"> 
      <Header />
        <main>
             <!-- Composant du formulaire-->
            
            <div class="mt-10">
              <ProductList :products="page.props.products" />
            </div>
        </main>
    <Footer />
  </div>
</template>