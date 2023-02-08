<script setup lang="ts">
const { data } = await useAsyncData('aboutus', () => queryContent('about-us').find());

useHead({
  title: 'Endoc | About Us'
})
</script>

<template>
  <div class="container">
    <h1>About</h1>


  </div>
</template>