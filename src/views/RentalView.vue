<script setup>
import { useRoute } from 'vue-router'
import rentals from '@/data/rentals.json'
import Jumbo from '@/components/Jumbo.vue'
import ShareButton from '@/components/ShareButton.vue'
import RentalImage from '@/components/RentalImage.vue'

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment']

const route = useRoute()
const id = route.params.id
const model = rentals.data.filter((rental) => rental.id === id)[0]
const { title, owner, city, category, bedrooms, description, image } = model.attributes
const rental = {
  id: id,
  owner: owner,
  type: COMMUNITY_CATEGORIES.includes(category) ? 'Community' : 'Standalone',
  category: category,
  city: city,
  bedrooms: bedrooms,
  image: image,
  title: title,
  description: description,
}
</script>

<template>
  <div>
    <Jumbo>
      <template #content>
        <h2>{{ rental.title }}</h2>
        <p>
          Nice find! This looks like a nice place to stay near
          {{ rental.city }}.
        </p>
        <ShareButton text="Check out {rental.title} on Super Rentals!">
          <template #content> Share on Twitter </template>
        </ShareButton>
      </template>
    </Jumbo>

    <article class="rental detailed">
      <RentalImage :src="rental.image" :alt="`A picture of ${rental.title}`" />

      <div class="details">
        <h3>About {{ rental.title }}</h3>

        <div class="detail owner">
          <span>Owner:</span>
          {{ rental.owner }}
        </div>
        <div class="detail type">
          <span>Type:</span>
          {{ rental.type }}
          –
          {{ rental.category }}
        </div>
        <div class="detail location">
          <span>Location:</span>
          {{ rental.city }}
        </div>
        <div class="detail bedrooms">
          <span>Number of bedrooms:</span>
          {{ rental.bedrooms }}
        </div>
        <div class="detail description">
          <p>{{ rental.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>
