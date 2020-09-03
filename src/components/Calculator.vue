<template>
<div class='calculator'>
  <main>
    <input type="number" v-bind:value='current'>
    <div class='keys'>
      <button class='op__key' @click='clearAll'>AC</button>
      <button class='op__key' @click='signn'>(-)</button>
      <button class='op__key' @click='percent'>%</button>
      <button class='op__key' @click='divide'>/</button>
      <button class='num__key' @click='append("7")'>7</button>
      <button class='num__key' @click='append("8")'>8</button>
      <button class='num__key' @click='append("9")'>9</button>
      <button class='op__key' @click='times'>x</button>
      <button class='num__key' @click='append("4")'>4</button>
      <button class='num__key' @click='append("5")'>5</button>
      <button class='num__key' @click='append("6")'>6</button>
      <button class='op__key' @click='minus'>-</button>
      <button class='num__key' @click='append("1")'>1</button>
      <button class='num__key' @click='append("2")'>2</button>
      <button class='num__key' @click='append("2")'>3</button>
      <button class='op__key' @click='add'>+</button>
      <span></span>
      <button class='num__key zero' @click='append("0")'>0</button>
      <button class='num__key dot' @click='dot'>.</button>
      <button class='op__key equal' @click='equal'>=</button>
    </div>
  </main>
</div>
</template>

<script>

export default {
  name: 'Calculator',
  data(){
    return {  
      previous: null,
      current: '0',
      operator: null,
      operatorClicked: false,
      sign: '',
      end: false,
    }
  },
  methods: {
    clearAll() {
      this.current = '0'
    },
    signn() {
      if(this.current != '')
        this.current = this.current.charAt(0) === '-' ?
          this.current.slice(1) : `-${this.current}`
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`
    },
    append(number) {
      this.current = '';
      if(number == '0' && this.current == '')
        this.current = ''
      else {
        if(this.operatorClicked) {
          this.current = ''
          this.operatorClicked = false
        }
        this.current = `${this.current}${number}`
      }
    },
    dot() {
      if (this.current.indexOf('.') === -1)
        this.append('.')
    },
    setPrevious() {
      this.previous = this.current
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b
      this.setPrevious()
      this.sign = '÷'
    },
    times() {
      this.operator = (a, b) => a * b
      this.setPrevious()
      this.sign = 'x'
    },
    minus() {
      this.operator = (a, b) => a - b
      this.setPrevious()
      this.sign = '-'
    },
    add() {
      this.operator = (a, b) => a + b
      this.setPrevious()
      this.sign = '+'
    },
    equal() {
      this.current = this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )
      this.previous = null
      this.sign = ''
      this.end = true
    },
    del() {
      if(this.current)
        this.current = this.current.slice(0, -1)
    },

  }
}
</script>

<style lang=scss scoped >
.hello {
  font-size: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'JetBrain';
  font-size: 20px;
}

.calculator {
  height: 55vh;
  width: 450px;
  margin-left: auto;
  margin-right: auto;
}

@mixin shadow {
  box-shadow: -6px -6px 9px #fff, 6px 6px 9px rgba(#000, 0.4);
}

@mixin shadow-inset {
  box-shadow: inset -6px -6px 9px #fff, inset 6px 6px 9px rgba(#000, 0.4);
}
main {
  @include shadow;
  padding: 2rem;
  border-radius: 30px;

  input,
  button {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input {
    @include shadow-inset;
    width: 320px;
    height: 60px;
    padding: 16px 32px;
    text-align: right;
    border: none;
    border-radius: 30px;
    text-shadow: -1px -1px 2px #fff, 2px 2px 2px rgba(0, 0, 0, 0.4);
  }

  .keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.8rem;
    margin-top: 20px;
  }

  button {
    @include shadow;
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    background: e9e9e9;

    &:hover,
    &:active {
      background: #ccc;
    }

    &:active {
      @include shadow-inset;
    }
  }

  .op__key {
    color: #019150;
  }

  .equal {
    grid-column: 3 / span 2;
    width: 160px;
  }

  .zero {
    grid-column: 1 / span 1;
  }
}
</style>
