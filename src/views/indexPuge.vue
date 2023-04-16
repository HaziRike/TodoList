<template>
  <div>
    <div class="cart">
      <router-link to="/cart"><div class="Tododwa">Wrape</div></router-link>
      <router-link to="/"><div class="Tododwa">Todo</div></router-link>
      <div v-for="(data, index) in favorites_data" :key="index">
        <span>{{ index + 1 }}</span>
        <span class="text"> {{ data.text }} </span>
        <button class="delete" @click="DeleteClick, index">❌</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      todos: [],
    };
  },
  computed: {
    favorites_data() {
      return this.$store.getters["getFavourites"];
    },
  },
  methods: {
    DeleteClick(index) {
      this.favorites_data(index, 1);
    },
  },
};
</script>

<style scoped>
.cart {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #42b983;
  width: 400px;
  height: 500px;
  padding: 30px;
  outline: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
}
.back {
  width: 200px;
  cursor: pointer;
  color: green;
}
</style>
