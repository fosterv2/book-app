<template>
  <div class="nav-bar">
    <!-- logo url: logomakr.com/9ATTcU -->
    <router-link to="/"><img src="https://i.imgur.com/YtTSpfV.png"></router-link>
    <p><router-link to="/about">About</router-link></p>
    <p><router-link to="/">Home</router-link></p>
    <p v-if="user.id" v-on:click="signOut"><router-link to="/signin">Sign Out</router-link></p>
    <p v-else><router-link to="/signin">Sign In</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    user: Object,
    signOut: Function
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: gray;
  position: fixed;
  width: 100%;
  margin-top: -60px;
  margin-left: -8px;
}

a {
  margin-left: 10px;
}

img {
  height: 55px;
}
</style>
