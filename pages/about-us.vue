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

const icons = ['icon-service', 'icon-price', 'icon-premium']

const { data } = await useAsyncData('about-us', () => queryContent('aboutus').find());


useHead({
  title: 'Endoc | About Us'
})

const topBanner = ref<WithImage>()
const section1 = ref<WithImage>()
const section2 = ref<Section2>()

onMounted(() => {
  if (!data.value) return;

  console.log(data.value)

  topBanner.value = data.value.find(item => item.title === 'Topbanner') as WithImage;
  section1.value = data.value.find(item => item.title === 'Section1') as WithImage;
  section2.value = data.value.find(item => item.title === 'Section2') as Section2;
})
</script>

<template>
  <div class="container px-3">
    <BaseBreadcrumb :items="[{ label: 'about us', to: '/about-us' }]" />

    <section class="my-5">
      <div class="top-banner" v-if="topBanner">
        <div class="top-banner__img">
          <img :src="topBanner.image" />
        </div>

        <div class="top-banner__body">
          <div class="top-banner__endoc">
            <h4>EnDoc™</h4>
            <p>business & home envelopes</p>
          </div>

          <div class="top-banner__markdown">
            <ContentRenderer :value="topBanner" />
          </div>
        </div>
      </div>

      <PagesAboutNumbers />

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
          <ul class="differentials-list lg:ml-5">
            <li v-for="(item, index) in section2.differentials" class="differentials-item">
              <div class="differentials-item__icon">
                <i :class="icons[index]"></i>
              </div>

              <div class="differentials-item__content">
                <h6>{{ item.label }}</h6>

                <p>{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <BaseCarousel />

    </section>
  </div>
</template>

<style lang="scss" scoped>
.differentials-list {
  list-style: none;
  padding-left: 0;

  li+li {
    margin-top: 4em;
  }
}

.differentials-item {
  display: flex;
}

.differentials-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5em;
  height: 6.5em;
  background-color: #ffffff;
  border-radius: 1.875rem;

  i {
    font-size: 2rem;
  }
}

.differentials-item__content {
  flex: 1;
  margin-left: 1.875rem;

  h6 {
    margin: 0 0 1rem;
    font-weight: 500;
    font-size: 1.625em;
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 1em;
    color: #8C8E96;
  }
}

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
      height: 100%;
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

  &__endoc {
    margin-bottom: 3em;
    color: var(--dark-green-color);

    h4 {
      margin: 0;
      font-weight: 600;
      font-size: 2.25em;

    }

    p {
      margin: 0;
      font-weight: 500;
      font-size: 1.25em;
    }
  }

  &__markdown {
    font-weight: 500;
    font-size: 1.625em;
    color: var(--main-black-color);
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