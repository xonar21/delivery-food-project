<template>
  <header class="header">
    <router-link to="/">
      <a class="logo" href="/">
        <img src="../assets/img/icon/logo.svg" alt="Logo" />
      </a>
    </router-link>
    <label class="address">
      <input
        type="text"
        class="input input-address"
        placeholder="Адрес доставки"
      />
    </label>
    <div class="buttons">
      <span
        class="user-name"
        :style="{ display: auth.isAuthorization ? 'block' : 'none' }"
        >{{ auth.userName }}</span
      >
      <button
        class="button button-primary button-auth"
        :style="{ display: auth.isAuthorization ? 'none' : 'flex' }"
      >
        <span class="button-auth-svg"></span>
        <span class="button-text" @click="handleOpenModalAuth">Войти</span>
      </button>
      <button
        class="button button-cart"
        id="cart-button"
        @click="handleOpenModalCart"
        :style="{ display: auth.isAuthorization ? 'flex' : 'none' }"
      >
        <span class="button-cart-svg"></span>
        <span class="button-text">Корзина</span>
      </button>
      <button
        class="button button-primary button-out"
        @click="handleLogout"
        :style="{ display: auth.isAuthorization ? 'flex' : 'none' }"
      >
        <span class="button-text">Выйти</span>
        <span class="button-out-svg"></span>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapState(['auth']),
  },
  methods: {
    ...mapActions(['setIsOpenModalCart', 'setIsOpenModalAuth', 'logout']),
    handleOpenModalCart() {
      this.setIsOpenModalCart(true);
    },
    handleOpenModalAuth() {
      this.setIsOpenModalAuth(true);
    },
    handleLogout() {
      this.logout();
    },
  },
};
</script>
