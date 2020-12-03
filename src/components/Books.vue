<template>
  <div class="hello">
    <h3>{{ book.name }}</h3>
    <img :src='book.img_url'>
    <p>By: {{ book.author_name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: {
    book: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
