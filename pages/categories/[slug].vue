<script setup lang="ts">
import { Category } from '@/models';

useHead({
  title: 'Endoc - Category'
})

const getData = async () => {
  const route = useRoute();

  const { data } = await useAsyncData('products', () => queryContent('/products').find());

  console.log(data.value)
}

onMounted(() => {
  getData();
})
</script>

<template>
  <NuxtLayout>
    <div>test</div>
  </NuxtLayout>
</template>
