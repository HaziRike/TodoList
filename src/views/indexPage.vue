<template>
  <div class="todo">
    <router-link to="/cart"><div class="Tododwa">Wrape</div></router-link>
    <router-link to="/sult"><div class="sult">favorites</div></router-link>
    <h1 class="title">{{ title }}</h1>
    <div class="wrap">
      <input
        class="input"
        v-model="todo"
        type="text"
        placeholder="Введите текс..."
      />
      <button class="fox_box box_boy" @click="addTodo(id++)">+</button>
      <div v-for="(todo, index) in todos" :key="todo.id">
        <p>
          <span class="index_id">{{ index + 1 }}</span>
          <span
            class="todo_text"
            :class="{ todo_text_is_show: todo.checshow }"
            @click="removeTodo(index)"
            >{{ todo.text }}</span
          >
          <input v-model="todo.checshow" class="delete" type="checkbox" />
          <button class="favorit" data-text-id="1" @click="FavoritClick">
            ⭐
          </button>
        </p>
      </div>
      <hr />
      <span>Список задач: {{ todos.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Todo app",
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
      const index = 1;
      const url = `second-page.html?index=${index}`;
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fox_box {
  background-color: white;
  color: black;
  border: 2px solid #42b983;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  .box_boy {
    color: #000000;
    border: 1px solid #000000;
  }
}
.todo_text {
  background-color: white;
  color: black;
  border: 2px solid #42b983;
  height: 400px;
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
}
.todo {
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
.title {
  text-align: center;
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f6a0e5;
    }
  }
}
.todo_text {
  font-size: 22px;
  color: #000000;
}
.index_id {
  font-size: 20px;
  color: #000000;
}
.todo_text_is_show {
  font-size: 20px;
  color: rgb(197, 8, 8);
  text-decoration: line-through;
}
.Tododwa {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.sult {
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}
.input {
  border: 1px solid #cccccc;
  border-radius: 5px;
  background: #ffffff !important;
  outline: none;
  height: 24px;
  width: 120px;
  color: #030202;
  font-size: 11px;
  font-family: Tahoma;
}
</style>
