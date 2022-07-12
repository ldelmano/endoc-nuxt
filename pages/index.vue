<script setup lang="ts">
import { Category } from '@/models';

useHead({
  title: 'Endoc - Business and home envelopes'
})

const { data } = await useAsyncData('categories', () => queryContent('categories').find());

const categories = ref<Category[]>([])

const visibleCategories = computed(() => categories.value.filter(category => category.showOnHome).slice(0, 6))

onMounted(() => {
  categories.value = data.value

  console.log(data.value)
})
</script>


<template>
  <NuxtLayout>
    <section class="home-top-banner">
      <div class="flex md:justify-content-between container mb-5">
        <div class="home-top-banner__cta md:flex-1">
          <span class="endoc-title"><strong>Endoc</strong><small>TM</small></span>
          <span class="endoc-subtitle mt-2 mb-4">business & home envelopes</span>

          <BaseButton label="become a seller" />
        </div>

        <div class="home-top-banner__envelopes md:flex-1">
          <img src="@/assets/imgs/home-top-banner-envelope-1.png" />
          <img src="@/assets/imgs/home-top-banner-envelope-2.png" />
          <img src="@/assets/imgs/home-top-banner-envelope-3.png" />
        </div>
      </div>

      <div class="container">
        <BaseMessage>
          <template #content>
            At Endoc, we source and supply high quality, USA made envelopes for all your business needs.
          </template>

          <template #action>
            <BaseButton label="explore more" link to="#" icon="arrow-down" />
          </template>
        </BaseMessage>
      </div>
    </section>

    <section class="our-products">
      <div class="container">
        <div class="flex flex-column md:flex-row justify-content-between align-items-center">
          <h2 class="text-h2">Our Products</h2>

          <BaseButton label="explore all products" to="/categories" variant="secondary"></BaseButton>
        </div>

        <ul class="our-products__list grid">
          <li v-for="(category, index) in visibleCategories" class="our-products__item col-12 md:col-6 xl:col-4">
            <a :href="category._path">
              <img class="card-bg" :src="`/imgs/bg/card-bg-${index + 1}.png`" />
              <img class="product-img" :src="category.icon" />

              <span class="product-name">{{ category.title }}</span>

              <i class="icon-arrow-right"></i>
            </a>
          </li>
        </ul>
      </div>

    </section>
  </NuxtLayout>
</template>

<style lang="scss">
@keyframes slide-envelope-1 {
  0% {
    transform: translate(2em, -2em);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-envelope-2 {
  0% {
    transform: translate(2em, 0);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes slide-envelope-3 {
  0% {
    transform: translate(2em, 2em);
  }

  100% {
    transform: translate(0);
  }
}

.home-top-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15em 1em 3em;
  z-index: 0;
  overflow-x: hidden;

  background-image: url('~/assets/imgs/home-top-banner-bg.svg');
  background-size: cover;

  @media (min-width: 768px) {
    padding: 13em 1em 6em;
  }

  @media (min-width: 1200px) {
    background-size: contain;
    background-repeat: no-repeat;

    padding: 10em 1em 8em;
  }

  &__cta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5em;

    @media (min-width: 1200px) {
      margin-bottom: 7em;
    }

    .endoc-title {
      display: flex;
      font-weight: 700;

      letter-spacing: 0.11rem;
      text-transform: uppercase;

      color: #006A6E;

      strong {
        font-size: 5em;
        line-height: 100%;

        @media (min-width: 1200px) {
          font-size: 7em;
        }
      }

      small {
        font-size: 1.5em;
      }
    }

    .endoc-subtitle {
      font-weight: 500;
      font-size: 1.25em;
      color: #006A6E;
    }
  }

  &__envelopes {
    position: relative;

    img {
      position: absolute;
      width: 15em;
      z-index: -1;

      @media (min-width: 768px) {
        width: 24em;
      }
    }

    img:nth-child(1) {
      left: 3em;
      animation: slide-envelope-1 1s ease-in-out;

      @media (min-width: 768px) {
        top: -4em;
      }
    }

    img:nth-child(2) {
      top: 2em;
      left: 6em;
      animation: slide-envelope-2 1s ease-in-out;

      @media (min-width: 768px) {
        top: 1em;
        left: 8em;
      }
    }

    img:nth-child(3) {
      top: 5em;
      left: 0;
      animation: slide-envelope-3 1s ease-in-out;
    }
  }
}

.our-products {
  margin: 6em auto;

  &__list {
    margin: 2em -2em;
    padding-left: 0;
    list-style: none;
  }

  &__item {
    box-sizing: content-box;
    padding: 1rem 2em;

    a {
      position: relative;
      display: flex;
      align-items: center;
      height: 150px;
      padding: 1.25em;
      text-decoration: none;

      .card-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      .product-img {
        width: 90px;
        transform: translateX(-60%);
      }

      .product-name {
        flex: 1;
        font-weight: 500;
        font-size: 1.5em;
        line-height: 116%;

        text-transform: capitalize;

        color: #323747;
      }

      i {
        align-self: flex-end;
        font-size: 21px;
        color: #323747;
      }
    }
  }
}
</style>