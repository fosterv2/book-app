<template>
  <div class="nav-bar">
    <!-- <img src=""> -->
    <p>About</p>
    <p>Home</p>
    <p>Sign In</p>
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
