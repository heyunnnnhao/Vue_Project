<template>
  <div class="worldclock">
    <div class="clocks"><clock class="clock"></clock></div>
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";

export default {
  data() {
    return {};
  },
  computed() {},
  methods: {},
  components: { Clock },
};
</script>

<style lang="scss" scoped>
.clocks {
  display: flex;
  justify-content: center;
}
</style>