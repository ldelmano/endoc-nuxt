<script setup lang="ts">
useHead({
  title: 'Page not found'
})
</script>

<template>
  <NuxtLayout>
    <div class="container">

      <section class="flex flex-column justify-content-center align-items-center">
        <img src="@/assets/imgs/404-illustration.svg" />


        <h3>No content was found for this page</h3>

        <BaseButton label="go to home" to="/" />
      </section>

    </div>
  </NuxtLayout>
</template>

<style scoped>
img {
  width: 100%;
  max-width: 24em;
}

h3 {
  font-size: 2.4em;
  color: #323747;
}
</style>