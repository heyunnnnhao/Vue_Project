<template>
  <li>
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
    <button @click="$emit('remove')">delete</button>
  </li>
  
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
  emits: ["remove"],
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
li{
  text-align: center;
  border: black solid 2px;
  border-radius: 5%;
  margin: 1rem;
  padding: 1rem;
  width: auto;
  max-width: 20rem;
  list-style-type:none;
  .title{
    font-size: 20px;
  }
}
</style>
