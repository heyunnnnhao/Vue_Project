<template>
  <div id="app">
    <a href="https://github.com/heyunnnnhao"><img alt="Vue logo" src="./assets/logo.png"></a>
    <Calculator msg="Welcome to Yunhao's Vue.js Project"/>
    <router-view/>
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'

export default {
  name: 'app',
  components: {
    Calculator
  }
}
</script>

<style>
#app {
  font-family: 'JetBrains Mono', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
