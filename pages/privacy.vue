<script setup lang="ts">
useHead({
  title: 'Endoc | Privacy Policy'
})


const { data } = await useAsyncData('privacy', () => queryContent('privacy').findOne());
</script>

<template>
  <div class="privacy-policy-page container px-3">
    <BaseBreadcrumb :items="[{ label: 'privacy policy', to: '/privacy' }]" />

    <section class="my-5 grid">
      <div class="col-12 lg:col-6 xl:col-5">
        <h1 class="page-title">EnDoc Privacy Policy</h1>
        <p class="page-description">Your information is safe with us</p>
      </div>

      <div class="col-12 lg:col-6 xl:col-7">
        <div class="page-content">
          <LazyContentRenderer :value="(data as any)" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.privacy-policy-page {
  &.container {
    color: var(--main-black-color);
  }

  .page-title {
    margin: 0;
    font-weight: 600;
    font-size: 2.25em;
  }

  .page-description {
    margin: 1.5em 0;
    font-weight: 500;
    font-size: 1.25em;
  }

  .page-content {
    padding: 2.5em;
    border-radius: 1.875em;
    background-color: #ffffff;
    color: #8C8E96;
    font-size: 1em;
    font-weight: 400;

    h2 {
      font-size: 1.625em;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;

      a {
        text-decoration: none;
        color: var(--main-black-color);
      }
    }
  }
}
</style>