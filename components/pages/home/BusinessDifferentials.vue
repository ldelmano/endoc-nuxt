<script setup lang="ts">
import { BaseFileContent } from "@/models";
import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

interface ListItem {
  description: string;
  label: string;
}

interface Section extends MarkdownParsedContent {
  list: ListItem[];
  title: string;
}

const sectionId = "content:home:section1.md";
const { data } = await useAsyncData("home:section1", () =>
  queryContent<Section>("home").where({ _id: sectionId }).findOne()
);

onMounted(() => {
  console.log(data.value);
});
</script>

<template>
  <section class="business-diff">
    <div>
      <h3>{{ data?.title }}</h3>

      {{ data?.body }}
    </div>


  </section>
</template>

<style scoped>

</style>
