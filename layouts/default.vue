<template>
  <main class="container">
    <TheHeader />

    <div class="absolute-content">
      <div>
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
main {
  font-family: 'Poppins';
}

.absolute-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  >div {
    position: relative;
  }
}
</style>