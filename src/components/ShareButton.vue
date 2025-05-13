<script setup>
const props = defineProps(['text'])
</script>
<template>
  <a target="_blank" rel="external nofollow noopener noreferrer" class="share button">
    <slot name="content" />
  </a>
</template>
