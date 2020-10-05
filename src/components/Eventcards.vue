<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">delete</button>
  </li>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
