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
    <eventcard>
      <h3 slot="title">{{ title }}</h3>
      <p slot="content">{{ content }}</p>
    </eventcard>
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
      title: " ",
      content: " ",
    };
  },
  methods: {
    createNew: function () {
      
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