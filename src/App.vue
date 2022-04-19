<template>
<NavBar />
  <router-view/>
</template>

<script>
import NavBar from '../src/components/navBar/NavBar.vue'

export default {
  name: 'App',
  components : {
    NavBar
  }
}

</script>
<style>
*{
  box-sizing: border-box;
}
html{
  height: 100%;
}
body{
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}



/*nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
