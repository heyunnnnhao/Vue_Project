<template>
  <form @submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input v-model="title" id="new-todo" placeholder="title" />
    <input v-model="content" id="new-content" placeholder="content" />
    <button>Add</button>
  </form>
  <ul>
    <eventcards
      v-for="(todo, index) in cards"
      :key="todo.id"
      :title="todo.title"
      :content="todo.content"
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
      if (this.title != "" && this.content != "") {
        this.cards.push({
          id: this.nextTodoId++,
          title: this.title,
          content: this.content,
        });
        this.title = "";
        this.content = "";
      }
    },
  },
  components: { Eventcards },
};
</script>

<style scoped lang="scss"></style>
