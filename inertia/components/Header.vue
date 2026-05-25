<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import { Data } from '@generated/data';
import { usePage } from '@inertiajs/vue3'

const page = usePage<Data.SharedProps>()

</script>

<template>
  <header class="w-full bg-blue-900 text-white">
    <div class="mx-auto flex max-w-7xl items-center px-6 py-4">

      <div class="flex-1">
        <h1 class="text-xl font-bold">
          <Link route="home">AdoniSport</Link>
        </h1>
      </div>

      <nav class="flex flex-1 justify-center gap-8 text-sm">
        <Link route="products.index" class="hover:text-gray-300">
          PRODUITS
        </Link>
        
       <template v-if="page.props.user?.isAdmin">
        <Link route="admin.index" class="hover:text-gray-300">
          Admin
        </Link>  
        </template>
      </nav>
      


      <div class="flex flex-1 justify-end gap-6 text-sm">
        <template v-if="page.props.user">
          <Form route="logout">
            <button type="submit" class="hover:text-gray-300">
              Logout
            </button>
          </Form>
        </template>
        <template v-else>
          <Link route="login" class="hover:text-gray-300">
            Login
          </Link>
        </template>
      </div>

    </div>
  </header>
</template>