<script setup lang="ts">
import { Category, Product } from '@/models';

const route = useRoute();

const currentCategory = await useAsyncData(`category-${route.params.slug}`, () => queryContent('categories').where({ slug: route.params.slug }).findOne());

const productsQuery = await useAsyncData<Product[]>(`products-${route.params.slug}`, () => queryContent('products').where({ categorySlugs: { $contains: route.params.slug } }).find());

const products = ref<Product[]>([]);

const category = computed(() => currentCategory.data.value as Category);

const showModal = ref(false);
const modalContent = ref<Product | null>(null);
const handleProductDetails = (item: Product) => {
  modalContent.value = item;

  showModal.value = true;
}

const handleCloseModal = () => {
  showModal.value = false;
  modalContent.value = null;
}

useHead({
  title: `Endoc - ${category.value.title}`
})

onMounted(() => {
  products.value = productsQuery.data.value || [];
})
</script>

<template>
  <div class="container px-3">
    <BaseBreadcrumb
      :items="[{ label: 'our products', to: '/categories' }, { label: category.title || 'Category', to: category._path || '/' }]" />

    <section class="grid category-page my-5">
      <article class="col-12 md:col-6 xl:col-4">
        <h1 class="mb-3 md:mb-5">{{ category.title }}</h1>

        <BaseButton label="back to all categories" icon="arrow-left" icon-on-left variant="secondary" to="/categories" />
      </article>
      <article class="col-12 md:col-6 xl:col-4 product cursor-pointer" @click="() => handleProductDetails(product)"
        v-for="product in products">
        <div class="product__card">
          <div class="product__img">
            <img :src="product.thumbnail || (product.pictures ? product.pictures[0].url : '')" />
          </div>

          <div class="product__info">
            <h4>{{ product.title }}</h4>

            <p v-if="product.description">{{ product.description }}</p>
          </div>

          <BaseButton label="details" icon="arrow-right" link variant="secondary"
            @click="() => handleProductDetails(product)" />
        </div>
      </article>
    </section>

    <BaseModal v-show="showModal" @close-modal="handleCloseModal">
      <template #content>
        <div class="modal-content" v-if="modalContent">
          <img :src="modalContent.thumbnail || (modalContent.pictures ? modalContent.pictures[0].url : '')" />

          <div class="product-info">
            <h3 class="product-info__name">{{ modalContent.title }}</h3>
            <p class="product-info__id">Item #: {{ modalContent.id }}</p>

            <ul class="product-info__attributes">
              <li v-for="(item, index) in modalContent?.attributes">
                <span class="product-info__attr-name">{{ item.label }}</span>
                <span class="product-info__attr-value">{{ item.value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </BaseModal>

  </div>
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

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em;
  overflow: scroll;
  height: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 5em;
  }

  img {
    width: 100%;
    max-width: 23em;

    @media screen and (max-width: 767px) {
      margin-bottom: 1em;
    }
  }

  .product-info {
    @media screen and (min-width: 768px) {
      margin-left: 5em;
      flex: 1;
    }

    &__name {
      margin: 0 0 0.875em;
      font-weight: 500;
      font-size: 1.625;
      line-height: 134%;
      color: #323747;
    }

    &__id {
      margin: 0;
      font-weight: 400;
      font-size: 0.8125em;
      line-height: 134%;
      color: #8C8E96;
    }

    &__attributes {
      margin: 1.875em 0;
      list-style: none;
      padding: 1em;
      background: #F6F6F6;
      border-radius: 1.875em;

      @media screen and (min-width: 768px) {
        padding: 2.5em;
      }

      li {
        display: flex;
        justify-content: space-between;
        position: relative;

        &:not(:last-child) {
          margin-bottom: 2em;
        }
      }

      li+li::before {
        content: '';
        position: absolute;
        display: flex;
        width: 100%;
        height: 1px;
        background: #E0E2EB;
        transform: translateY(-1em);
      }
    }

    &__attr-name {
      font-weight: 400;
      font-size: 1em;
      line-height: 182%;

      color: #323747;

      opacity: 0.5;
    }

    &__attr-value {
      margin-left: 1.5em;
      font-weight: 400;
      font-size: 1em;
      line-height: 182%;
      text-align: right;


      color: #323747;

    }
  }
}
</style>