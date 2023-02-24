<script setup lang="ts">
import { BaseFileContent } from '@/models';

interface BecomeSellerContent extends BaseFileContent {
  title: string;
  coverImage: string;
}

const { data } = await useAsyncData("home-become-seller", () =>
  queryContent<BecomeSellerContent>('home').where({ _id: { $contains: 'become-seller' } }).findOne()
);

onMounted(() => {
  console.log(data.value)
})
</script>

<template>
  <section class="become-seller">
    <div class="container">
      <div class="flex flex-column md:flex-row become-seller__wrapper">
        <div class="become-seller__picture">
          <img :src="data?.coverImage" />
        </div>
        <div class="become-seller__text">
          <h2 class="become-seller__title">{{ data?.title }}</h2>

          <div class="become-seller__text-body">
            <LazyContentRenderer :value="data || {}" />
          </div>


          <BaseButton label="contact us" to="#contact-form" />
        </div>
      </div>

      <ul class="become-seller__benefits grid">
        <li class="col-12 md:col-4">
          <div class="become-seller__benefits-item">
            <i class="icon-shipping"></i>
            <p>Drop Shipping Available!</p>
          </div>
        </li>

        <li class="col-12 md:col-4">
          <div class="become-seller__benefits-item">
            <i class="icon-savings"></i>
            <p>Savings on every order!</p>
          </div>
        </li>

        <li class="col-12 md:col-4">
          <div class="become-seller__benefits-item">
            <i class="icon-samples"></i>
            <p>We provide free samples!</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.become-seller {
  margin-top: 13em;
  background-image: url('~/assets/imgs/home-become-seller-bg.svg');
  background-size: cover;
  background-repeat: no-repeat;

  &__wrapper {
    // transform: translateY(-10em);
  }

  &__picture {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-top: -10em;
    border-radius: 1.875em;
    overflow: hidden;
    background-color: #f5f5f5;

    @media (max-width: 767px) {
      img {
        max-width: 30em;
      }
    }
  }

  &__text {
    margin-top: -10em;
    flex: 1;
    padding: 1.5em;
    border-radius: 1.875em;
    background: #C8DF3C;

    @media (min-width: 768px) {
      padding: 3em;
    }

    &-body {
      margin-bottom: 2em;
      font-weight: 500;
      font-size: 1.25em;
      line-height: 186%;
      color: #323747;
    }
  }

  &__title {
    margin: 0 0 1em;
    font-weight: 600;
    font-size: 2.25em;
    line-height: 130%;
    /* identical to box height, or 47px */


    color: #323747;
  }

  &__benefits {
    margin: 3em 0 0;
    list-style: none;
    padding: 0;

    &-item {
      padding: 1.5em;
      background-color: #ffffff;
      border-radius: 1.875em;
      color: #323747;

      i {
        font-size: 2em;
      }

      p {
        margin: 1em 0 0;
      }
    }
  }

}
</style>