<script setup lang="ts">
import { Link, Form } from '@adonisjs/inertia/vue'
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import SignInForm from '../../components/auth/SignInForm.vue';
import SignUpForm from '../../components/auth/SignUpForm.vue';
</script>

<template>
  <Head title="Loginpage" />
    <div class="min-h-screen bg-black text-white"> 
      <Header />
      <main>
        <div class="flex gap-6">
          <Link route="login" class="w-1/2">Login</Link>
          <Link route="signup" class="w-1/2">Signup</Link>
        </div>
      </main>
      <Footer />
    </div>
</template>
