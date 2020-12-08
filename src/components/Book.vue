<template>
  <div class="book">
    <h1>I'm for a single Book</h1>
    <!-- <h1>{{ book.name }}</h1>
    <div name="book-info">
      <img :src='book.img_url'>
      <p>By: {{ book.author_name }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.book-info {
  display: flex;
}
</style>
