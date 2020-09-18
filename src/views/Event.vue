<template>
  <div>
    <input
      v-model="title"
      placeholder="enter your title"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'enter your title'"
    />
    <input
      v-model="content"
      placeholder="enter your content"
      onfocus="this.placeholder = ''"
      onblur="this.placeholder = 'enter your content'"
    />
    <button v-on:click="createNew">Add</button>
    <button v-on:click="clear">Clear</button>
    <eventcard :number="i" v-for="i in count" :key="i"/>
  </div>
</template>

<script>
import Eventcard from "@/components/Eventcard.vue";
export default {
  components: {
    Eventcard,
  },
  data() {
    return {
      count: 1,
      title: " ",
      content: " ",
    };
  },
  methods: {
    createNew: function () {
      this.count++;
    },
    clear: function () {
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>