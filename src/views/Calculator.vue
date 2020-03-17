<template>
  <div class="display">
    <main>
        <input type="number" value=0>
        <div class='keys'>
          <button class='op__key' op='clear'>AC</button>
          <button class='op__key' op='negate'>(-)</button>
          <button class='op__key' op='percent'>%</button>
          <button class='op__key' op='divide'>/</button>
          <button class='num__key'>7</button>
          <button class='num__key'>8</button>
          <button class='num__key'>9</button>
          <button class='op__key' op='multiply'>x</button>
          <button class='num__key'>4</button>
          <button class='num__key'>5</button>
          <button class='num__key'>6</button>
          <button class='op__key' op='subtract'>-</button>
          <button class='num__key'>1</button>
          <button class='num__key'>2</button>
          <button class='num__key'>3</button>
          <button class='op__key' op='add'>+</button>
          <span></span>
          <button class='num__key'>0</button>
          <button class='num__key'>.</button>
          <button class='op__key'>=</button>
        </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'Calculator',
  props: {
    msg: String
  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    font-size: 60px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "JetBrains Mono", monospace, sans-serif;
    font-size: 20px;
  }

  .display {
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
    
    input, button {
      outline: none;
    }
    
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type=number] {
      -moz-appearance:textfield;
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
      
      &:hover, &:active {
        background: #ccc;
      }
      &:active {
        @include shadow-inset;
      }
    }

    .op__key {
      color: #019150;
    }
  }

</style>
