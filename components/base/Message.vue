<template>
  <div :class="['message', { row: direction === 'row' }]">
    <div class="message__content">
      <div class="message__content-text">
        <slot name="content"></slot>
      </div>
    </div>

    <div class="message__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  direction?: "row" | "column";
}>();
</script>

<style scoped lang="scss">
.message {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
  border-radius: 2em;
  background-color: #006a6e;

  @media (min-width: 768px) {
    padding: 5em;
  }

  &__content {
    flex: 1;
    margin: 0 0 1.5em 0;
    font-weight: 500;
    font-size: 1.5em;
    color: #ffffff;

    @media (min-width: 768px) {
      margin: 0 1em 0 0;
    }

    &-text {
      max-width: 840px;
      text-align: justify;
    }
  }

  &.row {
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__action {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
