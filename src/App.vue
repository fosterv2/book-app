<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
    <!-- <Books /> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar'
// import Books from './components/Books'

export default {
  name: 'App',
  components: {
    // Books,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
