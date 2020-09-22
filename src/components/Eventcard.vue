<template>
  <div class="card">
    <h3>{{title}}</h3>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'Eventcard',
  props:{
    title: String,
    content: String
  },
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

