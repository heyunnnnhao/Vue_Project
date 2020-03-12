<template>
  <div id="app">
    <a href="https://github.com/heyunnnnhao"><img alt="Vue logo" src="./assets/logo.png" title="why you hover?"></a>
    <h1>Welcome to Yunhao's Vue.js Project</h1>
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/calculator">Calculator</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
