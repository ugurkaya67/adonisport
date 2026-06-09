<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import SignInForm from '../../components/auth/SignInForm.vue';
</script>

<template>
  <Head title="Loginpage" />
    <div class="mx-auto mt-12 flex max-w-5xl gap-8">
      <div class="w-1/2 rounded-xl border bg-white p-6 shadow flex flex-col items-center">
        <h2 class="text-xl font-bold mb-4">Se connecter</h2>
        <SignInForm />
      </div>

      <div class="w-1/2 rounded-xl border bg-white p-6 shadow flex flex-col items-center">
        <h2 class="text-xl font-bold mb-4">S'inscrire</h2>
        <Link route="signup">Formulaire d'inscription</Link>
      </div>
    </div>
</template>