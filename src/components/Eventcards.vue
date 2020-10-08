<template>
  <li>
    {{ title }}
    {{ content }}
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
</style>
