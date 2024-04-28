<template>
  <router-link
    to="restaurant"
    class="card card-restaurant"
    @click="handleClickRestaurant"
  >
    <img
      :src="require(`@/assets/img/${restaurant.image}`)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restaurant.name }}</h3>
        <span class="card-tag tag">{{ restaurant.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">
          {{ restaurant.stars }}
        </div>
        <div class="price">От {{ restaurant.price }} ₽</div>
        <div class="category">{{ restaurant.kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RestaurantCard',
  props: {
    restaurant: Object,
  },
  methods: {
    ...mapActions(['setRestaurant']),
    handleClickRestaurant() {
      this.setRestaurant({
        ...this.restaurant,
        products:
          require('@/data/db').db[
            this.restaurant.products.replace('.json', '')
          ],
        restaurantCode: this.restaurant.products.replace('.json', ''),
      });
    },
  },
};
</script>
