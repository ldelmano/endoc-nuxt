<template>
  <ul class="grid my-5 numbers">
    <li class="col-12 md:col-4 ">
      <div class="numbers__item">
        <div class="numbers__item-value">1000+</div>

        <span class="numbers__item-label">Regular Clients</span>
      </div>
    </li>

    <li class="col-12 md:col-4 ">
      <div class="numbers__item">
        <div class="numbers__item-value">50 000</div>

        <span class="numbers__item-label">Envelopes per month</span>
      </div>
    </li>

    <li class="col-12 md:col-4 ">
      <div class="numbers__item">
        <div class="numbers__item-value">100M+</div>

        <span class="numbers__item-label">Envelopes Supplied</span>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>

<style scoped>
.numbers {
  list-style: none;
  padding-left: 0;
}

.numbers__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #D5F0F1;
  border-radius: 1.875em;
  padding: 0.625em;
  color: var(--dark-green-color);
}

.numbers__item-value {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 80px;
  border-radius: 1.25rem;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 2.25em;
}

.numbers__item-label {
  margin-left: 1.5rem;
  font-weight: 500;
  font-size: 1.25em;
}
</style>