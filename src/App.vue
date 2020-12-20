<template>
  <div id="app">
    <NavBar />
    <router-view :books='books'></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data () {
    return {
      books: []
    }
  },
  mounted: function () {
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(books => {
        this.books = books
      })
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
</style>
