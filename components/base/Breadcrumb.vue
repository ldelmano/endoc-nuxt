<script setup lang="ts">
interface BreadcrumbItem {
  label: string;
  to: string;
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="breadcrumb">
    <ul>
      <li class="px-3">
        <NuxtLink to="/">home</NuxtLink>
      </li>
      <li class="px-3" v-for="item in items">
        <NuxtLink :to="item.to">
          {{ item.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
  }

  li:not(li:first-child) {
    &::before {
      content: '>';
      position: absolute;
      left: 0;
      transform: translateX(-50%);
      font-size: 12px;
      color: #8C8E96;
    }
  }

  a {
    font-size: 13px;
    font-weight: 500;
    color: #323747;
    text-decoration: none;

    &.router-link-exact-active {
      color: #8C8E96;
    }
  }
}
</style>