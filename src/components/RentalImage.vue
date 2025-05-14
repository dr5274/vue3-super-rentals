<script setup>
import { ref } from 'vue';

const props = defineProps(['src','alt'])
const isLarge = ref(false)
function toggleIsLarge() {
  isLarge.value = !isLarge.value;
}
</script>

<template>
  <button type="button" class="image" :class="{ large: isLarge }" @click="toggleIsLarge()">
    <img :src="src" :alt="alt" />
    <small v-if="isLarge">View Smaller</small>
    <small v-if="!isLarge">View Larger</small>
  </button>
</template>
