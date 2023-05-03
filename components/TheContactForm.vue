<template>
  <div :class="['contact-form', visible ? 'contact-form--visible' : '']">
    <span class="close-button" @click="emit('update:visible', !visible)">
      <i class="icon-times"></i>
    </span>

    <div class="contact-form__imgs">
      <img src="@/assets/imgs/home-top-banner-envelope-3.png" class="envelope-2" />
      <img src="@/assets/imgs/home-top-banner-envelope-2.png" class="envelope-1" />
    </div>

    <div class="contact-form__container">
      <div class="form-title" v-if="!formSent">
        <h2>Contact Us</h2>

        <p>Drop us a line and we'll get back to you with a quote!</p>
      </div>
      <div class="form-title" v-else>
        <h2>Thank you!</h2>

        <p>Our top-notch customer service staff will respond within the next 24 hours.</p>
      </div>

      <form v-if="!formSent">
        <div class="grid">
          <div class="col-12 md:col-6">
            <BaseTextField outlined class="mb-3" v-model="values.name" required placeholder="Name" />

            <BaseTextField outlined class="mb-3" v-model="values.email" required placeholder="Email" type="email" />

            <BaseTextField outlined required v-model="values.phone" placeholder="Phone" />
          </div>

          <div class="col-12 md:col-6 flex flex-column">
            <BaseTextField outlined class="mb-3" v-model="values.company" required placeholder="Company Name" />

            <BaseTextField outlined class="flex-1" textarea v-model="values.message" required placeholder="Message" />
          </div>
        </div>

        <div class="flex flex-column align-items-center justify-content-center mt-5">
          <div class="flex align-items-center justify-content-center">
            <div class="legend">
              <span class="legend__dot"></span>
            </div>
            <span class="legend-value"> - this field is required</span>
          </div>

          <BaseButton class="justify-content-center mt-5" label="send message" @click="submit" :loading="loading" />
        </div>
      </form>

      <div class="divider"></div>


      <div class="grid">
        <div class="col-6 flex flex-column">
          <span class="info-label">Call us today</span>
          <span class="info-value">1-800-209-5513</span>
        </div>
        <div class="col-6 flex flex-column">
          <span class="info-label">Write us</span>
          <span class="info-value">info@endoc.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:visible', visible: boolean): void;
}>()

const values = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const loading = ref(false);
const formSent = ref(false);

const submit = async () => {
  loading.value = true;

  const form = {
    Secret: import.meta.env.VITE_API_SECRET,
    Name: values.name,
    Email: values.email,
    Phone: values.phone,
    CompanyName: values.company,
    Message: values.message
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact-us`, {
      method: 'POST',
      body: JSON.stringify(form)
    })

    const data = await response.json();

    if (data) {
      formSent.value = true;

      console.log(data);
    } else {
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    alert('Something went wrong. Please try again later.')
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped lang="scss">
.divider {
  margin: 5em 0 2.5em;
  width: 100%;
  height: 1px;
  background-color: #E0E2EB;
}

.info-label {
  font-weight: 500;
  font-size: 1.125em;
  color: var(--main-black-color);

  opacity: 0.5;
}

.info-value {
  font-weight: 500;
  font-size: 1.625em;
  color: var(--dark-green-color);
}

.close-button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: -26px;
  width: 52px;
  height: 52px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;

  i {
    font-size: 1em;
  }
}

.contact-form {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  max-width: 750px;
  height: 100vh;
  padding: 5em;
  background-color: white;
  z-index: 11;

  transform: translateX(calc(100% + 30px));
  transition: transform 300ms ease;

  &--visible {
    transform: translateX(0);
  }
}

.contact-form__imgs {
  position: relative;
  display: flex;
  justify-content: center;
  top: -20%;

  img {
    position: absolute;
    width: 100%;
    max-width: 320px;
  }

  .envelope-1 {
    transform: rotate(45deg) translate(-20px, -30px);
  }

  .envelope-2 {}
}

.contact-form__container {
  padding-top: 10em;
}

.form-title {
  text-align: center;

  h2 {
    margin: 0 0 1rem;
    font-weight: 600;
    font-size: 2.25em;

    color: var(--main-black-color);
  }

  p {
    font-weight: 500;
    font-size: 1.125em;
    color: var(--main-black-color);

    opacity: 0.5;
  }
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
</style>