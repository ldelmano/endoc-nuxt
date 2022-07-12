<template>
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