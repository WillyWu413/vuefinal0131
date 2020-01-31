<template>
  <div id="app" class="container-fluid" style="background-color:#000">
    
    <!-- <HelloWorld/> -->
    <router-view></router-view>
    
  </div>
</template>

<script>
import HelloWorld from './components/manager/HelloWorld'

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import "./assets/all";

</style>
