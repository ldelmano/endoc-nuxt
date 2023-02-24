<script setup lang="ts">
import { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types';

const spaceBetween = 10;

interface Review {
  body: MarkdownParsedContent;
  authorName: string;
  authorSubtitle: string;
}

const { data } = await useAsyncData('reviews', () => queryContent<Review>('reviews').find())

const getInitials = (name: string) => {
  const words = name.split(' ');

  let initials = [];

  for (let word of words) {
    initials.push(word.charAt(0).toUpperCase())
  }

  return initials.join('');
}

const pagination = ref({
  clickable: true
})

onMounted(() => {
  pagination.value = {
    clickable: true
  }

})

</script>
  
<template>
  <swiper-container :slides-per-view="1" :space-between="spaceBetween" :pagination="pagination">
    <swiper-slide v-for="(item, index) in data">
      <div class="slider">
        <div class="slider__content">
          <img src="/imgs/bg/review-card-bg.svg" />


          <div>
            <ContentRenderer :value="item || {}" />
          </div>
        </div>

        <div class="slider__author">
          <div class="slider__author-initials">
            <span>{{ getInitials(item.authorName) }}</span>
          </div>

          <div class="slider__author-info">
            <span class="author-name">{{ item.authorName }}</span>
            <span class="author-location">{{ item.authorSubtitle }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper-container>
</template>


<style scoped lang="scss">
swiper-container {
  padding-bottom: 2em;
}

.slider {
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  &__content {
    position: relative;
    flex: 1;
    margin-bottom: 1em;
    padding: 1em;
    // background-image: url('/imgs/bg/review-card-bg.svg');
    // background-size: cover;
    // background-repeat: no-repeat;
    border-radius: 1em;


    font-weight: 500;
    font-size: 1.25em;
    line-height: 134%;
    color: var(--main-black-color);

    @media (min-width: 768px) {
      padding: 1.5em 7em 1.5em 1.5em;
    }

    @media (min-width: 992px) {
      margin-bottom: 0;
      border-radius: 0;
    }

    img {
      position: absolute;
      z-index: 0;
      max-width: 100%;
      top: 0;
      left: 0;
      height: 100%;
    }

    >div {
      position: inherit;
      z-index: 1;
    }
  }

  &__author {
    display: flex;
    align-items: center;

    &-initials {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 6.25em;
      height: 6.25em;
      margin-right: 1.5em;
      border-radius: 50%;
      background-color: var(--lime-color);
      overflow: hidden;

      span {
        font-weight: 600;
        font-size: 2.25em;
        text-align: center;
        text-transform: uppercase;

        color: var(--main-black-color);
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
    }

    .author-name {
      font-weight: 500;
      font-size: 1.25em;
      line-height: 134%;
      /* identical to box height, or 27px */


      color: var(--main-black-color);
    }

    .author-location {
      font-weight: 400;
      font-size: 1em;
      line-height: 134%;

      color: var(--text-grey);
    }
  }
}
</style>