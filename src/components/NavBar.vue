<template>
  <div class="nav-bar">
    <!-- <img src=""> -->
    <p><router-link to="/about">About</router-link></p>
    <p><router-link to="/">Home</router-link></p>
    <p><router-link to="/">Sign In</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  background: gray;
  position: fixed;
  width: 100%;
  margin-top: -60px;
  margin-left: -8px;
}
</style>
