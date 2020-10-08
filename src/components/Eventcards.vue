<template>
  <div class="wrapper">
    <div>{{ title }}</div>
    <div>{{ content }}</div>
    <button @click="$emit('remove')">delete</button>
  </div>
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
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
