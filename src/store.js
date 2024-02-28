import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      cart: [
        {
          product_id: 1,
          product_name: "iphone",
          category: "a",
        },
      ],
    };
  },

  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },

  actions: {
    increment(context) {
      context.commit("increment");
    },
  },
});

export default store;
