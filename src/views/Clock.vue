<template>
  <div class="clock">
    <main class="main">
      <div class="clockbox">
        <svg
          id="clock"
          xmlns="http://www.w3.org/2000/svg"
          width="600"
          height="600"
          viewBox="0 0 600 600"
        >
          <g id="face">
            <circle class="circle" cx="300" cy="300" r="253.9" />
            <path
              class="hour-marks"
              d="M300.5 94V61M506 300.5h32M300.5 506v33M94 300.5H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6"
            />
            <circle class="mid-circle" cx="300" cy="300" r="16.2" />
          </g>
          <g id="hour">
            <path class="hour-arm" d="M300.5 298V142" />
            <circle class="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          <g id="minute">
            <path class="minute-arm" d="M300.5 298V67" />
            <circle class="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
          <g id="second">
            <path class="second-arm" d="M300.5 350V55" />
            <circle class="sizing-box" cx="300" cy="300" r="253.9" />
          </g>
        </svg>
      </div>
    </main>


    <div id="time" v-cloak>{{this.myDate.getHours()}}:{{ this.myDate.getMinutes()}}:{{this.myDate.getSeconds() }}</div>
    <button @click="setMyDateToToday">Test Button</button>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from "vue";

export default {
  name: "Clock",
  setup() {
    onMounted(() => {
      console.log("Component is mounted!");
    });
  },
  data() {
    return {
      myDate: new Date(),
    };
  },
  computed() {
    return {};
  },
  methods: {
    setMyDateToToday: function () {
      var intervel = setInterval(() =>{
        this.myDate = new Date();
        console.log(this.myDate.getSeconds());
      }, 1000);
    } 
  },
};
</script>

<style lang='scss' scoped >
v-cloak {
  display: none;
}
.main {
  display: flex;
  padding: 2em;
  height: 500px;
  justify-content: center;
  align-items: middle;
}

.clockbox,
#clock {
  width: 100%;
  height: 100%;
}

/* Clock styles */
.circle {
  fill: none;
  stroke: #000;
  stroke-width: 6;
  stroke-miterlimit: 10;
}

.mid-circle {
  fill: #000;
}
.hour-marks {
  fill: none;
  stroke: #000;
  stroke-width: 4;
  stroke-miterlimit: 10;
}

.hour-arm {
  fill: none;
  stroke: #000;
  stroke-width: 15;
  stroke-miterlimit: 10;
}

.minute-arm {
  fill: none;
  stroke: #000;
  stroke-width: 8;
  stroke-miterlimit: 10;
}

.second-arm {
  fill: none;
  stroke: #000;
  stroke-width: 3;
  stroke-miterlimit: 10;
}

/* Transparent box ensuring arms center properly. */
.sizing-box {
  fill: none;
}

/* Make all arms rotate around the same center point. */
/* Optional: Use transition for animation. */
#hour,
#minute,
#second {
  transform-origin: 300px 300px;
  transition: transform 0.3s ease-in-out;
}
#time {
  font-size: 60px;
  text-align: center;
  color: black;
}

#but {
  display: block;
  max-width: 300px;
  margin: auto;
  margin-top: 20px;
}

img {
  max-width: 700px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
