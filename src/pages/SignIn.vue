<template>
  <div class="sign-up">
    <h3>Sign In</h3>
    <form>
      <label>Username</label><br/>
      <input v-model="username" placeholder="Enter desired username"><br/>
      <label>Password</label><br/>
      <input v-model="password" type="password" placeholder="Enter password"><br/>
      <br/>
      <button v-on:click="handleSubmit">Sign In</button>
    </form>
    <p>Or <router-link to="/signup">Sign Up</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault()
      const body = {
        username: this.username,
        password: this.password
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
