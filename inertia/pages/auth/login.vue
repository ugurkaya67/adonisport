<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import SignInForm from '../../components/auth/SignInForm.vue';
import SignUpForm from '../../components/auth/SignUpForm.vue';
</script>

<template>
  <Head title="Loginpage" />
    <div class="min-h-screen bg-white text-black"> 
      <Header />
      <main>
        <div class="flex gap-6 max-w-4xl mx-auto">

          <div class="w-1/2 flex flex-col items-center">
            <h2 class="text-xl font-bold mb-4">Se connecter</h2>
            <SignInForm />
          </div>

          <div class="w-1/2 flex flex-col items-center">
            <h2 class="text-xl font-bold mb-4">S'inscrire</h2>
            <Link route="signup">Formulaire d'inscription</Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
</template>