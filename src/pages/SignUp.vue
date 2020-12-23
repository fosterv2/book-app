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
    <p>Or <router-link to="/signin">Sign In</router-link></p>
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
      const body = {
        name: this.name,
        username: this.username,
        password: this.password,
        password_confirmation: this.passwordConf
      }
      fetch(`http://localhost:3000/users`, {
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
          // do someting for errors
        } else {
          // props.setUser(response.user)
          localStorage.setItem("token", response.jwt)
          // props.history.push('/')
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
