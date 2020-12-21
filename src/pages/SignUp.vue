<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <form>
      <label>Name</label><br/>
      <input v-model="name" placeholder="Enter full name"><br/>
      <label>Username</label><br/>
      <input v-model="username" placeholder="Enter desired username"><br/>
      <label>Password</label><br/>
      <input v-model="password" type="password" placeholder="Enter password"><br/>
      <label>Password Confirmation</label><br/>
      <input v-model="passwordConf" type="password" placeholder="Enter password confirmation"><br/>
      <br/>
      <button v-on:click="handleSubmit">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      name: "",
      username: "",
      password: "",
      passwordConf: ""
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      console.log("Submitted!")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 50%;
  margin: 0px 0px 10px 24.5%;
  /* top, right, bottom, left */
  border: 3px solid #2c3e50;
  border-radius: 10px;
  padding-bottom: 15px;
}

form {
  text-align: left;
  margin-left: 25px;
}
</style>
