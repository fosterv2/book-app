<template>
  <div class="book-card">
    <h3>{{ book.name }}</h3>
    <img :src='book.img_url'>
    <p>By: {{ book.author_name }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: Object
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
