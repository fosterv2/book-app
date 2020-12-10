<template>
  <div class="book" v-if='book'>
    <h1>{{ book.title }}</h1>
    <h4>By: {{ book.author_name }}</h4>
    <div class="book-info">
      <img :src='book.img_url'>
      <p>{{ book.blurb }}</p>
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
    book: function () {
      return this.books.find(bk => bk.id == this.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding-top: 45px;
}

.book-info {
  display: flex;
  justify-content: space-around;
}

img {
  max-height: 195px;
  margin-left: 70px;
  margin-right: 20px;
  margin-top: 50px;
  border: 2px solid #2c3e50;
}

.book-info p {
  margin: 50px;
}
</style>
