<script setup>
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

  <Head>
    <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
  </Head>

  <div>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
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

  @media (min-width: 992px) {
    max-width: 80%;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  @media (min-width: 1600px) {
    max-width: 1450px;
  }
}
</style>