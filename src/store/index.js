import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      restaurants: [],
      restaurant: {},
      isOpenModalCart: false,
      cart: [],
      isOpenModalAuth: false,
      auth: {
        isAuthorization: false,
      },
    };
  },
  mutations: {
    updateRestaurants(state, value) {
      state.restaurants = value;
    },
    updateRestaurant(state, value) {
      state.restaurant = value;
    },
    updateIsOpenModalCart(state, value) {
      state.isOpenModalCart = value;
    },
    updateCart(state, value) {
      if (state.cart.find((item) => item.id === value.id)) {
        const cart = state.cart.map((item) => {
          if (item.id === value.id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        });

        state.cart = cart;
      } else {
        state.cart = [
          ...state.cart,
          {
            ...value,
            count: 1,
          },
        ];
      }
    },
    deleteProductFromCart(state, value) {
      if (value.count > 1) {
        const cart = state.cart.map((item) => {
          if (item.id === value.id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        });

        state.cart = cart;
      } else {
        const cart = state.cart.filter((item) => item.id !== value.id);

        state.cart = cart;
      }
    },
    updateIsOpenModalAuth(state, value) {
      state.isOpenModalAuth = value;
    },
    login(state, value) {
      state.auth = {
        userName: value.login,
        isAuthorization: true,
      };
    },
    logout(state) {
      state.auth = {
        isAuthorization: false,
      };
    },
  },
  actions: {
    setRestaurants({ commit }, data) {
      commit('updateRestaurants', data);
    },
    setRestaurant({ commit }, data) {
      commit('updateRestaurant', data);
    },
    setIsOpenModalCart({ commit }, open) {
      commit('updateIsOpenModalCart', open);
    },
    setCart({ commit }, data) {
      commit('updateCart', data);
    },
    deleteProductFromCart({ commit }, data) {
      commit('deleteProductFromCart', data);
    },
    setIsOpenModalAuth({ commit }, open) {
      commit('updateIsOpenModalAuth', open);
    },
    login({ commit }, data) {
      commit('login', data);
    },
    logout({ commit }) {
      commit('logout');
    },
  },
  getters: {},
});

export default store;
