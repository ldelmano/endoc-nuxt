<script setup lang="ts">
const spaceBetween = 10;


const onSlideChange = (e: any) => {
  console.log('slide changed')
}

</script>
  
<template>
  <swiper-container :slides-per-view="1" :space-between="spaceBetween" :pagination="{
    clickable: true
  }" @slidechange="onSlideChange">
    <swiper-slide v-for="(item, index) in [0, 1, 2, 3, 4, 5]">
      <div class="slider">
        <div class="slider__content">
          EnDoc envelopes are the best!
          The combination of quality and low prices cannot be met elsewhere.
        </div>

        <div class="slider__author">
          <div class="slider__author-initials">
            <span>RS</span>
          </div>

          <div class="slider__author-info">
            <span class="author-name">Rose Green</span>
            <span class="author-location">New York</span>
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
    flex: 1;
    margin-bottom: 1em;
    padding: 1em;
    background-image: url('/imgs/bg/review-card-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1em;


    font-weight: 500;
    font-size: 1.25em;
    line-height: 134%;
    color: var(--main-black-color);

    @media (min-width: 768px) {
      padding: 2.5em 6em 2.5em 2em;
    }

    @media (min-width: 992px) {
      margin-bottom: 0;
      border-radius: 0;
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