<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import SignUpForm from '../../components/auth/SignUpForm.vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
</script>

<template>
  <Head title="Signupage" />
    <div class="min-h-screen bg-blue text-dark"> 
      <Header />
        <main>
             <!-- Composant du formulaire-->
            <SignUpForm /> 
            <p class="mt-6 text-sm text-dark/50">
            Tu as déjà un compte ?
            <Link route="login" class="text-yellow-500 transition hover:text-dark">
                Sign in
            </Link>
            </p> 
        </main>
    <Footer />
  </div>
</template>