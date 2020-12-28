<template>
  <div class="book" v-if='book'>
    <h1>{{ book.title }}</h1>
    <h4>By: {{ book.author_name }}</h4>
    <h4>Average Rating: {{ averageRating }}</h4>
    <div class="book-info">
      <img v-if="defaultPicture" src="https://i.imgur.com/YtTSpfV.png">
      <img v-else :src='book.img_url'>
      <p>{{ book.blurb }}</p>
    </div>
    <div class="lower-book">
      <ReviewForm
        v-if="formCondition"
        :bookName="book.title"
        :handleBack="toggleFormCondition"
        :bookId="book.id"
        :submitReview="submitReview"
        :error="error"
      />
      <button v-else v-on:click="toggleFormCondition">Add Review</button>
      <div class="reviews">
        <h3>Reviews</h3>
        <ReviewCard
          v-for='review in reviews'
          :key='review.id'
          :review='review'
        />
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Oops, something went wrong</h1>
  </div>
</template>

<script>
import ReviewCard from '../components/ReviewCard'
import ReviewForm from '../components/ReviewForm'
import { BASE_URL } from "../App"

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
      formCondition: false,
      error: false
    }
  },
  computed: {
    book: function () {
      return this.books.find(bk => bk.id == this.bookId)
    },
    defaultPicture: function () {
      return !this.book.img_url.match(/http/)
    },
    averageRating: function () {
      if (this.reviews.length > 0) {
        return (this.reviews.reduce((accum, review) => accum + review.rating, 0) / this.reviews.length).toFixed(2)
      } else {
        return 0
      }
    }
  },
  mounted: function () {
    fetch(`${BASE_URL}/reviews/${this.bookId}`)
      .then(resp => resp.json())
      .then(reviews => {
        this.reviews = reviews
      })
  },
  methods: {
    toggleFormCondition: function () {
      this.formCondition = !this.formCondition
    },
    submitReview: function (body) {
      fetch(`${BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.error) {
          this.error = true
        } else {
          this.formCondition = false
          this.reviews.push(response)
        }
      })
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

img {
  max-width: 175px;
}

/* .lower-book {
  display: flex;
  justify-content: space-around;
} */
</style>
