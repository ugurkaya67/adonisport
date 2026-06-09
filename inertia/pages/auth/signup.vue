<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import SignUpForm from '../../components/auth/SignUpForm.vue'
</script>

<template>
  <Head title="Signupage" />

  <div class="mx-auto mt-12 max-w-xl">
    <h1 class="mb-8 text-center text-3xl font-bold">
      Créer un compte
    </h1>

    <div class="rounded-xl border bg-white p-8 shadow">
      <SignUpForm />

      <p class="mt-6 text-center text-sm text-gray-600">
        Tu as déjà un compte ?
        <Link route="login" class="font-semibold text-blue-900 hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  </div>
</template>