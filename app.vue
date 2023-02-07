<script setup>
import { register } from 'swiper/element/bundle';

register();

useHead({
  script: [{
    src: "https://identity.netlify.com/v1/netlify-identity-widget.js"
  }]
})

onMounted(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
})


</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
  font-size: 70%;
  background-color: #f7f7f7;

  @media (min-width: 992px) {
    font-size: 100%;
  }
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 992px) {
    max-width: 80%;
    padding: 0;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1600px) {
    max-width: 1450px;
  }
}
</style>