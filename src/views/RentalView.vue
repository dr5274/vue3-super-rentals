<script setup>
import { useRoute } from "vue-router";
import { useRentals } from "@/composables/useRentals";
import Jumbo from "@/components/Jumbo";
import ShareButton from "@/components/ShareButton";
import RentalImage from "@/components/RentalImage";

const route = useRoute();
const id = route.params.id;
const { model: rental } = useRentals(id);
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
