import { createRouter, createWebHistory } from 'vue-router';

import ViewRestaurants from '../pages/ViewRestaurants';
import ViewRestaurant from '../pages/ViewRestaurant';

const routes = [
  { path: '/', component: ViewRestaurants },
  { path: '/restaurant', component: ViewRestaurant },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
