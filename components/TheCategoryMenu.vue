<script setup lang="ts">
import type { Category } from "@/models";

const hoverableElement = ref();
const isHovered = useElementHover(hoverableElement);

const categories = ref<Category[]>([]);
const { data } = await useAsyncData("categories", () =>
  queryContent<Category>("categories").find()
);

const route = useRoute();

onMounted(() => {
  if (!data.value) return;
  categories.value = data.value;
});
</script>

<template>
  <div class="menu mr-5" ref="hoverableElement">
    <div :class="['menu__btn', !route.meta.layout && 'menu__btn--internal']">
      <i class="icon-products-dropdown mr-2"></i>

      <NuxtLink to="/categories">our products</NuxtLink>
    </div>

    <div v-if="isHovered" class="menu__options-container">
      <NuxtLink to="/categories" class="menu__our-products-btn">
        <i class="icon-products-dropdown mr-2"></i>

        <span>our products</span>
      </NuxtLink>

      <ul class="menu__options-list">
        <li class="menu__options-item" v-for="(item, index) in categories">
          <NuxtLink :to="item._path">{{ item.title?.toLowerCase() }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  position: relative;

  a {
    text-decoration: none;
  }

  &__btn {
    &.menu__btn--internal {
      color: var(--dark-green-color);

      a {
        color: var(--dark-green-color);
      }
    }
  }

  &__btn,
  &__our-products-btn {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.25em;
    font-weight: 600;

    a {
      color: var(--main-black-color);
    }
  }

  &__options {
    &-container {
      position: absolute;
      top: 0;
      padding: 0.65em;
      background: #ffffff;
      box-shadow: 0px 6px 28px rgba(50, 55, 71, 0.12);
      border-radius: 1.25em;
    }

    &-list {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0 2.5em 2em;
      margin: 0;
    }

    &-item {
      flex: 1;
      width: max-content;
      font-size: 1.125em;
      font-weight: 500;
      letter-spacing: 0.02em;

      a {
        color: var(--main-black-color);
      }
    }

    &-item + &-item {
      margin-top: 0.75em;
    }
  }

  &__our-products-btn {
    margin-bottom: 1.5em;
    padding: 1em 1.25em;
    background: #f6f6f6;
    border-radius: 0.75em;
    color: var(--dark-green-color);
  }
}
</style>
