<script setup lang="ts">
import type { Category } from "@/models";

definePageMeta({ layout: "home" });

useHead({
  title: "Endoc - Business and home envelopes",
});

const { data } = await useAsyncData("categories", () =>
  queryContent("categories").find()
);

const categories = ref<Category[]>([]);

const visibleCategories = computed(() =>
  categories.value.filter((category) => category.showOnHome).slice(0, 6)
);

onMounted(() => {
  if (!data.value) return;
  categories.value = data.value;
});

const goToContactSection = () => {
  document.getElementById("contact-form")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <div class="absolute-content">
    <section class="home-top-banner">
      <div class="flex md:justify-content-between container mb-5">
        <div class="home-top-banner__cta md:flex-1">
          <span class="endoc-title"
            ><strong>Endoc</strong><small>TM</small></span
          >
          <span class="endoc-subtitle mt-2 mb-4"
            >Your #1 supplier for home home & business envelopes.</span
          >
        </div>

        <div class="home-top-banner__envelopes md:flex-1">
          <img src="@/assets/imgs/home-top-banner-envelope-1.png" />
          <img src="@/assets/imgs/home-top-banner-envelope-2.png" />
          <img src="@/assets/imgs/home-top-banner-envelope-3.png" />
        </div>
      </div>

      <div class="container">
        <BaseMessage direction="row">
          <template #content>
            <div>
              Envelop your brand in quality and style because envelopes are the
              window to your brand's soul.
            </div>
          </template>

          <template #action>
            <BaseButton
              label="explore more"
              to="/categories"
              variant="link"
              icon="arrow-right"
            ></BaseButton>
          </template>
        </BaseMessage>
      </div>
    </section>

    <section class="our-products">
      <div class="container">
        <div
          class="flex flex-column md:flex-row justify-content-between align-items-center"
        >
          <h2 class="text-h2">Our Products</h2>

          <BaseButton
            label="explore all products"
            to="/categories"
            variant="secondary"
          ></BaseButton>
        </div>

        <ul class="our-products__list grid">
          <li
            v-for="(category, index) in visibleCategories"
            class="our-products__item col-12 md:col-6 xl:col-4"
          >
            <NuxtLink :to="category._path">
              <img class="card-bg" :src="`/imgs/bg/card-bg-${index + 1}.png`" />
              <img class="product-img" :src="category.icon" />

              <span class="product-name">{{ category.title }}</span>

              <i class="icon-arrow-right"></i>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>

    <section class="buy-blocks">
      <div class="container">
        <div class="buy-blocks__row">
          <div class="buy-blocks__item">
            <h3 class="text-h3">
              Retail Orders on <img src="/imgs/amazon.png" />
            </h3>
            <p class="buy-blocks__item-text">
              Convenient online shopping with fast delivery.
            </p>
            <BaseButton
              class="buy-blocks__button"
              label="buy on amazon"
              to="https://www.amazon.com/s?k=endoc"
              variant="secondary"
              target="_blank"
            />
          </div>
          <div class="buy-blocks__item">
            <h3 class="text-h3">Large Orders via <img src="/imgs/be.svg" /></h3>
            <p class="buy-blocks__item-text">
              Optimized for businesses and bulk buyers.
            </p>
            <BaseButton
              class="buy-blocks__button btn-white"
              label="buy on business envelopes"
              to="https://www.businessenvelopes.com/endoc"
              variant="secondary"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>

    <PagesHomeBusinessDifferentials />

    <PagesHomeBecomeSeller />

    <section class="home-page-reviews">
      <div class="container">
        <BaseCarousel />
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<style lang="scss">
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

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

.absolute-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  > *:first-child {
    position: relative;
    padding: 15em 1em 3em;

    @media (min-width: 768px) {
      padding: 13em 1em 6em;
    }

    @media (min-width: 1200px) {
      padding: 10em 1em 8em;
    }
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

  background-image: url("~/assets/imgs/home-top-banner-bg.png");
  background-size: cover;

  animation: fade-in 1s ease-in-out;

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

      letter-spacing: 0.11em;
      text-transform: uppercase;

      color: #006a6e;

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
      color: #006a6e;
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
    margin: 2em 0;
    padding-left: 0;
    list-style: none;

    @media (min-width: 768px) {
      margin: 2em -2em;
    }
  }

  &__item {
    box-sizing: content-box;
    padding: 1em 2em;

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
        margin-right: 1em;

        @media (min-width: 768px) {
          margin-right: 0;
          transform: translateX(-60%);
        }
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

.buy-blocks {
  margin: 6em auto;
}

.buy-blocks__row {
  display: flex;
  width: 100%;
}

.buy-blocks__item {
  flex: 1 1 0;
  min-width: 0;
  min-height: 320px;
  border-radius: 30px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;

  .btn-white {
    color: #ffffff !important;
    border-color: #ffffff !important;
  }
}

.buy-blocks__item:first-child {
  background-image: url("/imgs/bg/buy-block-amazon.png");

  h3 {
    align-items: end;
  }
}

.buy-blocks__item:last-child {
  background-image: url("/imgs/bg/buy-block-be.png");

  h3,
  .buy-blocks__item-text {
    color: #ffffff;
  }
}

.buy-blocks__item h3 {
  font-size: 1.6em;
  font-weight: 500;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: #222;
}

.buy-blocks__item img {
  height: 28px;
  vertical-align: middle;
}

.buy-blocks__item-text {
  font-size: 1.1em;
  color: #222;
  margin-bottom: 4em;
}

.buy-blocks__button {
  align-self: flex-start;
  padding: 0.7em 2em;
  border-radius: 999px;
  border: 1.5px solid #222;
  background: transparent;
  color: #222;
  font-weight: 600;
  font-size: 1em;
  transition: background 0.2s, color 0.2s, border 0.2s;
  box-shadow: none;
}

@media (max-width: 900px) {
  .buy-blocks__row {
    flex-direction: column;
    gap: 1.5em;
  }
}

.home-page-reviews {
  position: relative;
  margin-top: 10em;
  margin-bottom: 5em;
}
</style>
