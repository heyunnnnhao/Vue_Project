<template>
  <div id="app">
    <a href="https://github.com/heyunnnnhao" target="_blank"><img alt="Logo Here" src="./assets/logo.png" title="why you hover?" target="_blank"></a>
    <h1>Welcome to Yunhao's Vue.js Project</h1>
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
#app {
  font-family: 'JetBrains Mono', monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
