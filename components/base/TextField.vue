<script setup lang="ts">
interface Props {
  class?: string;
  textarea?: boolean;
  type?: string;
  required?: boolean;
  placeholder?: string;
  modelValue: string;
  outlined?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  class: undefined,
  type: 'text',
  textarea: false,
  required: false,
  outlined: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div :class="['text-field', outlined && 'text-field--outlined', props.class]">
    <input v-if="!textarea" :class="['text-field__input']" :required="props.required" :type="props.type"
      :modelValue="props.modelValue" :placeholder="props.placeholder"
      @input="(e: any) => emit('update:modelValue', e.target.value)" />

    <textarea :class="['text-field__textarea']" :placeholder="props.placeholder" :modelValue="props.modelValue"
      @input="(e: any) => emit('update:modelValue', e.target.value)" v-else></textarea>

    <span v-if="props.required" class="text-field__required-sign"></span>
  </div>
</template>


<style scoped lang="scss">
.text-field {
  position: relative;

  &.text-field--outlined {

    .text-field__input,
    .text-field__textarea {
      border: 1px solid #8C8E96;
    }
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 1.25rem;
    background-color: #ffffff;

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
      color: #C3C4CC;
    }
  }

  &__input {
    height: 60px;
  }

  &__textarea {
    resize: none;
    height: 100%;
  }

  &__required-sign {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;

    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #F17C5C;
  }
}
</style>