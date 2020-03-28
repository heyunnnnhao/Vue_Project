<template>
  <div id="app">

    <div class="about">
      <a href="https://github.com/heyunnnnhao" target="_blank"><img alt="Logo Here" src="../src/assets/logo.png" title="why you hover?"></a>
      <h1>Welcome to Yunhao's Vue.js Project</h1>
      <p>This is a showcase project to demostrate some of my </p>
      <p>mini projects redone using Vue.js</p>
      <h4><p>Stay simple. Stay naive</p></h4>
    </div>

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
p{
  padding: 8px;
}
  
</style>
