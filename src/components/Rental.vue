<script setup>
import RentalImage from "@/components/RentalImage";

const props = defineProps(["rental"]);
const { rental } = props;
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
