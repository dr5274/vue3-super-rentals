<template>
  <button
    type="button"
    class="image"
    :class="{ large: isLarge }"
    @click="toggleIsLarge()"
  >
    <img :src="src" :alt="alt" />
    <small v-if="isLarge">View Smaller</small>
    <small v-if="!isLarge">View Larger</small>
  </button>
</template>

<script>
export default {
  name: "RentalImage",
  components: {},

  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },

  data: () => ({
    isLarge: false,
  }),

  methods: {
    toggleIsLarge() {
      this.isLarge = !this.isLarge;
    },
  },
};
</script>
