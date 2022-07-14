<script setup lang="ts">
import { Category } from '@/models';

useHead({
  title: 'Endoc - Category'
})

const route = useRoute();

const { data } = await useAsyncData('products', () => queryContent('/products').where({ category: route.params.slug }).find());

onMounted(() => {
  console.log(data.value)
  console.log(route.params.slug)
})
</script>

<template>
  <NuxtLayout>
    <div>test</div>
  </NuxtLayout>
</template>
