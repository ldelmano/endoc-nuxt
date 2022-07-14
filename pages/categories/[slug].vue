<script setup lang="ts">
import { Category, Product } from '@/models';

const route = useRoute();

const currentCategory = await useAsyncData(`category-${route.params.slug}`, () => queryContent('categories').where({ slug: route.params.slug }).findOne())
const productsQuery = await useAsyncData(`products-${route.params.slug}`, () => queryContent('products').where({ category: route.params.slug }).find());

const products = ref<Product[]>([]);

const category = computed(() => currentCategory.data.value as Category);

useHead({
  title: `Endoc - ${category.value.title}`
})

onMounted(() => {
  products.value = productsQuery.data.value;
})
</script>

<template>
  <NuxtLayout>
    <div class="container px-3">
      <BaseBreadcrumb
        :items="[{ label: 'our products', to: '/categories' }, { label: category.title, to: category._path }]" />

      <section class="grid category-page my-5">
        <article class="col-12 md:col-6 xl:col-4">
          <h1 class="mb-3 md:mb-5">{{ category.title }}</h1>

          <BaseButton label="back to all categories" icon="arrow-left" icon-on-left variant="secondary"
            to="/categories" />
        </article>
        <article class="col-12 md:col-6 xl:col-4 product" v-for="product in products">
          <div class="product__card">
            <div class="product__img">
              <img :src="product.thumbnail" />
            </div>

            <div class="product__info">
              <h4>{{ product.title }}</h4>

              <p v-if="product.description">{{ product.description }}</p>
            </div>

            <BaseButton label="details" icon="arrow-right" link variant="secondary" />
          </div>
        </article>
      </section>

    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 600;
  font-size: 2.25em;
  line-height: 130%;
  color: #323747;
}

.product {
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 1.25em;
    background-color: #ffffff;
    border-radius: 30px;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 160px;
    padding: 0.75em;
    margin-bottom: 2em;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
    margin-bottom: 1.5em;
    padding: 1.25em;
    border-radius: 20px;
    background-color: #f6f6f6;

    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 1.25em;
      line-height: 134%;
      text-align: center;
      color: #323747;
    }

    p {
      margin: 0;
      font-weight: 400;
      font-size: 0.75em;
      line-height: 134%;

      text-align: center;

      color: #8C8E96;
    }
  }
}
</style>