<template>
  <form @submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input v-model="content" id="new-todo" placeholder="E.g. Feed the cat" />
    <button>Add</button>
  </form>
  <ul>
    <eventcards
      v-for="(todo, index) in cards"
      :key="todo.id"
      :title="todo.title"
      @remove="cards.splice(index, 1)"
    ></eventcards>
  </ul>
</template>

<script>
import Eventcards from "../components/Eventcards.vue";

export default {
  props: {
    listName: String,
  },
  data() {
    return {
      content: "",
      cards: [],
      nextTodoId: 4,
    };
  },
  methods: {
    addNewTodo() {
      this.cards.push({
        id: this.nextTodoId++,
        title: this.content,
      });
      this.content = "";
    },
  },
  components: { Eventcards },
};
</script>

<style scoped lang="scss"></style>
