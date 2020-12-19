<template>
  <div class="book" v-if='book'>
    <h1>{{ book.title }}</h1>
    <h4>By: {{ book.author_name }}</h4>
    <div class="book-info">
      <img :src='book.img_url'>
      <p>{{ book.blurb }}</p>
    </div>
    <div class="lower-book">
      <div class="reviews">
        <h3>Reviews</h3>
        <ReviewCard
          v-for='review in reviews'
          :key='review.id'
          :review='review'
        />
      </div>
      <ReviewForm :bookName="book.title" v-if="formCondition" />
      <button v-else v-on:click="formCondition = !formCondition">Add Review</button>
    </div>
  </div>
  <div v-else>
    <h1>Oops, something went wrong</h1>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'

export default {
  name: 'Book',
  props: {
    books: Array,
    bookId: String
  },
  components: {
    ReviewCard,
    ReviewForm
  },
  data () {
    return {
      reviews: [],
      formCondition: false
    }
  },
  computed: {
    book: function () {
      return this.books.find(bk => bk.id == this.bookId)
    }
  },
  mounted: function () {
    fetch(`http://localhost:3000/reviews/${this.bookId}`)
      .then(resp => resp.json())
      .then(reviews => {
        this.reviews = reviews
      })
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

/* .lower-book {
  display: flex;
  justify-content: space-around;
} */
</style>
