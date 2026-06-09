<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';

</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>