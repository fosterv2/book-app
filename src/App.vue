<template>
  <div id="app">
    <NavBar />
    <Books :books='books' />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Books from './components/Books'

export default {
  name: 'App',
  components: {
    Books,
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
</style>
