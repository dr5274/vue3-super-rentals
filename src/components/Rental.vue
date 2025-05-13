<script setup>
import RentalImage from '@/components/RentalImage.vue'

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment']

const props = defineProps(['model'])
const rental = {
  id: props.model.id,
  owner: props.model.owner,
  type: COMMUNITY_CATEGORIES.includes(props.model.category) ? 'Community' : 'Standalone',
  city: props.model.city,
  bedrooms: props.model.bedrooms,
  image: props.model.image,
  title: props.model.title,
}
</script>

<template>
  <article class="rental">
    <RentalImage :src="rental.image" :alt="`A picture of ${rental.title}`" />
    <div class="details">
      <h3>
        <router-link :to="{ name: 'rental', params: { id: rental.id } }">
          {{ rental.title }}
        </router-link>
      </h3>
      <div class="detail owner">
        <span>Owner: </span>
        {{ rental.owner }}
      </div>
      <div class="detail type">
        <span>Type: </span>
        {{ rental.type }}
      </div>
      <div class="detail location">
        <span>Location: </span>
        {{ rental.city }}
      </div>
      <div class="detail bedrooms">
        <span>Number of bedrooms: </span>
        {{ rental.bedrooms }}
      </div>
    </div>
  </article>
</template>
