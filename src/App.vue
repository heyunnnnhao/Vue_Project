<template>
  <div id="app">
    <div class="about">
      <a href="https://github.com/heyunnnnhao" target="_blank">
        <img alt="Logo Here" src="../src/assets/logo.png" title="yeahilikethewitchersowhat" />
      </a>
      <h1>
        <p>Welcome to Yunhao's Vue.js Project</p>
      </h1>
      <p>This is a showcase page to demostrate some of my</p>
      <p>mini projects redone using Vue.js</p>
      <h4>
        <p>Stay simple. Stay naive</p>
      </h4>
    </div>

    <hr />
    <div class="nav">
      <router-link to="/">About</router-link> | 
      <router-link to="/calculator">Calculator</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
// use them if you wanna directly insert components
// import Calculator from "./views/Calculator.vue";
// import About from "./views/About.vue"
export default {
  name: "app",
  // components: {
  //   Calculator,
  //   About,
  // },
  data: function () {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "JetBrain";
  src: url("../src/assets/fonts/JetBrainsMono-Regular.ttf");
}
#app {
  font-family: "JetBrain";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  p {
    margin: 20px;
  }
  hr {
    border: 0;
    height: 1px;
    margin: 60px;
    background-image: linear-gradient(
      to right,
      rgba(75, 109, 85, 0),
      rgba(41, 56, 52, 0.2),
      rgba(163, 45, 45, 0)
    );
  }
}
#nav {
  padding: 40px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
