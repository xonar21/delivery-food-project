<template>
  <div :class="['modal-auth', { 'is-open': isOpenModalAuth }]">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="handleCloseModalAuth">&times;</button>
      <form id="logInForm" @submit.prevent="handleAuth" ref="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин*</span>
            <input id="login" type="text" v-model="payload.login" required />
          </label>
          <label class="label-auth">
            <span>Пароль*</span>
            <input
              id="password"
              type="password"
              v-model="payload.password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}"
              title="Пароль должен содержать минимум 8 символов, включая хотя бы одну цифру, одну прописную и одну строчную букву, а также один специальный символ."
            />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button
              class="button button-primary button-login"
              :class="[
                'button button-primary button-login',
                { 'is-disabled-button': isValid() },
              ]"
              type="submit"
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ModalAuth',
  data() {
    return {
      payload: {
        login: '',
        password: '',
      },
    };
  },
  computed: {
    ...mapState(['isOpenModalAuth', 'auth']),
  },
  methods: {
    ...mapActions(['setIsOpenModalAuth', 'login']),
    handleResetFields() {
      this.payload.login = '';
      this.payload.password = '';
    },
    handleCloseModalAuth() {
      this.setIsOpenModalAuth(false);
      this.handleResetFields();
    },
    handleAuth() {
      this.login(this.payload);
      this.setIsOpenModalAuth(false);
      this.handleResetFields();
    },
    isValid() {
      if (this.$refs.logInForm) {
        return !this.$refs.logInForm.checkValidity();
      }
      return false;
    },
  },
};
</script>
