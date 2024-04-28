<template>
  <div class="card">
    <img
      :src="require(`@/assets/img/${product.image}`)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">
          {{ product.description }}
        </div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text" @click="handleAddProductToCart"
            >В корзину</span
          >
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ product.price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
  methods: {
    ...mapActions(['setCart']),
    handleAddProductToCart() {
      this.setCart(this.product);
    },
  },
};
</script>
