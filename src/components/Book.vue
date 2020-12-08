<template>
  <div class="book" v-if='book'>
    <!-- <h1>I'm for a single Book</h1> -->
    <h1>{{ book.name }}</h1>
    <div name="book-info">
      <img :src='book.img_url'>
      <p>By: {{ book.author_name }}</p>
    </div>
  </div>
  <div v-else>
    <h1>Oops, something went wrong</h1>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    books: Array,
    id: String
  },
  computed: {
    book: function findBook() {
      return this.books.find(bk => bk.id == this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-info {
  display: flex;
}
</style>
