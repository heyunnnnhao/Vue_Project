<template>
  <div>
    <router-link :to="{name : 'eventcard'}"></router-link>
  </div>
</template>

<script>
import Eventcard from "@/components/Eventcard.vue";
export default {
  components: {
    Eventcard,
  },
};
</script>

<style lang="scss" scoped>
</style>