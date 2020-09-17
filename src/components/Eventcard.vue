<template>
  <div class="card">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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

