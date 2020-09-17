<template>
  <div>
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
      title: "the title goes here",
      content: "I will do some stuff",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>