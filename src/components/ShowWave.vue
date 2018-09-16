<template>
    <div>
        <Wave type = "circle"></Wave>
        <Wave></Wave>
    </div>
</template>
  
  <script>
  import Wave from './Wave' 
  export default {
    name: 'ShowWave',
    data () {
      return {
        
      }
    },
    components:{
        Wave:Wave
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  