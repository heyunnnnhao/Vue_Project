<template>
  <div id="app">
    <div class="about">
      <a href="https://github.com/heyunnnnhao" target="_blank"><img alt="Logo Here" src="assets/logo.png" title="why you hover?"></a>
      <h1>Welcome to Yunhao's Vue.js Project</h1>
      <div>
        <p>This is my first more or less complete project</p>
        <p>I am practicing using HTML, CSS, JavaScript, Vue.js, and perhaps Electron through doing this project</p>
        <p>I believe this project will someday demostrate that I possess adequate knowledge of technologies mentioned above</p>
        <h4><p>Stay simple. Stay naive</p></h4>
      </div>
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
