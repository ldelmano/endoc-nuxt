<script setup lang="ts">
const props = defineProps<{
  class?: string;
  label: string;
  link?: boolean;
  to?: string;
  variant?: string;
  icon?: string;
  iconOnLeft?: boolean;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const variantState = computed(() =>
  props.variant ? `btn--${props.variant}` : `btn--primary`
);
</script>

<template>
  <NuxtLink
    v-if="to"
    :class="[
      'btn',
      variantState,
      link && 'btn--link',
      iconOnLeft && 'btn--icon-left',
      props.class,
    ]"
    :to="to"
  >
    {{ label }}

    <i v-if="icon" :class="`icon-${icon} ${iconOnLeft ? 'mr-2' : 'ml-2'}`"></i>
  </NuxtLink>
  <button
    v-else
    @click.stop="emit('click')"
    type="button"
    :disabled="props.loading"
    :class="[
      'btn',
      link && 'btn--link',
      variantState,
      iconOnLeft && 'btn--icon-left',
      props.class,
    ]"
  >
    <span>{{ label }}</span>

    <i v-if="icon" :class="`icon-${icon} ${iconOnLeft ? 'mr-2' : 'ml-2'}`"></i>
  </button>
</template>

<style lang="scss" scoped>
%containerBtn {
  padding: 0.75rem 2rem;
  border-radius: 1.25rem;
  font-size: 1.25rem;
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

  &.btn--icon-left {
    flex-direction: row-reverse;
  }

  &.btn--link {
    padding: 0;
    margin: 0;
    letter-spacing: 2%;
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffff;

    &.btn--primary {
      color: #ffffff;
    }

    &.btn--secondary {
      color: #323747;
    }
  }
}
</style>
