<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'

const route = useRoute();

const isMobileMenuOpened = ref(false);

const toggleMenu = () => {
  isMobileMenuOpened.value = !isMobileMenuOpened.value
}

const closeMenu = () => {
  if (!isMobileMenuOpened.value) return;

  isMobileMenuOpened.value = false;
}
</script>

<template>
  <header :class="['header', !route.meta.layout && 'header--internal']">
    <div class="header__left">
      <div class="header__left-mobile">
        <NuxtLink to="/">
          <img src="/imgs/logo-primary.svg" class="header__logo" alt="Endoc envelopes" />
        </NuxtLink>

        <button class="btn-mobile-menu" @click="toggleMenu">
          <i class="icon-menu"></i>
        </button>
      </div>

      <div :class="['header__menu-overlay', isMobileMenuOpened ? 'fade-in' : 'fade-out']"></div>

      <OnClickOutside @trigger="closeMenu">
        <nav :class="['header__menu', isMobileMenuOpened && 'header__menu--open']">
          <ul>
            <li>
              <NuxtLink to="/">home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">about</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/become-a-seller">become a seller</NuxtLink>
            </li>
          </ul>
        </nav>
      </OnClickOutside>
    </div>
    <div class="header__right hidden md:flex">
      <TheCategoryMenu />

      <BaseButton to="/" variant="secondary" label="contact us" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em;
  z-index: 15;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &--internal {
    border-bottom: 1px solid #E0E2EB;
  }

  &__logo {
    width: 14em;
  }

  &__left {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-mobile {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }
  }

  &__menu-overlay {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);

    visibility: hidden;
    opacity: 0;

    &.fade-in {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s linear 0s, opacity 300ms;
    }

    &.fade-out {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s linear 300ms, opacity 300ms;
    }
  }

  &__menu {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 20;
    height: 100vh;
    width: 65vw;
    background-color: #006a6e;

    transform: translateX(100%);
    transition: transform 300ms ease;

    &--open {
      transform: translateX(0);
    }

    @media (min-width: 768px) {
      position: initial;
      height: auto;
      width: auto;
      background-color: transparent;
      transform: none;
      margin-left: 2em;
    }

    ul {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding-left: 0;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }

    a {
      display: flex;
      padding: 0.5em 1em;
      font-size: 1.1em;
      font-weight: 500;
      text-decoration: none;
      color: #ffffff;
      transition: color 200ms ease-in-out;

      &:hover {
        color: #006a6e;
      }

      @media (min-width: 768px) {
        color: #323747;

        &.router-link-exact-active {
          color: #006a6e;
        }
      }
    }

  }

  .btn-mobile-menu {
    border: none;
    background-color: transparent;

    @media (min-width: 768px) {
      display: none;
    }

    i {
      font-size: 2.5em;
      color: #323747;
    }
  }


}
</style>