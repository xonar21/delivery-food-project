<template>
  <div :class="['modal modal-cart', { 'is-open': isOpenModalCart }]">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="handleCloseModalCart">&times;</button>
      </div>
      <div class="modal-body">
        <div class="food-row" v-for="product in cart" :key="product.id">
          <span class="food-name">{{ product.name }}</span>
          <strong class="food-price">{{ product.price }} ₽</strong>
          <div class="food-counter">
            <button
              class="counter-button"
              @click="handleDeleteProductFromCard(product)"
            >
              -
            </button>
            <span class="counter">{{ product.count }}</span>
            <button
              class="counter-button"
              @click="handleAddProductToCart(product)"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ calculatePrice }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ModalCard',
  computed: {
    ...mapState(['isOpenModalCart', 'cart']),
    calculatePrice() {
      const price = this.cart.reduce(
        (total, product) => total + product.price * product.count,
        0,
      );
      return price;
    },
  },
  methods: {
    ...mapActions(['setIsOpenModalCart', 'setCart', 'deleteProductFromCart']),
    handleCloseModalCart() {
      this.setIsOpenModalCart(false);
    },
    handleAddProductToCart(product) {
      this.setCart(product);
    },
    handleDeleteProductFromCard(product) {
      this.deleteProductFromCart(product);
    },
  },
};
</script>
