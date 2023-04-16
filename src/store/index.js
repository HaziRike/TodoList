import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: null,
  },
  getters: {
    getFavourites() {
      return JSON.parse(localStorage.getItem("favorites"));
    },
  },
  mutations: {
    FavoritClick(state, payload) {
      let favorites_arr = [];
      let local_data = JSON.parse(localStorage.getItem("favorites"));
      favorites_arr = local_data ? local_data : [];
      favorites_arr.push(payload);
      console.log(favorites_arr);
      localStorage.setItem("favorites", JSON.stringify(payload));
    },
  },
  actions: {},
  modules: {},
});
