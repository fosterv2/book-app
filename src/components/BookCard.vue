<template>
  <div class="book-card">
    <router-link :to='path'>
    <h3>{{ book.title }}</h3>
    <img :src='book.img_url'>
    <p>By: {{ book.author_name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: Object
  },
  computed: {
    path: function () {
      return `/books/${this.book.id}`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-card {
  width: 250px;
  border: 2px solid #2c3e50;
  border-radius: 7%;
  margin: 10px;
}
</style>
