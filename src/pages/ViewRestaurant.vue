<template>
  <section class="menu">
    <div class="section-heading">
      <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
      <div class="card-info flex-1">
        <div class="rating">
          {{ restaurant.stars }}
        </div>
        <div class="price">От {{ restaurant.price }} ₽</div>
        <div class="category">{{ restaurant.kitchen }}</div>
        <label class="search">
          <input
            v-model="searchInput"
            type="text"
            class="input input-search"
            placeholder="Поиск позиций и ингредиентов"
          />
        </label>
        <select
          class="select"
          :style="{
            color: !sortOrder || sortOrder === 'none' ? 'gray' : 'black',
          }"
          v-model="sortOrder"
          @change="sortProducts"
        >
          <option value="" disabled selected>Сортировать по цене</option>
          <option value="none">Без сортировки</option>
          <option value="ascending">Сначала дешевые</option>
          <option value="descending">Сначала дорогие</option>
        </select>
      </div>
    </div>
    <div class="cards cards-menu">
      <ProductCard
        v-for="(product, index) in restaurant.products"
        :key="index"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductCard from '../components/ProductCard';

export default {
  name: 'ViewRestaurant',
  data() {
    return {
      searchInput: '',
      sortOrder: '',
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(['restaurant']),
  },
  methods: {
    ...mapActions(['setRestaurant']),
    sortProducts() {
      let products = require('@/data/db').db[this.restaurant.restaurantCode];
      if (this.sortOrder === 'none') {
        this.setRestaurant({ ...this.restaurant, products });
        return;
      }

      let sortedProducts = [...this.restaurant.products];
      if (this.sortOrder === 'ascending') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'descending') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      this.setRestaurant({ ...this.restaurant, products: sortedProducts });
    },
  },
  unmounted() {
    this.setRestaurant({});
  },
  watch: {
    searchInput(e) {
      const products = require('@/data/db').db[this.restaurant.restaurantCode];

      if (!e) {
        this.setRestaurant({ ...this.restaurant, products });
        return;
      }

      this.setRestaurant({
        ...this.restaurant,
        products: products.filter(
          (item) =>
            item.name.toLowerCase().includes(e.toLowerCase()) ||
            item.description.toLowerCase().includes(e.toLowerCase()),
        ),
      });
      this.sortProducts();
    },
    sortOrder() {
      this.sortProducts();
    },
  },
};
</script>
