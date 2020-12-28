<template>
  <div class="sign-up">
    <h3>Sign Up</h3>
    <h4 class="error" v-if="error">Wrong Inputs</h4>
    <form>
      <label>Name</label><br/>
      <input v-model="name" name="name" placeholder="Enter full name"><br/>
      <label>Username</label><br/>
      <input v-model="username" name="username" placeholder="Enter desired username"><br/>
      <label>Password</label><br/>
      <input v-model="password" type="password" name="password" placeholder="Enter password"><br/>
      <label>Password Confirmation</label><br/>
      <input v-model="passwordConf" type="password" name="password-confirmation" placeholder="Enter password confirmation"><br/>
      <br/>
      <button v-on:click="handleSubmit">Sign Up</button>
    </form>
    <p>Or <router-link to="/signin">Sign In</router-link></p>
  </div>
</template>

<script>
import { BASE_URL } from "../App"

export default {
  name: 'SignUp',
  props: {
    setUser: Function
  },
  data () {
    return {
      name: "",
      username: "",
      password: "",
      passwordConf: "",
      error: false
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      const body = {
        name: this.name,
        username: this.username,
        password: this.password,
        password_confirmation: this.passwordConf
      }
      fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          this.error = true
        } else {
          this.setUser(response.user)
          localStorage.setItem("token", response.jwt)
          this.$router.push('/')
        }
      })
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
