<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

  export default {
  
  }

</script>

<style lang="scss">
@font-face {
    font-family: "JetBrain";
    src: url("../src/assets/fonts/JetBrainsMono-Regular.ttf");
}
#app {
  font-family: 'JetBrain';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
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
