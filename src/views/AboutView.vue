<script setup>
import { RouterLink } from 'vue-router'
import Jumbo from '@/components/Jumbo'
</script>

<template>
  <Jumbo>
    <template #content>
      <h2>About Super Rentals</h2>
      <p>
        The Super Rentals website is a delightful project created to explore Ember. By building a
        property rental site, we can simultaneously imagine traveling AND building Ember
        applications.
      </p>
      <RouterLink to="/contact" class="button"> Contact Us </RouterLink>
    </template>
  </Jumbo>
</template>
