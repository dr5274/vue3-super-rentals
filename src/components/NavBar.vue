<script setup>
import { RouterLink } from 'vue-router'

// export default {
//   name: 'NavBar',
// }
</script>

<template>
  <nav class="menu">
    <RouterLink to="/" class="menu-index">
      <h1>SuperRentals</h1>
    </RouterLink>
    <div class="links">
      <RouterLink to="/about" class="menu-about"> About </RouterLink>
      <RouterLink to="/contact" class="menu-contact"> Contact </RouterLink>
    </div>
  </nav>
</template>
