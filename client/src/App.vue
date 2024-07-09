<template>
  <Header/>
  <RouterView/>
</template>
<script>
  import Header from './components/Header.vue'
  export default{
    data(){
      return{

      }
    },
    components: {
      Header
    }
  }
</script>
