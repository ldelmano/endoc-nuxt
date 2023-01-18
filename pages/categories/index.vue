<script setup lang="ts">
import { Category } from '@/models';

useHead({
  title: 'Endoc - Categories'
})

const categories = ref<Category[]>([]);
const { data } = await useAsyncData('categories', () => queryContent('categories').find());


onMounted(() => {
  categories.value = data.value
})

</script>

<template>
  <div class="container px-3">

    <BaseBreadcrumb :items="[{ label: 'our products', to: '/categories' }]" />

    <section class="grid category my-5">
      <article class="col-12 md:col-6 xl:col-4" v-for="category in categories">
        <NuxtLink :to="category._path" class="category__card">
          <div class="p-4 flex-1">
            <img class="category__icon" :src="category.icon" />

            <h4 class="category__title">{{ category.title }}</h4>
          </div>

          <div class="category__button">
            <i class="icon-arrow-right"></i>
          </div>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>

<style lang="scss">
.category {
  &__card {
    display: flex;
    background-color: #ffffff;
    padding: 0.75em;
    border-radius: 30px;
    text-decoration: none;
  }

  &__icon {
    width: 100px;
    margin-bottom: 2.5em;
  }

  &__title {
    margin: 0;
    height: 3em;
    font-size: 1.75em;
    font-weight: 500;
    line-height: 1.35;
    color: #323747;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    border-radius: 20px;
    background-image: url('@/assets/imgs/category-card-action-bg.png');
    background-size: cover;

    i {
      font-size: 21px;
      color: #323747;
    }
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>  