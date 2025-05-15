<script setup>
import Rental from '@/components/Rental'

const props = defineProps(['model'])
const rentals = props.model.map((rental) => {
  const id = rental.id
  const { title, owner, city, category, bedrooms, description, image } = rental.attributes
  return {
    id,
    title,
    owner,
    city,
    category,
    bedrooms,
    description,
    image,
  }
})
</script>

<template>
  <div class="rentals">
    <label>
      <span>Where would you like to stay?</span>
      <input class="light" />
    </label>

    <ul class="results">
      <li v-for="rental in rentals" :key="rental.id">
        <Rental :model="rental" />
      </li>
    </ul>
  </div>
</template>
