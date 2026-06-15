<script lang="ts" setup>
import Footer from '~/components/Footer.vue';
import Header from '~/components/Header.vue';
import { usePage } from '@inertiajs/vue3'
const page = usePage<{
  flash: {
    success?: string
    error?: string
  }
}>()
</script>

<template>
  <div class="min-h-screen bg-white text-black">
    <Header />
    <div class="mx-auto mt-4 max-w-7xl px-6">
      <div
        v-if="page.props.flash?.success"
        class="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
      >
        {{ page.props.flash.success }}
      </div>

      <div
        v-if="page.props.flash?.error"
        class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
      >
        {{ page.props.flash.error }}
      </div>
    </div>
    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>