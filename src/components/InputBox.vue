<template> 
  <div class='inputbox'>
    <input v-model='value' max='9' min='0'>
    <button class='btn' v-on:click='submit'>Submit</button>
  </div>
</template>

<script>

export default {
  data(){
    return {  
      value: 0
    }
  },
  methods:{
    
  }
}
</script>  

<style lang=scss scoped>
  @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
</style>