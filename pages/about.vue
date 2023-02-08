<script setup lang="ts">
import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

interface WithImage extends MarkdownParsedContent {
  image: string;
}

interface Differential {
  label: string;
  description: string;
}

interface Section2 extends MarkdownParsedContent {
  image: string;
  differentials: Differential[];
}

const { data } = await useAsyncData('aboutus', () => queryContent('about-us').find());


useHead({
  title: 'Endoc | About Us'
})

const topBanner = ref<WithImage>()
const section1 = ref<WithImage>()
const section2 = ref<Section2>()

onMounted(() => {
  if (!data.value) return;

  topBanner.value = data.value.find(item => item.title === 'Topbanner') as WithImage;
  section1.value = data.value.find(item => item.title === 'Section1') as WithImage;
  section2.value = data.value.find(item => item.title === 'Section2') as Section2;
})
</script>

<template>
  <div class="container px-3">
    <BaseBreadcrumb :items="[{ label: 'about us', to: '/about' }]" />

    <section class="my-5">
      <div class="top-banner" v-if="topBanner">
        <div class="top-banner__img">
          <img :src="topBanner.image" />
        </div>

        <div class="top-banner__body">
          <LazyContentRenderer :value="topBanner" />
        </div>
      </div>

      <div class="grid section-1" v-if="section1">
        <div class="col-12 lg:col-6">
          <LazyContentRenderer :value="section1" />
        </div>

        <div class="col-12 lg:col-6">
          <div class="lg:ml-5">
            <img class="max-w-full" :src="section1.image" />
          </div>
        </div>
      </div>

      <div class="grid section-2" v-if="section2">
        <div class="col-12 lg:col-6">
          <div class="lg:mr-5">
            <img class="max-w-full" :src="section2.image" />
          </div>
        </div>
        <div class="col-12 lg:col-6">
          <ul>
            <li v-for="(item, index) in section2.differentials">
              {{ item.label }}
            </li>
          </ul>
        </div>

      </div>

      <BaseCarousel />

    </section>
  </div>
</template>

<style lang="scss" scoped>
.top-banner {
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  &__img {
    display: flex;
    overflow: hidden;
    border-radius: 1.875em;
    height: 200px;

    @media (min-width: 768px) {
      flex: 1;
    }


    @media (min-width: 1200px) {
      align-items: center;
      justify-content: center;
      width: 65%;
      height: auto;
      max-height: 20em;
    }
  }

  &__body {
    padding: 1em;
    border-radius: 1.875em;
    background-image: url("~/assets/imgs/bg-square.png");
    overflow: hidden;

    @media (min-width: 768px) {
      flex: 1;
      background-size: cover;
    }

    @media (min-width: 1200px) {
      width: 35%;
      max-width: 500px;
      padding: 5em;
    }

  }
}

.section-1,
.section-2 {
  margin-top: 10em;
}

.section-2 {
  margin-bottom: 10em;
}
</style>