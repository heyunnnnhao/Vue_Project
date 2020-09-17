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
  },
};
</script>

<style lang="scss" scoped>
</style>