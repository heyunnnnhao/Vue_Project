<template>
  <div class="worldclock">
    <clock></clock>
    <clock></clock>
    <p v-text="timestamp"></p>
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";

export default {
  data() {
    return {
      today: new Date(),
      timestamp: "ss",
    };
  },
  computed() {},
  mounted() {
    this.timer = window.setTimeout(() => {
      this.getNow();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    getNow: function () {
      let date =
        this.today.getFullYear() +
        "-" +
        (this.today.getMonth() + 1) +
        "-" +
        this.today.getDate();
      let time =
        this.today.getHours() +
        ":" +
        this.today.getMinutes() +
        ":" +
        this.today.getSeconds();
      this.timestamp = date + "  " + time;
      this.timer = window.setTimeout(() => {
        this.getNow();
      }, 1000);
    },
  },
  components: { Clock },
};
</script>

<style lang="sass" scoped>
</style>