<template>
  <div class="todo">
    <router-link to="/"><div class="Tododwa">Todo</div></router-link>
    <router-link to="/sult"><div class="sult">Favorites</div></router-link>
    <h1 class="title">{{ title }}</h1>
    <div class="wrap">
      <p>{{ todo }}</p>
      <input
        class="input"
        v-model="todo"
        type="text"
        placeholder="Введите текс..."
      />
      <button class="fox_box" @click="addTodo(id++)">+</button>
      <div v-for="(todo, index) in todos" :key="todo.id">
        <p>
          <span class="index_id">{{ index + 1 }}</span>
          <span>.{{ todo.text }}</span>
          <button class="delete.block" @click="removeTodo">❌</button>
          <button class="favorit" @click="FavoritClick">⭐</button>
        </p>
      </div>
      <hr />
      <span>Список дел: {{ todos.length }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Wrape",
      todo: "",
      todos: [],
      checshow: false,
      id: 0,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.id,
        text: this.todo,
        isComplete: this.checshow,
      });
      this.todo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    FavoritClick() {
      this.$store.commit("FavoritClick", this.todos);
    },
  },
};
</script>

<style scoped></style>
