<script setup>
import { RouterLink } from "vue-router";
import { useRentals } from "@/composables/useRentals";
import Jumbo from "@/components/Jumbo";
import Rentals from "@/components/Rentals";

const { model } = useRentals();
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
