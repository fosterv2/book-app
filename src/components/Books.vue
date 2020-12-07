<template>
  <div class="books">
    <Book
      v-for='book in books'
      :key='book.id'
      :book='book'
    />
  </div>
</template>

<script>
import Book from './Book'

export default {
  name: 'Books',
  components: {
    Book
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
