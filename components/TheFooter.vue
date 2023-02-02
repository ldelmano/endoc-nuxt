<script setup lang="ts">
const values = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})
</script>
    
<template>
  <footer>
    <div class="container flex flex-column xl:flex-row footer-content">
      <div class="contact-form">
        <h2 class="contact-form__title">Contact us</h2>

        <p class="contact-form__description">Drop us a line and we'll get back to you with a quote!</p>

        <form>
          <div class="grid">
            <div class="col-12 md:col-6">
              <BaseTextField class="mb-3" v-model="values.name" required placeholder="Name" />

              <BaseTextField class="mb-3" v-model="values.email" required placeholder="Email" type="email" />

              <BaseTextField v-model="values.phone" placeholder="Phone" />
            </div>

            <div class="col-12 md:col-6 flex flex-column">
              <BaseTextField class="mb-3" v-model="values.company" required placeholder="Company Name" />

              <BaseTextField class="flex-1" textarea v-model="values.message" required placeholder="Message" />
            </div>
          </div>

          <div class="grid mt-5">
            <div class="col-12 md:col-6">
              <BaseButton class="w-full justify-content-center" label="send message" />
            </div>
            <div class="col-12 md:col-6 flex align-items-center justify-content-center">
              <div class="legend">
                <span class="legend__dot"></span>
              </div>
              <span class="legend-value"> - this field is required</span>
            </div>
          </div>
        </form>
      </div>

      <div class="endoc-info">
        <img src="/imgs/logo-secondary.svg" class="endoc-info__logo" />

        <div class="flex flex-column mb-5">
          <span class="endoc-info__field-header">Call us today</span>
          <span class="endoc-info__field-value">1-800-209-5513</span>
        </div>

        <div class="flex flex-column mb-5">
          <span class="endoc-info__field-header">Write us</span>
          <span class="endoc-info__field-value">info@endoc.com</span>
        </div>

        <div class="flex flex-column">
          <span class="endoc-info__field-header">Hours</span>

          <div class="business-hours">
            <span class="business-hours__day">Monday - Thursday:</span>
            <span class="business-hours__time">9:30am - 5:30pm</span>
          </div>

          <div class="business-hours">
            <span class="business-hours__day">Friday:</span>
            <span class="business-hours__time">9:30am - 12:30pm</span>
          </div>

          <div class="business-hours">
            <span class="business-hours__day">Saturday/Sunday:</span>
            <span class="business-hours__time">Closed</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container bottom-footer">
      <div class="bottom-footer__divider"></div>

      <div class="flex flex-column md:flex-row md:justify-content-between py-3">
        <NuxtLink to="#">Privacy Policy</NuxtLink>

        <span>EnDoc 2022 © All Rights reserved.</span>
      </div>
    </div>
  </footer>
</template>


<style scoped lang="scss">
footer {
  margin-top: 20em;
  background-color: #ffffff;
}

.bottom-footer {
  margin-top: 3em;
  font-weight: 400;
  font-size: 0.875em;
  color: #8C8E96;

  &__divider {
    height: 1px;
    width: 100%;

    background-color: #E0E2EB;
  }

  a {
    text-decoration: none;
    color: #8C8E96;
  }

}

.contact-form {
  flex: 1;
  margin-top: -10em;
  padding: 2em;
  border-radius: 1.875em;
  background-image: url('~/assets/imgs/contact-form-bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    padding: 4em;
  }

  &__title {
    margin: 0 0 0.5em;
    font-weight: 600;
    font-size: 2.25em;

    color: var(--main-black-color);
  }

  &__description {
    margin: 0 0 3.5em;
    font-weight: 500;
    font-size: 1.2em;

    color: var(--main-black-color);

    opacity: 0.5;
  }

  .legend {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 0.5em;
    background-color: #ffffff;
    border-radius: 50%;

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #F17C5C;
    }

    &-value {
      font-weight: 400;
      font-size: 1em;

      color: var(--main-black-color);
    }
  }
}

.endoc-info {
  padding: 2em;
  border-radius: 1.875em;
  background-color: var(--dark-green-color);

  @media (min-width: 768px) {
    padding: 4em;
  }

  @media (min-width: 1200px) {
    margin-top: -10em;
  }

  &__logo {
    margin-bottom: 4em;
  }

  &__field-header {
    font-weight: 500;
    font-size: 1.2em;
    color: #FFFFFF;
    opacity: 0.5;
  }

  &__field-value {
    font-weight: 500;
    font-size: 1.75em;

    color: #FFFFFF;

  }

  .business-hours {
    margin-bottom: 0.5em;
    font-weight: 400;
    font-size: 1em;
    color: #FFFFFF;

    &__day {
      opacity: 0.5;
    }

    &__time {
      margin-left: 0.5em;
    }
  }
}
</style>