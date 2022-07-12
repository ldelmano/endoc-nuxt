<script setup lang="ts">
const props = defineProps<{
  label: string;
  link?: boolean;
  to?: string;
  variant?: string;
  icon?: string;
}>()

defineEmits<{
  click: (event: Event) => void;
}>();

const variantState = computed(() => props.variant ? `btn--${props.variant}` : `btn--primary`);

</script>

<template>
  <NuxtLink v-if="to" :class="['btn', variantState, link && 'btn--link']" :to="to">
    {{ label }}

    <i v-if="icon" :class="`icon-${icon} ml-2`"></i>
  </NuxtLink>
  <button v-else @click="$emit('click')" :class="['btn', variantState]">
    {{ label }}

    <i v-if="icon" :class="`icon-${icon} ml-2`"></i>
  </button>
</template>

<style lang="scss" scoped>
%containerBtn {
  padding: 0.75em 2em;
  border-radius: 1.25em;
  font-size: 1.25em;
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 0;
  margin: 0;
  letter-spacing: 2%;
  text-decoration: none;
  cursor: pointer;

  &.btn--primary:not(.btn--link) {
    @extend %containerBtn;

    background-color: #323747;
    color: #ffffff;
  }

  &.btn--secondary:not(.btn--link) {
    @extend %containerBtn;

    border: 1px solid #323747;
    color: #323747;
  }

  &.btn--link {
    padding: 0;
    margin: 0;
    letter-spacing: 2%;
    font-size: 1.25em;
    font-weight: 600;


    &.btn--primary {
      color: #ffffff;
    }

    &.btn--secondary {
      color: #323747;
    }
  }
}
</style>