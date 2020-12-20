<template>
  <div class="books">
    <BookCard
      v-for='book in books'
      :key='book.id'
      :book='book'
    />
  </div>
</template>

<script>
import BookCard from '../components/BookCard'

export default {
  name: 'Books',
  components: {
    BookCard
  },
  props: {
    books: Array
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
