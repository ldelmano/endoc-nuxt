<script setup lang="ts">
import { BaseFileContent } from "@/models";

interface ListItem {
  description: string;
  label: string;
}

interface Section extends BaseFileContent {
  list: ListItem[];
  title: string;
}

const sectionId = "content:home:section1.md";
const { data } = await useAsyncData("home:section1", () =>
  queryContent<Section>("home").where({ _id: sectionId }).findOne()
);

// onMounted(() => {
//   console.log(data.value);
// });
</script>

<template>
  <section class="business-diff">
    <div class="container">
      <div class="flex flex-column md:flex-row">
        <div class="mb-4 md:mb-0 md:mr-5 business-diff__description">
          <h3 class="business-diff__section-title">{{ data?.title }}</h3>

          <div class="business-diff__md-content">
            <LazyContentRenderer :value="data || {}" />
          </div>
        </div>

        <ul class="business-diff__list">
          <li class="diff-item" v-for="(item, index) in data?.list" :key="`diff-item-${index}`">
            <div class="diff-item__header">
              <div class="diff-item__chart">
                <div :class="`pie-wrapper progress-${(index + 1) * 25}`">
                  <span class="label">{{ index + 1 }}</span>
                  <div class="pie">
                    <div class="left-side half-circle"></div>
                    <div class="right-side half-circle"></div>
                  </div>
                  <div class="shadow"></div>
                </div>
              </div>

              <h4>{{ item.label }}</h4>

            </div>

            <div class="diff-item__body">
              {{ item.description }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "sass:math";

// -- vars
$bg-color: #eeeded;
$progress-color: #006A6E;
$default-size: 1em;
$label-font-size: math.div($default-size, 3);
$label-font-size-redo: $default-size * 3;

// -- mixins
@mixin size($width, $height) {
  height: $height;
  width: $width;
}

@mixin draw-progress($progress, $color) {
  .pie {
    .half-circle {
      border-color: $color;
    }

    .left-side {
      transform: rotate($progress * 3.6deg);
    }

    @if $progress <=50 {
      .right-side {
        display: none;
      }
    }

    @else {
      clip: rect(auto, auto, auto, auto);

      .right-side {
        transform: rotate(180deg);
      }
    }
  }
}

@mixin draw-progress--solid($progress, $color, $bg-color) {
  background: linear-gradient(to right, $color 50%, $bg-color 50%);

  &:before {
    @if $progress <=50 {
      background: $bg-color;
      transform: rotate(math.div((100 - (50 - $progress)), 100) * 360deg * -1);
    }

    @else {
      background: $color;
      transform: rotate(math.div((100 - $progress), 100) * 360deg);
    }
  }
}

.business-diff {
  &__section-title {
    font-weight: 600;
    font-size: 2.25em;
    line-height: 130%;
    /* identical to box height, or 47px */


    color: #323747;
  }

  &__md-content {
    font-weight: 500;
    font-size: 1.25em;
    line-height: 186%;
    /* or 37px */


    color: #323747;
  }

  &__description {
    max-width: 585px;
  }

  &__list {
    padding-left: 0;
  }

  .diff-item {
    list-style-type: none;

    &__header {
      display: flex;
      align-items: center;
      margin-bottom: 1em;

      h4 {
        margin: 0 0 0 1em;
        font-weight: 500;
        font-size: 1.625em;
        line-height: 160%;
        color: #323747;
      }
    }

    &__body {
      padding-left: 6em;
      font-weight: 400;
      font-size: 1em;
      line-height: 182%;
      /* or 29px */


      color: #8C8E96;
    }

    +.diff-item {
      margin-top: 3em;
    }
  }

  .diff-item__chart {
    font-size: 4em;
  }
}

.pie-wrapper {
  @include size($default-size, $default-size);
  float: left;
  position: relative;

  &:nth-child(3n + 1) {
    clear: both;
  }

  .pie {
    @include size(100%, 100%);
    clip: rect(0, $default-size, $default-size, math.div($default-size, 2));
    left: 0;
    position: absolute;
    top: 0;

    .half-circle {
      @include size(100%, 100%);
      border: math.div($default-size, 10) solid $progress-color;
      border-radius: 50%;
      clip: rect(0, math.div($default-size, 2), $default-size, 0);
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  .label {
    border-radius: 50%;
    bottom: math.div($label-font-size-redo, 10);
    color: #A7C1C1;
    cursor: default;
    display: block;
    font-size: $label-font-size;
    left: math.div($label-font-size-redo, 10);
    line-height: $label-font-size-redo * .70;
    position: absolute;
    right: math.div($label-font-size-redo, 10);
    text-align: center;
    top: math.div($label-font-size-redo, 10);

    .smaller {
      color: #bdc3c7;
      font-size: .45em;
      padding-bottom: 20px;
      vertical-align: super;
    }
  }

  .shadow {
    @include size(100%, 100%);
    border: math.div($default-size, 10) solid $bg-color;
    border-radius: 50%;
  }

  &.progress-25 {
    @include draw-progress(25, $progress-color);
  }

  &.progress-50 {
    @include draw-progress(50, $progress-color);
  }

  &.progress-75 {
    @include draw-progress(75, $progress-color);
  }

  &.progress-100 {
    @include draw-progress(100, $progress-color);
  }
}
</style>
