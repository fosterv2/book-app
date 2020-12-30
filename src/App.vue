<template>
  <div id="app">
    <NavBar :user='user' :signOut='signOut' />
    <router-view :books='books' :loggedIn='loggedIn' :setUser='setUser'></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export const BASE_URL = "http://localhost:3000"

export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      books: [],
      user: {}
    }
  },
  methods: {
    signOut: function () {
      localStorage.removeItem("token")
      this.user = {}
    },
    setUser: function (user) {
      this.user = user
    }
  },
  computed: {
    loggedIn: function () {
      return !!this.user.id
    }
  },
  mounted: function () {
    fetch(`${BASE_URL}/books`)
      .then(resp => resp.json())
      .then(books => {
        this.books = books
      })
    const token = localStorage.getItem("token")
    if (token) {
      fetch(`${BASE_URL}/auth`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token
        }
      })
      .then(resp => resp.json())
      .then(response => this.setUser(response.user))
    }
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

a {
  text-decoration: none;
  color: #2c3e50;
}

a:visited {
  color: #2c3e50;
}

a:hover {
  color: black;
}

button {
  background-color: grey;
  font-size: 15px;
  border-radius: 5px;
}

input, textarea {
  padding: 5px;
  font-size: 15px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  width: 90%;
  outline: none;
  margin-bottom: 10px;
}

.error {
  color: maroon
}
</style>
