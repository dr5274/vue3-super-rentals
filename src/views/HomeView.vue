<script setup>
import Jumbo from '@/components/Jumbo.vue'
import { RouterLink } from 'vue-router'
import Rentals from '@/components/Rentals.vue'
import rentals from '@/data/rentals.json'

const model = rentals.data
</script>

<template>
  <main>
    <Jumbo>
      <template #content>
        <h2>Welcome to Super Rentals!</h2>
        <p>We hope you find exactly what you're looking for in a place to stay.</p>
        <RouterLink to="/about" class="button"> About Us </RouterLink>
      </template>
    </Jumbo>
    <Rentals :model="model" />
  </main>
</template>
