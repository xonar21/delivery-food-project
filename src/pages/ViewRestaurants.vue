<template>
  <section class="container-promo">
    <section class="promo pizza">
      <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
      <p class="promo-text">
        Блюда из любимого ресторана привезет курьер в перчатках, маске и с
        антисептиком
      </p>
    </section>
  </section>
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          v-model="searchInput"
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants"
        :key="index"
        :restaurant="restaurant"
      />
    </div>
  </section>
</template>

<script>
import RestaurantCard from '../components/RestaurantCard.vue';
import db from '../data/db.json';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ViewRestaurants',
  data() {
    return {
      searchInput: '',
    };
  },
  components: {
    RestaurantCard,
  },
  computed: {
    ...mapState(['restaurants']),
  },
  methods: {
    ...mapActions(['setRestaurants']),
  },
  mounted() {
    this.setRestaurants(db.db.partners);
  },
  watch: {
    searchInput(e) {
      if (!e) {
        this.setRestaurants(db.db.partners);
        return;
      }
      this.setRestaurants(
        this.restaurants.filter(
          (item) =>
            item.name.toLowerCase().includes(e.toLowerCase()) ||
            item.kitchen.toLowerCase().includes(e.toLowerCase()),
        ),
      );
    },
  },
};
</script>
