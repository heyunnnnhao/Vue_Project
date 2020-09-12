<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p>{{ event }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "clean ups",
      event: "clean that entire house",
    };
  },
};
</script>

<style lang='scss' scoped>
.card {
  max-width: 20em;
  margin: 1em;
  border: solid 3px;
}
</style>

